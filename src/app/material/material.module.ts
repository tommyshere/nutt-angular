import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
  ],
})
export class MaterialModule {}
