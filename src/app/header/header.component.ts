import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {} 

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  isDropdownVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
    console.log(this.isDropdownVisible ? "sichtbar" : "unsichtbar");
  }
}