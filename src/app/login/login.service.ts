import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class LoginService {
  private tokenUrl = 'http://127.0.0.1:3001/api/v1/token';  // URL to web API
  constructor (private http: Http) {}
  
  getToken(username : string, password : string): Observable<any> { 
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    var userObject = { username : username, password : password };
    return this.http.post(this.tokenUrl, JSON.stringify(userObject), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body;
  }
  
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  
}