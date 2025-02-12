import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  localdata:any[]=[]
  constructor(){
    // this.getdata()
   const data= localStorage.getItem('data')
   if(data){
    this.localdata=JSON.parse(data)
   }
   console.log(this.localdata,'this is the localdata');
   

  }
variable_in_parent='my parent data'
data:any[]=[]
obj={
  name:'arpita',
  id:12
}
getdatafromchildinOutput(data:any){
  // console.log('this is in functiona -->',data);

  
}
getdata(data:any){
// console.log(data,'this is hte form data ');
this.localdata.push(data)
localStorage.setItem('data',JSON.stringify(this.localdata))
}
}
