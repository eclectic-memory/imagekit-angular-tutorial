import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'native', component: UploadFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
