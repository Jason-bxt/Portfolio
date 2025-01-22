import { Routes } from '@angular/router';
import { MainpageComponent } from "./mainpage/mainpage.component";
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'legal-notice', component: LegalNoticeComponent },
];

