import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { DatatableService } from './datatable.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './ngrx/app.state';
import { increment } from './ngrx/counter.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
onReset() {
throw new Error('Method not implemented.');
}
  reactiveform: FormGroup

  constructor(private store: Store<AppState>){
    this.reactiveform=new FormGroup({
      'name':new FormControl(),
      'password':new FormControl()
    })
  }
  counter$ = this.store.select('counter');


  onIncrement() {
    this.store.dispatch(increment());
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  onSubmit(){

  }
}