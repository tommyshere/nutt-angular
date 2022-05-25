import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
