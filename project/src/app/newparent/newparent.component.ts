import { Component } from '@angular/core';

@Component({
  selector: 'app-newparent',
  templateUrl: './newparent.component.html',
  styleUrls: ['./newparent.component.css']
})
export class NewparentComponent {
  priceinprent=10
  discountinparent=11
  changee(){
    this.priceinprent=111
    this.discountinparent=122
  }
}
