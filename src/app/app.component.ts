import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any={};
  ngOnInit(): void {
   
  }
  constructor(private modalService: NgbModal){

  }
  
  getUser($event){
    this.user=$event;
  }

url="../"
  closeResult: string;
  
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  title = 'nimap-test';


 
}
