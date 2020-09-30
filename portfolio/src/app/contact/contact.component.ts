import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') cForm: NgForm;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(postData: {name: string, email: string, subject: string, message: string}) {
    this.http.post("https://my-inbox-3b368.firebaseio.com/portfolioInbox.json", 
    postData
    ).subscribe(responseData => {
      console.log(responseData);
    })
    alert("Your message has been submitted! Please allow up to 24 hours for my reply. Thank You!");
    this.cForm.reset();
  }
  
}
