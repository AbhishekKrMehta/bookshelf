import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { AngularMaterialModule } from '../angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// import { DebugElement } from "@angular/core";
import { ConfigServiceMock } from '../config.serviceMock';
import { ConfigService } from '../config.service';



describe('BooksComponent', () => {
    let component: BooksComponent;
    let fixture: ComponentFixture<BooksComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BooksComponent ],
            imports:[ 
                AngularMaterialModule,
                HttpClientModule,
                RouterTestingModule,
                BrowserAnimationsModule ],
            // providers:[
            //     {provide:ConfigService, useClass:ConfigServiceMock}
            // ]
            })
            .compileComponents();
        }));
        
        beforeEach(() => {
            fixture = TestBed.createComponent(BooksComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        
        it('should create', () => {
            expect(component).toBeTruthy();
        });

        // it(`should have 1 value`, async(() => {
        //     expect(component.bookList.length).toEqual(1);
        // }));

        // it(`should have rendered 1 value`, async(() => {
        //     const el= fixture.nativeElement.querySelector('mat-card-title');
        //     expect(el.innerText).toContain('Death');
        // }));
    });
    
    