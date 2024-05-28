import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { ImagekitUploadFormComponent } from './imagekit-upload-form/imagekit-upload-form.component';
// import { UploadFormComponent } from './upload-form/upload-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ImagekitUploadFormComponent],
  imports: [
    BrowserModule,
    ImagekitioAngularModule.forRoot({
      urlEndpoint: 'https://ik.imagekit.io/kunaltest/',
      publicKey: 'public_2tAtNUx2V3XXQPtANd/XuCwy4FM=',
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
