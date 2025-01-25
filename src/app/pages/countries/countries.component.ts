import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from 'src/app/shared/models/models';
import { CountryService } from 'src/app/shared/services/country.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private countryService = inject(CountryService);
  private dialog = inject(MatDialog);
  displayedColumns: string[] = ['flag', 'name', 'capital', 'code', 'continent'];
  dataSource: MatTableDataSource<Country>;
  ngAfterViewInit() {
    this.countryService.getAll().subscribe((countries) => {
      countries.sort((a: Country, b: Country) =>
        a.name.common.localeCompare(b.name.common)
      );

      this.dataSource = new MatTableDataSource(countries);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  details(country: Country) {
    this.dialog.open(DetailsComponent, {
      width: '800px',
      data: { country },
    });
  }
}
