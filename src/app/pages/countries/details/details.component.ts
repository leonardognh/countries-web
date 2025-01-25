import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  data = inject(MAT_DIALOG_DATA);
  objectKeys = Object.keys;
  constructor() {
    console.log(this.data);
  }
  isLast(key: string): boolean {
    if (!this.data.country?.languages) return false;
    const keys = Object.keys(this.data.country.languages);
    return keys[keys.length - 1] === key;
  }
}
