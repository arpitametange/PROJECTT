import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
items=['1 completed task','2 not completed','3','4']

drag(event:any){
moveItemInArray(this.items,event.previousIndex,event.currentIndex)
}

country=[
  {id:'1',name:"India"} ,
  {id:'2', name:"USA"}
 ]
 
 countryState:Array<any>=[
   {id:'s1',parentId:"1",name:"maharashtra"},
   {id:'s2',parentId:"1",name:"Goa"},
   {id:'s3',parentId:"1",name:"Gujarat"},
   {id:'s4',parentId:"2",name:"california"},
   {id:'s5',parentId:"2",name:"texas"},
   {id:'s6',parentId:"2",name:"florida"}
 ]
 state:Array <any>=[]

clickfun(val:any){
  this.state=this.countryState.filter(v=>{
    v.parentId==val.target.value
  })
}

}
