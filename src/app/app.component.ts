import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TranslateService } from '@ngx-translate/core';
import { TranslationModule } from './translation.module'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslationModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    // Setze die Standardsprache
    this.translate.setDefaultLang('en');
    // Setze die aktuelle Sprache
    this.translate.use('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}