import { Component } from '@angular/core';
import { HomepageComponent } from "./homepage/homepage.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { FeaturedProjectsComponent } from "./featured-projects/featured-projects.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HomepageComponent, AboutMeComponent, SkillSetComponent, FeaturedProjectsComponent, ContactMeComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
