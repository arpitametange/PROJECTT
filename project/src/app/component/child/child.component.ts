import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
email:string=''
password:string=''
@Input() price!: number;
@Input() discount!: number;
finalPrice!: number;
ngOnChanges() {
    this.finalPrice = this.price - (this.price * this.discount) / 100;
  }
@Input() variable_in_child:any
@Input()childobj:any
data='this si the data in child for output'
@Output () eventemiter=new EventEmitter
@Output() formdata=new EventEmitter
passdatafromchild(){
this.eventemiter.emit(this.data)
}

onSubmit(){
const form={
  email:this.email,
  password:this.password
}
this.formdata.emit(form)
// console.log(form,'form data');

}
}
