import { Component } from '@angular/core';
import { HTMLInputEvent } from 'imagekitio-angular/lib/utility/ik-type-def-collection';

@Component({
  selector: 'app-imagekit-upload-form',
  templateUrl: './imagekit-upload-form.component.html',
  styleUrl: './imagekit-upload-form.component.css',
})
export class ImagekitUploadFormComponent {
  uploadErrorMessage?: string;
  constructor() {}
  outputBoxVisible = false;
  progress = `0%`;
  uploadResult = '';
  fileName = '';
  fileSize = '';
  uploadStatus: number | undefined;
  title = 'app';

  authenticator = async () => {
    try {
      // You can pass headers as well and later validate the request source in the backend, or you can use headers for any other use case.
      const response = await fetch('/api/auth');
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }
      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  onUploadStartFunction = (event: HTMLInputEvent) => {
    this.outputBoxVisible = false;
    this.progress = `0%`;
    this.uploadResult = '';
    this.fileName = '';
    this.fileSize = '';
    this.uploadStatus = undefined;
    const file: File = event.target?.files?.[0] as File;
    if (file.name) {
      this.fileName = file.name;
      this.fileSize = `${(file.size / 1024).toFixed(2)} KB`;
      this.outputBoxVisible = true;
    }
    console.log('onUploadStart');
  };
  onUploadProgressFunction = (event: ProgressEvent): void => {
    const progress = (event.loaded / event.total) * 100;
    this.progress = `${Math.round(progress)}%`;
    console.log('progressing', { progress: this.progress });
  };
  handleUploadSuccess = (res: {
    $ResponseMetadata: { statusCode: number | undefined };
  }) => {
    console.log('File upload success with response: ', res);
    if (res.$ResponseMetadata.statusCode === 200) {
      this.uploadResult = 'Uploaded';
      this.outputBoxVisible = true;
    }
    this.uploadStatus = res.$ResponseMetadata.statusCode;
  };
  handleUploadError = (err: any) => {
    console.log('There was an error in upload: ', err);
    this.uploadErrorMessage = 'File upload failed.';
    this.uploadResult = 'File upload failed!';
  };
}
