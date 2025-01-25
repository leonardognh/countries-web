import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class DetailsModule {}
