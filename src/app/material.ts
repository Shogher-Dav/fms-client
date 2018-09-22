import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
  ]
})

export class MaterialModule {

}
