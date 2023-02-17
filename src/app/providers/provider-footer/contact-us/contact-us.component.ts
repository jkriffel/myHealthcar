import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ContactUsInterface } from "../../interfaces/contact-us-interface.interface";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  protected data: ContactUsInterface = {name: '', email: '', phone: '', organization: '', message: ''}

  constructor(
    public dialogRef: MatDialogRef<ContactUsComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
