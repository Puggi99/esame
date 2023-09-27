import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { DataService } from './service/data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Gutenberg';
  booksList: Book[] = [];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadBooks();

  }

  loadBooks() {
    this.dataService.getBooks().subscribe(
      data => {
        this.booksList = data.results;
      },
      err => console.log('There is an error', err)
    );
  }


}
