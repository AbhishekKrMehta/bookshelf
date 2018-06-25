import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';

import { RemoveUnderscorePipe } from '../remove-underscore.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { AngularMaterialModule } from '../angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from "@angular/router/testing";


describe('PageNotFoundComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BookDetailsComponent,
        RemoveUnderscorePipe 
      ],
      imports:[
        HttpClientModule,
        AngularMaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers:[
        HttpClient,
        MatSnackBar
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
