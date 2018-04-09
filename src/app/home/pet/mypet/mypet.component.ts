import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../../service/pet.service';
import { Title } from '@angular/platform-browser';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { SelectItem } from 'primeng/api';
import { Upload } from '../../../service/upload';
import { UploadService } from '../../../service/upload.service';
import * as firebase from 'firebase';
import { Ng2ImgMaxService } from 'ng2-img-max';

declare var jquery: any;
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-mypet',
  templateUrl: './mypet.component.html',
  styleUrls: ['./mypet.component.css']
})
export class MypetComponent implements OnInit {

  param: any;
  pet: any = {};
  udPet: any = {};
  loading = true;
  url = location.host + '/pet/' + this.pet._id;
  deleting = false;
  uploading = false;
  test = "tasd"
  imgurl = "";
  petGender: SelectItem[];
  petImage = {
    name: String,
    file: File
  }
  currentUpload: Upload;
  basePath = "images";

  @ViewChild('warning') private warning: SwalComponent;
  @ViewChild('wrnUpdate') private wrnUpdate: SwalComponent;

  constructor(
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute,
    private petService: PetService,
    private uploadService: UploadService,
    private ng2ImgMaxService: Ng2ImgMaxService
  ) {
    this.route.params.subscribe(params => this.param = params);
    this.url = 'https://' + location.host + '/pet/' + this.param.petid;
    this.petGender = [
      {
        label: 'Unknow', value: null
      },
      {
        label: 'Male', value: 'Male'
      },
      {
        label: 'Female', value: 'Female'
      }
    ]
    // this.currentUpload.progress = 0;
  }


  ngOnInit() {
    this.titleService.setTitle('Petbook');
    $('.materialboxed').materialbox();
    this.petService.getPet(this.param.petid)
      .subscribe(
        resp => {
          this.loading = false;
          if (resp.status === 200) {
            this.pet = resp.body['pet'];
            this.udPet.gender = this.pet.gender;
          }
        },
        err => {
          this.loading = false;
          if (err.status === 404) {
            if (err.error['message'] == 'not found pet') {
              this.router.navigate(['/petlist']);
            } else {
              this.router.navigate(['/login']);
            }
          } else {
            this.router.navigate(['/login']);
          }
        }
      )
  }

  deletePet() {
    this.deleting = true;
    this.petService.deletePet(this.param.petid).subscribe(
      resp => {
        this.deleting = false;
        if (resp.status === 200) {
          this.router.navigate(['/petlist']);
        }
      },
      err => {
        this.deleting = false;
        this.router.navigate(['/login']);
      }
    )
  }

  reportPet(message) {
    if (message.trim() == '') {
      this.warning.show();
    }
    else {
      this.deleting = true;
      this.petService.reportLost(this.param.petid, message)
        .subscribe(
          resp => {
            this.deleting = false;
            if (resp.status === 200) {
              this.router.navigate(['/reports/' + this.pet._id]);
            }
          },
          err => {
            this.deleting = false;
            if (err.status === 404) {
              if (err.error['message'] == 'not found pet') {
                this.router.navigate(['/petlist']);
              } else {
                localStorage.clear();
                this.router.navigate(['/login']);
              }
            } else {
              localStorage.clear();
              this.router.navigate(['/login']);
            }
          }
        )
    }
  }

  updateStatus() {
    this.deleting = true;
    this.petService.updatePet(this.param.petid, {
      lostStatus: false
    })
      .subscribe(
        resp => {
          this.deleting = false;
          if (resp.status === 200) {
            location.reload();
          }
        },
        err => {
          this.deleting = false;
          if (err.status === 404) {
            if (err.error['message'] == 'not found pet') {
              this.router.navigate(['/petlist']);
            } else {
              this.router.navigate(['/login']);
            }
          } else {
            this.router.navigate(['/login']);
          }
        }
      )
  }

  updatePet() {
    if (this.udPet.type == "") {
      delete this.udPet.type;
    }
    if (this.udPet.breed == "") {
      delete this.udPet.breed;
    }
    if (this.udPet.name == "") {
      delete this.udPet.name;
    }
    if (this.udPet.ageYear == "") {
      delete this.udPet.ageYear;
    }
    if (this.udPet.ageMonth == "") {
      delete this.udPet.ageMonth;
    }
    if (this.udPet.color == "") {
      delete this.udPet.color;
    }
    if (Object.keys(this.udPet).length <= 1 && this.udPet.gender == this.pet.gender) {
      this.wrnUpdate.show();
    }
    else {
      this.deleting = true;
      this.petService.updatePet(this.param.petid, this.udPet)
        .subscribe(
          resp => {
            this.deleting = false;
            if (resp.status === 200) {
              location.reload();
            }
          },
          err => {
            this.deleting = false;
            if (err.status === 404) {
              if (err.error['message'] == 'not found pet') {
                this.router.navigate(['/petlist']);
              } else {
                this.router.navigate(['/login']);
              }
            } else {
              this.router.navigate(['/login']);
            }
          }
        )
    }
  }

  clearPet() {
    delete this.udPet.type;
    delete this.udPet.breed;
    delete this.udPet.name;
    delete this.udPet.ageYear;
    delete this.udPet.ageMonth;
    this.udPet.gender = this.pet.gender;
    delete this.udPet.color;
  }

  uploadImage(image) {
    this.deleting = true;
    this.ng2ImgMaxService.resize([image], 800, 600, false).subscribe((result) => {
      this.currentUpload = new Upload(result);
      this.currentUpload.name = this.pet._id + Date.now();
      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(`${this.basePath}/${this.currentUpload.name}`).put(this.currentUpload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          // upload in progress
          // const snap = snapshot;
          // upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
        },
        (error) => {
          // upload failed
          this.deleting = false;
          console.log(error);
        },
        () => {
          // upload success
          if (uploadTask.snapshot.downloadURL) {
            this.petService.updatePet(this.param.petid, {
              image: uploadTask.snapshot.downloadURL
            }).subscribe(
              resp => {
                this.deleting = false;
                if (resp.status === 200) {
                  location.reload();
                }

              },
              err => {
                this.deleting = false;
                if (err.status === 404) {
                  if (err.error['message'] == 'not found pet') {
                    this.router.navigate(['/petlist']);
                  } else {
                    this.router.navigate(['/login']);
                  }
                } else {
                  this.router.navigate(['/login']);
                }
              }
            )
          } else {
            console.error('No download URL!');
          }
        },
      );
    });
  }

  uploadClick() {
    let btn_img: HTMLElement = document.getElementById('imageFile') as HTMLElement;
    btn_img.click();
  }

  fileChange(event: any) {
    this.readFiles(event);
  }

  readFile(event, reader, callback) {
    if (event.target.files[0]) {
      reader.onload = () => {
        callback(reader.result);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  readFiles(event) {
    let reader = new FileReader();
    this.readFile(event, reader, (result) => {
      var img = document.createElement("img");
      img.src = result;

      this.resize(img, 800, 600, (resized_jpeg) => {
        this.imgurl = resized_jpeg.toDataURL('image/jpeg');
        swal({
          html: "<img src='" + this.imgurl + "' class='responsive-img'>",
          showCancelButton: true,

        }).then((result) => {
          if (result.value) {
            this.uploadImage(event.target.files[0]);
          } else {
            let imageFile: HTMLInputElement = document.getElementById('imageFile') as HTMLInputElement;
            imageFile.value = '';
          }
        });
      });
    });
  }

  resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
    // This will wait until the img is loaded before calling this function
    return img.onload = () => {
      // Get the images current width and height
      var width = img.width;
      var height = img.height;

      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      // create a canvas object
      var canvas = document.createElement("canvas");

      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0, width, height);

      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      // var dataUrl = canvas.toDataURL('image/jpeg');

      // callback with the results
      callback(canvas);
    };
  }

  chkNum(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

  chkspace(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode == 32)
      return false;
    return true;
  }
}
