import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImagekitUploadFormComponent } from './imagekit-upload-form/imagekit-upload-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'imagekit', component: ImagekitUploadFormComponent },
  { path: 'native', component: UploadFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
