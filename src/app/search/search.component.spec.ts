import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let de:DebugElement;
    let el:HTMLElement;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchComponent ],
            imports : [ 
                AngularMaterialModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                BrowserModule
            ],
            providers:[ 
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ]
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    // to check value of submitted
    it(`should set'submitted' to be true`,async(() => {
        component.submit('test');
        expect(component.submitted).toBeTruthy();
    }));
    
    // to check invalid data
    it(`should call the submit() method`,async(() =>{
       spyOn(component,'submit');
        el.click();
        expect(component.submit).toHaveBeenCalledTimes(0);
    }));

    // to check invalid form
    it(`form should be invalid`,async(()=>{
        component.myForm.controls['userInput'].setValue('');
        expect(component.myForm.valid).toBeFalsy();
    }));
    
    // to check valid form
    it(`form should be valid`,async(()=>{
        component.myForm.controls['userInput'].setValue('test');
        expect(component.myForm.valid).toBeTruthy();
    }));
});
