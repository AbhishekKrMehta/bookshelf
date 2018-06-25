import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    public snackBar: MatSnackBar

  ) {}
  
  ngOnInit() {
    this.snackbar('Please wait');

    let isbn = this.route.snapshot.paramMap.get('isbn');
    let url:string='https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
    
    this.config.getBookDetails(url).subscribe(result => {
      let detailURL:string =  result['items'][0].selfLink;
      this.config.getBookDetails(detailURL).subscribe(detailResult => {
        this.bookDetails = detailResult;
        console.log(this.bookDetails)
        this.alterValue(this.bookDetails);
      }
    )
  });    
}

bookDetails;
image:string;

alterValue(bookDetails){
let img = bookDetails.volumeInfo.imageLinks;
  // assign image
  if (img.medium) {
    this.bookDetails.volumeInfo.imageLinks.thumbnail= img.medium;
  } else if(img.small) {
    this.bookDetails.volumeInfo.imageLinks.thumbnail= img.small;
  }      
  // assign ebook
  let ebook = bookDetails.saleInfo.isEbook;
  this.bookDetails.saleInfo.isEbook = (ebook)?'Available':'Not available';
  
  // assign pdf
  let pdf = bookDetails.accessInfo.pdf.isAvailable;
  this.bookDetails.accessInfo.pdf.isAvailable = (pdf)?'Available':'Not available';

  // remove HTML from description
  let descrip = bookDetails.volumeInfo.description
  this.bookDetails.volumeInfo.description = descrip.replace(/<\/?[^>]+(>|$)/g, "");
  
  // language
  let lang = bookDetails.volumeInfo.language;
  this.bookDetails.volumeInfo.language = (lang == 'en')?'English':lang;
}

// snackbar
snackbar(message){
  this.snackBar.open(message,'', {
    duration: 2000,
  });
}
}
