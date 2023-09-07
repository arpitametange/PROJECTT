import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
constructor(private service:ServiceService,@Inject(MAT_DIALOG_DATA) public data: any,
private ref: MatDialogRef<EditComponent>,private snackbar:MatSnackBar){

}
myData:any=[]
  ngOnInit(): void {
    this.myData = this.data.data;
    console.log('mydaata',this.myData);
    console.log('mydaata.data',this.data)
  }


update(value:any,id:any){
  this.myData.data=value
  this.myData.id=id
  this.service.updatedata(this.myData).subscribe(res=>{
    console.log('res',res);
    
  })
  this.snackbar.open('task updated successfullly','',{duration:500})
}
}


