import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listofString: string[] = ['Eren', 'Mikasa', 'Levi', 'Amir', 'Mark'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
