import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ModelData } from './model-data';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  constructor( private http: HttpClient ) { }
  
  
  
  getBookDetails(url) {
    console.log(`url: ${url}`);    
    return this.http.get<ModelData[]>(url, {responseType: 'json'})
    // .pipe(
    //   tap(
    //     data => data,
    //     error => this.logError(url, error)
    //   )
    // );
  }

  
  private logError(url: string, error: any) {
    console.error(`ConfigService failed to load "${url}"; got error "${error.message}".`);
  }
}
