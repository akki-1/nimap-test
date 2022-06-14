import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBindService } from '../data-bind.service';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
user:any={}
imageURL=""
home:boolean=false;
company=false;

value:number=0;
options: Options = {
  floor: 0,
  ceil: 100,
  vertical: false,
  animate:true
};
  constructor(private route:Router,private service:DataBindService,private homeData:HomepageComponent) { 
   
  }
  currentAddress:string="";
  disable=true;
  editable=true;

  ngOnInit(): void {
      
    this.imageURL=this.service.getImageUrl();
    // this.homeData.sendUser().subscribe((data)=>{
    //   this.user=data;
    // })
    this.service.getUser().subscribe((user)=>{
      this.user=user;
    })
    this.value =<number>this.user.age;
    this.currentAddress=this.user.addressType;
    console.log(this.user);
    this.address();
    
    
  }

  selectFile(event){
    if(event.target.files){
    var file=new FileReader();
    file.readAsDataURL(event.target.files[0]);
    file.onload=(image:any)=>{
    this.imageURL=image.target.result;
    }
    }
      }
      address(){
    
        if(this.currentAddress.match("Home")){
          this.company=false;
         this.home=true;
    
        }
        else if(this.currentAddress.match("Company")){
          this.home=false;
          this.company=true;
        }
    
      }
  updateUser(){
    this.editable=false;
    this.disable=false;

  }
  savedData(){
    this.editable=true;
    this.disable=true;
  }
  

}
