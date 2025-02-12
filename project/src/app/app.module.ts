import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
 
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { ComponentComponent } from './component/component.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudComponent } from './crud/crud.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { EditComponent } from './crud/edit/edit.component';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import { DataTablesModule } from 'angular-datatables';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { NewparentComponent } from './newparent/newparent.component';
import { CrudrevisionComponent } from './crudrevision/crudrevision.component';
import { CrudformComponent } from './crudrevision/crudform/crudform.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    FormsComponent,
    CrudComponent,
    EditComponent,
    ParentComponent,
    ChildComponent,
    NewparentComponent,
    CrudrevisionComponent,
    CrudformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDrag,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    DataTablesModule,FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatStepperModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    TextFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatChipsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
