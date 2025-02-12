import { Component, ɵɵqueryRefresh } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.css']
})
export class CrudformComponent {
  Rform!:FormGroup
  constructor(private service:CrudService, private dialogue:MatDialog){
    this.Rform=new FormGroup({
    'name':new FormControl(),
    'lname':new FormControl(),
    "email":new FormControl()
    })
    this.service.get()
  }

  onSubmit(){
    this.service.postmethod(this.Rform.value).subscribe((res:any)=>{
    console.log(this.Rform.value,'this is the form data');
    this.dialogue.closeAll()
    this.service.get().subscribe(()=>{

    })

  })
}



}
