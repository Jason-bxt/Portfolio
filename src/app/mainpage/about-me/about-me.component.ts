import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: [ './about-me.component.scss', './about-me-responsive.component.scss', './about-me-responsive-2.component.scss']
})
export class AboutMeComponent {

}
