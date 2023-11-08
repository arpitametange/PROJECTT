import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DatatableService } from './datatable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements OnInit {
  allUsers: any = [];
  
  constructor(private service:DatatableService){
     console.log('constructor');
    //  let obje=new AppComponent()

  }
  ngOnInit(): void {
    this.users();
  }

  users(): void {
    this.service
        .users()
        .subscribe((response: any) => {
          this.allUsers = response.data;
        });
  }
  

  // ngOnInit(): void {
  //   console.log('ngonint');
  //   // let obje=new AppComponent()

  // }
  title = 'project';
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  onDrop(event: any) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  buttonclick(){
  }
  
}
