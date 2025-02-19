import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.css']
})
export class CrudformComponent {
  Rform!: FormGroup;
  isEdit: boolean = false; // Flag to check if updating

  constructor(
    private service: CrudService,
    private dialogue: MatDialogRef<CrudformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inject row data
  ) {
    this.isEdit = !!data?.id; // If `id` exists, it's an update
    this.Rform = new FormGroup({
      'name': new FormControl(data?.name || ''),
      'lname': new FormControl(data?.lname || ''),
      'email': new FormControl(data?.email || '')
    });

    console.log(this.data, 'Received Data'); // Debugging
  }

  onSubmit() {
    if (this.isEdit) {
      // Update existing data
      const updatedData = { ...this.Rform.value, id: this.data.id };
      this.service.putmethod(updatedData).subscribe(
        (res) => {
          this.dialogue.close(true); // Close the dialog and refresh the table
        },
        (error) => console.error('Update Error:', error)
      );
    } else {
      // Create new entry
      this.service.postmethod(this.Rform.value).subscribe(
        (res) => {
          console.log('Added Successfully:', res);
          this.dialogue.close(true); // Close the dialog
        },
        (error) => console.error('Add Error:', error)
      );
    }
  }
}
