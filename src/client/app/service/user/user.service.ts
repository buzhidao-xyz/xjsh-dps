import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from '../../commonc/index';

/**
 * UserService Class
 */
@Injectable()
export class UserService {
    qrcodeurl: string;

    constructor(private http: Http) {}

    //用户授权
    auth(url: string) {
        location.href = Config.API + 'reauth?url=' + encodeURIComponent(url) + '&' + Math.round(Math.random()*10000);
    }

    //获取用户信息
    getUserinfo(): Observable<any> {
        return this.http.get(Config.API + 'api/user/info')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //获取用户上月收益排行榜
    getRanking(): Observable<any> {
        return this.http.get(Config.API + 'api/ranking')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //获取用户当月业绩金额
    getCProfit(): Observable<any> {
        return this.http.get(Config.API + 'api/profit/pre')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //获取用户提现列表
    getProfit(): Observable<any> {
        return this.http.get(Config.API + 'api/profit/list')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //用户提现
    profitOn(id: any): Observable<any> {
        return this.http.get(Config.API + 'api/profit/get?id='+id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //Handle HTTP error
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
