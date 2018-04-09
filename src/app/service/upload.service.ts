import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Upload } from './upload';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UploadService {

  basePath = 'images';
  uploads: Observable<Upload[]>;
  constructor() { }

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload in progress
        // const snap = snapshot;
        // upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        if (uploadTask.snapshot.downloadURL) {
          console.log(uploadTask.snapshot.downloadURL);
        } else {
          console.error('No download URL!');
        }
      },
    );
  }
}
