import { Component, Input } from '@angular/core';
import { Book, Author } from 'src/app/model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
@Input() book?: Book
}
