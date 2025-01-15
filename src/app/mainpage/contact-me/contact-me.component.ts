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

  
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      console.log("sucess")
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
