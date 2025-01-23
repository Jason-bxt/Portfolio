import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './featured-projects.component.html',
  styleUrls: [
    './featured-projects.component.scss',
    './featured-projects-responsive.component.scss',
    './featured-projects-responsive-2.component.scss',
    './featured-projects-responsive-3.component.scss'
  ]
})
export class FeaturedProjectsComponent implements OnInit {
  overlayDisplay: string = 'none'; 
  overlayProjects: any[] = []; 
  currentIndex: number = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.translate.get([
      'FEATURED_PROJECTS.Overlay.DescriptionOne',
      'FEATURED_PROJECTS.Overlay.DescriptionTwo',
      'FEATURED_PROJECTS.Overlay.DescriptionThree',
    ]).subscribe((translations) => {
      this.overlayProjects = [
        {
          nr: 1,
          name: 'Join',
          description: translations['FEATURED_PROJECTS.Overlay.DescriptionOne'], 
          img: './assets/img/join.png',
          test: './assets/Join/index.html',
          git: 'https://github.com/Jason-bxt/Join',
          technologies: [
            { icon: `./assets/icon/css.svg`, name: 'CSS' },
            { icon: `./assets/icon/html.svg`, name: 'HTML' },
            { icon: `./assets/icon/angular.svg`, name: 'Angular' },
            { icon: `./assets/icon/java-script.svg`, name: 'JavaScript' },
            { icon: `./assets/icon/firebase.svg`, name: 'Firebase' },
            { icon: `./assets/icon/scrum.svg`, name: 'Scrum' },
          ],
        },
      {
        nr: 2,
        name: 'El Pollo Loco',
        description: translations['FEATURED_PROJECTS.Overlay.DescriptionTwo'],
        img: './assets/img/el-pollo-loco.png',
        test: './assets/El-pollo-loco/index.html',
        git: './assets/Pokedex/index.html',
        technologies: [
          { icon: `./assets/icon/java-script.svg`, name: 'JavaScript' },
          { icon: `./assets/icon/html.svg`, name: 'HTML' },
          { icon: `./assets/icon/css.svg`, name: 'CSS' },
        ],
      },
      {
        nr: 3,
        name: 'PokeDex',
        description: translations['FEATURED_PROJECTS.Overlay.DescriptionThree'],
        img: './assets/img/pokedex.png',
        test: 'https://github.com/Jason-bxt/PokeDex',
        git: 'https://github.com/Jason-bxt/Jump-and-Run-Game---EL-Pollo-Loco',
        technologies: [
          { icon: `./assets/icon/java-script.svg`, name: 'JavaScript' },
          { icon: `./assets/icon/html.svg`, name: 'HTML' },
          { icon: `./assets/icon/css.svg`, name: 'CSS' },
          { icon: `./assets/icon/api.svg`, name: 'API' },
        ],
      },
    ];
  });
}
  
  toggleOverlay(index: number = -1) {
    if (index !== -1) {
      this.currentIndex = index; 
    }
    this.overlayDisplay = this.overlayDisplay === 'flex' ? 'none' : 'flex';
  }

  get currentProject() {
    return this.overlayProjects[this.currentIndex];
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.overlayProjects.length;
  }
}