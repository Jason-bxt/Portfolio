import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }


export { routes };