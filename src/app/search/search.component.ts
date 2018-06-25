import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  constructor( private fb:FormBuilder,
    public dialogRef: MatDialogRef<SearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  
  ngOnInit(){
    this.myForm =this.fb.group({
      'selectedCriteria':[null],
      'userInput':[null,Validators.required]      
    })
  }
  
  selectedCriteria:string;
  userInput:string;
  myForm: FormGroup;  
  btnDisable:boolean = true;
  submitted:boolean = false;

  searchCriteria = [
    {value: 'intitle', viewValue: 'Title'},
    {value: 'inauthor', viewValue: 'Author'},
    {value: 'inpublisher', viewValue: 'Publisher'},
    {value: 'subject', viewValue: 'Subject'},
    {value: 'isbn', viewValue: 'ISBN'},
    {value: 'lccn', viewValue: 'LCCN'},
    {value: 'oclc', viewValue: 'OCLC'},

  ];

  submit(x){
    console.log(x);
    this.submitted =true;
  }
  

  closeDialog(): void {
    this.dialogRef.close();
  }
 
}
