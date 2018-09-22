import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IJobs} from '../interfaces/IJobs';
import { Observable } from 'rxjs';

import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {}

  public getJobs(): Observable <IJobs[]> {
   return this.http.get<IJobs[]>(environment.serverUrl + '/home',  {responseType: 'json'});
   //  return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts');
  }
}
