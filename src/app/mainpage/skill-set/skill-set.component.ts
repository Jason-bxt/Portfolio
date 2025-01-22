import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrls:[ './skill-set.component.scss', './skill-set-responsive.component.scss']
})
export class SkillSetComponent {


}
