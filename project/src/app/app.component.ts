import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { DatatableService } from './datatable.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  reactiveform: FormGroup

  constructor(){
    this.reactiveform=new FormGroup({
      'name':new FormControl(),
      'password':new FormControl()
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  onSubmit(){

  }
}