import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import {  MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  data1:any
  alldata:any=[]
constructor(private service:ServiceService,private dialogue:MatDialog){
  this.get()
}
get(){
  this.service.getdata().subscribe((res:object)=>{
    console.log('get data',res);
    this.alldata=res
    console.log(this.alldata);
    
  })
}


add(val:any){
  val==this.data1
  console.log(val);
  let data={
    'data':val
  }
this.service.postdata(data).subscribe(res=>{
  console.log('post data',res);
})
setTimeout(() => {
  this.get()
}, 500);
///for getting updated value too
}

remove(id:any){
this.service.removedate(id).subscribe(res=>{

})
setTimeout(() => {
  this.get()
}, 500);
}

update(data:any){
let opendiogue=this.dialogue.open(EditComponent,{
  data:{data}
})
console.log('updated value',data);
this.service.getdata() ///to get the updated value on the browser

}

}

