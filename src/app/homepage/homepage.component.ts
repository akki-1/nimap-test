import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Injectable, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faAppStore, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faGrinHearts } from '@fortawesome/free-regular-svg-icons';
import { NgbCarousel, NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataBindService } from '../data-bind.service';

@Injectable()
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private config: NgbCarouselConfig, private ngb: NgbCarousel, private modal: NgbModal, private service: DataBindService) {
    config.interval = 3000;
    config.wrap = true;
    config.showNavigationIndicators = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    ngb.animation = true;
  }


  ngOnInit(): void {
  }
  imageURL = "../../assets/p.jpg";
  closeResult: string;
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    username: "",
    password: "",
    addressType: "",
    address1: "",
    address2: "",
  }
  home: boolean = false;
  company = false;
  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 100,
    vertical: false,
    animate: true
  };
  currentAddress: string = "Select";
  public interests: string = "";
  public listInterest: string[] = [];
  userObservable: Observable<any>;

  // Fa icons
  faCoffee = faFreeCodeCamp
  trophy = faAppStore

  response;

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }


  selectFile(event) {
    if (event.target.files) {
      var file = new FileReader();
      file.readAsDataURL(event.target.files[0]);
      file.onload = (image: any) => {
        this.imageURL = image.target.result;
      }
    }
  }
  address() {

    if (this.currentAddress.match("Home")) {
      this.company = false;
      this.home = true;

    }
    else if (this.currentAddress.match("Company")) {
      this.home = false;
      this.company = true;
    }

  }

  public saveUser() {
    this.user.addressType = this.currentAddress;
    this.user.age = this.value;
    this.service.setImageUrl(this.imageURL);
    this.service.setUser(this.user);
    this.modal.dismissAll();
    this.route.navigate(["../Profile"], { state: { user: this.user } });
  }



  addInterest() {
    this.listInterest.push(this.interests);
    console.log(this.listInterest);
    this.interests = "";

  }
  remove(i) {
    this.listInterest.splice(i, 1);

  }
}
