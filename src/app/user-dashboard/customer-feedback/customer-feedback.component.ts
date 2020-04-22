import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      feedback: ['', Validators.required],
      lastCallDate: ['', Validators.required],
      nextReminder: ['', Validators.required],
      action: ['', Validators.required]
    });
  }

  feedbackSubmit(feedbackForm) {
    console.log("Form submitted");
  }

}
