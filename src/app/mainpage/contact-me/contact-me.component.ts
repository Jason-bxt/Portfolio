import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrls:[ './contact-me.component.scss', './contact-me-responsive.component.scss', './contact-me-responsive-2.component.scss' ]
  })
export class ContactMeComponent {

  http = inject(HttpClient);
 
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  successMessage: string = '';
  errorMessage: string = '';
 

  post = {
    endPoint: 'https://jason-peters.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
      if (ngForm.submitted && ngForm.form.valid) {
      console.log("sucess")
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.successMessage = 'Your message has been sent successfully!';
            this.errorMessage = ''; 
          },
          error: (error) => {
            console.error(error);
            this.errorMessage = 'There was an error sending your message. Please try again.';
            this.successMessage = ''; 
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
      this.contactData = { name: "", email: "", message: "",};
    }
  }
}

