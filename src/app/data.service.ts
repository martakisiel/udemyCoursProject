import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getPhotos() {
    return this.http.get('assets/galery/photosList.txt', {responseType:'text'});
  }
}
export class Photos {
  public url: string = '';
}