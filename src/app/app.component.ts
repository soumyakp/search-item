import { Component } from '@angular/core';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText: string;
  listItems = [];

  constructor(private dataService: AppDataService) {}

  onTextChange(event: any): void {
    // console.log(event.target.value);
    this.dataService.getList(event.target.value).subscribe((res) => {
      console.log(res);
      this.listItems = res.data.results;
    });
  }
}
