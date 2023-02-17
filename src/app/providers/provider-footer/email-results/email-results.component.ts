import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-email-results',
  templateUrl: './email-results.component.html',
  styleUrls: ['./email-results.component.css']
})
export class EmailResultsComponent {

  protected email = ''

  constructor(
    public dialogRef: MatDialogRef<EmailResultsComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
