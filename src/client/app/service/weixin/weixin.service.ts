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

    constructor(private http: Http, private router: Router) {
        
    }

    //获取JS验签sign
    getJSapisign(): Observable<any> {
        var url = location.href;
        
        return this.http.get(Config.API + 'api/jsapi/sign?url='+url)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //WXJS权限验证
    config(): any {
        this.getJSapisign().subscribe(
            res => {
                if (!res.error) {
                    var jsconfig = res.sign;
                    wx.config({
                        debug: true,
                        appId: jsconfig.appid,
                        timestamp: parseInt(jsconfig.timestamp),
                        nonceStr: jsconfig.noncestr,
                        signature: jsconfig.signature,
                        jsApiList: []
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
        return this.http.get(Config.API + 'api/jsapi/sign?amount='+amount+'&merchant_id='+merchantid)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    //微信支付
    wxpay(amount: any, merchantid: any): any {
        if (!amount || !merchantid) return false;

        this.getWxPay(amount, merchantid).subscribe(
            res => {
                if (!res.error) {
                    var payinfo = res.sign;
                    wx.chooseWXPay({
                        timestamp: parseInt(payinfo.timestamp), // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                        nonceStr: payinfo.noncestr, // 支付签名随机串，不长于 32 位
                        package: payinfo.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                        signType: payinfo.signtype, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        paySign: payinfo.paysign, // 支付签名
                        success: function (res: any, router: Router, merchantid: any) {
                            // 支付成功后的回调函数
                            router.navigate(['/pay/payment']);
                        }
                    });
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