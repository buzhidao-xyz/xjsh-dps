import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from '../../commonc/index';

//微信JS对象
declare var wx: any;

declare var wxpayres: any;

/**
 * WeixinService Class
 */
@Injectable()
export class WeixinService {
    errorMessage: any;

    constructor(private http: Http, private router: Router) {}

    //获取JS验签sign
    getJSapisign(url: string): Observable<any> {
        if (!url) return;

        return this.http.get(Config.API + 'api/jsapi/sign?url='+url)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //WXJS权限验证
    config(url: string): any {
        this.getJSapisign(url).subscribe(
            res => {
                if (!res.error) {
                    var jsconfig = res.sign;
                    wx.config({
                        debug: true,
                        appId: jsconfig.appid,
                        timestamp: jsconfig.timestamp,
                        nonceStr: jsconfig.noncestr,
                        signature: jsconfig.signature,
                        jsApiList: ['hideOptionMenu','hideAllNonBaseMenuItem','chooseWXPay','onMenuShareTimeline']
                    });

                    wx.ready(function (){
                        // wx.hideOptionMenu();
                        // wx.hideAllNonBaseMenuItem();
                    });
                }
            },
            error => {
                this.errorMessage = <any>error;
            }
        );
    }

    //获取微信支付信息
    getWxPay(amount: any, merchantid: any): Observable<any> {
        return this.http.post(Config.API + 'api/merchant/pay?amount='+amount+'&merchant_id='+merchantid, {})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //微信支付
    wxpay(amount: any, merchantid: any): any {
        if (!amount || !merchantid) return false;

        this.getWxPay(amount, merchantid).subscribe(
            res => {
                if (!res.error) {
                    var payinfo = res.pay;
                    console.log(res);
                    wx.chooseWXPay({
                        timestamp: payinfo.timestamp,
                        nonceStr: payinfo.noncestr,
                        package: payinfo.package,
                        signType: payinfo.signtype,
                        paySign: payinfo.paysign,
                        success: function (res: any, router: Router, merchantid: any) {
                            // 支付成功后的回调函数
                            router.navigate(['/pay/payment']);
                        }
                    });
                } else {
                    alert(res.message);
                }
            },
            error => {
                this.errorMessage = <any>error;
            }
        );

        return false;
    }

    //分享到朋友圈
    wxshareTimeLine(title: string, link: string, imgUrl: string): any {
        wx.onMenuShareTimeline({
            title: title, // 分享标题
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
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
