import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {
  @Input() profileImage = '';
  @Input() userID = '';
  // declare a property called fileuploader and assign it to an instance of a new fileUploader.
  // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader: FileUploader = new FileUploader({ url: '/api/upload', itemAlias: 'photo' });

  constructor(private data: DataService,
    private http: Http) { }

  ngOnInit() {
  }

  fileEvent(fileInput: Event) {
    // let file = fileInput.target.files[0];
    const file = (<HTMLInputElement>event.target).files[0];
    const fileName = file.name;
  }

  fileChanged(event: Event) {
    const fileList: FileList = (<HTMLInputElement>event.target).files;

    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('photo', file, file.name);
      formData.append('userID', this.userID);

      const headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      // actualy if you apend the "Content-Type" in angular 4, it will only bring trouble. just don't
      // headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      const options = new RequestOptions({ headers: headers });

      this.http.post('/api/upload', formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(data => {
          this.profileImage = `./images/${data.image}`;
        },
        error => console.log(error));
    }
  }

  editProfilePicture() {
    const input = document.getElementById('inputPhoto');
    input.addEventListener('click', function (e) {});

    // opening dialog
    input.click();
    console.log('edit image');
  }
}
