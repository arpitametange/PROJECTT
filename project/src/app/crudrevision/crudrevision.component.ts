import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CrudformComponent } from './crudform/crudform.component';
import { data } from 'jquery';
 
@Component({
  selector: 'app-crudrevision',
  templateUrl: './crudrevision.component.html',
  styleUrls: ['./crudrevision.component.css']
})
export class CrudrevisionComponent implements OnInit {
  displayedColumns: string[] = ["name", "lname", "email","action"]; // Columns to display
  dataSource = new MatTableDataSource<any>();
  constructor(private service: CrudService,private dialog:MatDialog) {
  }
  ngOnInit(): void {
    this.get();
  }
  deletevalue(id:any){
    this.service.deletemethod(id).subscribe(()=>{

    })
    this.get()
  }
put(body:any){
  this.service.putmethod(body).subscribe((res:any)=>{

  })
}

  get() {
    this.service.get().subscribe((res: any) => {
      console.log(res, 'get data');
      this.dataSource.data = res; // Assign the fetched data to the dataSource
    });
  }

  openmatbox(element?:any){
  let dialogred=this.dialog.open(CrudformComponent, {
      height: '400px',
      width: '600px',
      data: element || {} // Pass existing row data or an empty object
    });
    dialogred.afterClosed().subscribe((result:any) => {
      if (result) {
        this.get(); // Refresh table after update
      }
    });
  }



}
  

