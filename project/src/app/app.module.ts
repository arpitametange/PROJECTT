import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { ComponentComponent } from './component/component.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudComponent } from './crud/crud.component';
import {  HttpClientModule } from '@angular/common/http';
import { EditComponent } from './crud/edit/edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import{MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    FormsComponent,
    CrudComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDrag,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
