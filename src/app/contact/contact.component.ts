import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('contactName') contactName!: ElementRef;
  @ViewChild('contactMail') contactMail!: ElementRef;
  @ViewChild('contactText') contactText!: ElementRef;
  @ViewChild('sendBtn') Button!: ElementRef;
  Btn: boolean = false;
  message: boolean = false;
  async sendMail() {
    let Name = this.contactName.nativeElement;
    let Mail = this.contactMail.nativeElement;
    let Message = this.contactText.nativeElement;

    this.disableElemts(Name, Mail, Message);
    let fd = new FormData();
    fd.append('contactName', Name.value);
    fd.append('contactMail', Mail.value);
    fd.append('contactText', Message.value);
    await fetch('https://martinklimt.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });
    Name.value = '';
    Mail.value = '';
    Message.value = '';
    this.activateElements(Name, Mail, Message);
  }

  disableElemts(Name: any, Mail: any, Message: any) {
    Name.disabled = true;
    Mail.disabled = true;
    Message.disabled = true;
    this.Button.nativeElement.disabled = true;
    this.Btn = true;
    this.message = true;
  }

  activateElements(Name: any, Mail: any, Message: any) {
    Name.disabled = false;
    Mail.disabled = false;
    Message.disabled = false;
    this.Button.nativeElement.disabled = false;
    this.Btn = false;
    setTimeout(() => {
      this.message = false;
    }, 2000);
  }
}
