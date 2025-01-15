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
    const description = this.translate.instant('FEATURED_PROJECTS.Overlay.DescriptionOne');
    console.log('Project Description:', description); 
  
    this.overlayProjects = [
      {
        nr: 1,
        name: 'Join',
        description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.", 
        img: './assets/img/join.png',
        test: './assets/Join/index.html',
        technologies: [
          { icon: `./assets/icon/css.svg`, name: 'CSS' },
          { icon: `./assets/icon/html.svg`, name: 'HTML' },
          { icon: `./assets/icon/angular.svg`, name: 'Angular' },
          { icon: `./assets/icon/java-script.svg`, name: 'JavaScript' },
          { icon: `./assets/icon/firebase.svg`, name: 'Firebase' },
          { icon: `./assets/icon/scrum.svg`, name: 'Scrum' },
        ]
      },
      {
        nr: 2,
        name: 'El Pollo Loco',
        description: "Jump and run game based on object-oriented approach. Help pepe to find coins and tabasco salsa to fight against the crazy hen.",
        img: './assets/img/el-pollo-loco.png',
        test: './assets/El-pollo-loco/index.html',
        technologies: [
          { icon: `./assets/icon/java-script.svg`, name: 'JavaScript' },
          { icon: `./assets/icon/html.svg`, name: 'HTML' },
          { icon: `./assets/icon/css.svg`, name: 'CSS' },
        ],
      },
      {
        nr: 3,
        name: 'PokeDex',
        description: "Pokedex is an index of all Pokemons existing. it uses the official Pokemon API. You will find all detail for your favorite Pokemon through one click",
        img: './assets/img/pokedex.png',
        test: './assets/Pokedex/index.html',
        technologies: [
          { icon: `./assets/icon/java-script.svg`, name: 'JavaScript' },
          { icon: `./assets/icon/html.svg`, name: 'HTML' },
          { icon: `./assets/icon/css.svg`, name: 'CSS' },
          { icon: `./assets/icon/api.svg`, name: 'API' },
        ],
      },
    ];
  }
  
  toggleOverlay(index: number = -1) {
    if (index !== -1) {
      this.currentIndex = index; // Setze den aktuellen Index, wenn ein gültiger Index übergeben wird
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