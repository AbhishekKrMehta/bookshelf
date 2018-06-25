import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchComponent } from '../search/search.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  constructor( 
    private config:ConfigService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {    
  }
  
  bookList=[];
  test;
  ISBN = [];
  topSelects:boolean = true;
  searchCriteria;
  tempsCriteria:string;
  totalLikes:number=0;
  shCriteria:boolean=false;

  ngOnInit() {
    this.bookISBN();
    this.snackbar('Please wait');

  }
  
  bookISBN(){
    let ISBNurl = 'https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=bde47cea25514ca0a496054906fab92c';
    this.config.getBookDetails(ISBNurl).subscribe(result => {  
      this.pushISBN(result);
    });
  }
  
  
  pushISBN(result){
    for (var index = 0; index < result['results'].length; index++) {
      if (result['results'][index].isbns.length > 0) {
        this.bookDetails('isbn',result['results'][index].isbns[0].isbn10)
      }
    }    
  }
  
  
  bookDetails(sCriteria: string, userInput:string, tselects:boolean = true, shCriteria = false){
    this.shCriteria =shCriteria;
    this.topSelects = tselects;
    this.tempsCriteria=sCriteria;
    
    this.snackbar('Please wait');
    let url:string=`https://www.googleapis.com/books/v1/volumes?q=${sCriteria}:${userInput}`;
    this.config.getBookDetails(url).subscribe(results => { 
      if (!tselects) {
        this.bookList=[];
      }       
      this.shorten(results['items']);
    });
  }

  
  
  shorten(bookObj){
    
    if (bookObj != null ) {
      for (let index = 0; index < bookObj.length; index++) {
        if (bookObj[index].volumeInfo.description != null && bookObj[index].volumeInfo.description.length > 233) {
          bookObj[index].volumeInfo.description=bookObj[index].volumeInfo.description.substring(0, 230) + "...";
        }
        this.bookList.push(bookObj[index]);
      }
      console.log(this.bookList);
      this.like();

    }
  }
  
  // search pop-up
  searchBook() : void{
    let dialogRef = this.dialog.open(SearchComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.searchCriteria=result;
      console.log(this.searchCriteria)
      this.bookDetails(this.searchCriteria.selectedCriteria.value,this.searchCriteria.userInput,false,true);
           
    });
    }

    // snackbar
    snackbar(message){
      this.snackBar.open(message,'', {
        duration: 2200,
      });
    }

    // delete a card
    deleteCard(index){
      this.snackbar('Card deleted');
      this.bookList.splice(index, 1);
    }



    // append likes to object
    like(){
      for (let index = 0; index < this.bookList.length; index++) {
        this.bookList[index].likes = 0;
      }
    }


    // Add Likes
    addLikes(i){
      this.bookList[i].likes++;
      this.snackbar('Card liked');
    }
    
  }
  