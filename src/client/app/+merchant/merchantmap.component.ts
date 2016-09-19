import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantService } from '../service/index';

declare var BMap: any;
declare var BMAP_ANCHOR_BOTTOM_RIGHT: any;
declare var BMAP_NAVIGATION_CONTROL_SMALL: any;

/**
 * This class represents the lazy loaded MerchantMapComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-merchantmap',
  templateUrl: 'merchantmap.component.html',
  styleUrls: ['merchant.component.css'],
})

export class MerchantMapComponent implements OnInit {
    merchantid: any;
    merchant: any = {};
    errorMessage: string;

    //BDMapObject
    BDMapObject: any;

  /**
   * Creates an instance of the MerchantComponent with the injected
   * MerchantService.
   *
   * @param {MerchantService} MerchantService - The injected MerchantService.
   */
  constructor(public merchantService: MerchantService, public route: ActivatedRoute) {
      this.merchantid = this.merchantService.merchantid;
  }

  /**
   * Get the merchants OnInit
   */
  ngOnInit() {
    this.getMerchantlist();
  }

  /**
   * Handle the MerchantService observable
   */
  getMerchantlist() {
    this.merchantService.getMerchantlist()
                     .subscribe(
                        res => {
                            if (!res.error) {
                                for (let index in res.merchants) {
                                    if (res.merchants[index].id == this.merchantid) this.merchant = res.merchants[index];
                                }

                                this.bdMapInit();
                            }
                        },
                        error => {
                            this.errorMessage = <any>error;
                        }
                     );
  }

  //初始化百度地图
  bdMapInit() {
    var merchant_lat = this.merchant.lng;
    var merchant_lng = this.merchant.lat;

    //地图
    this.BDMapObject = new BMap.Map('BDMap', {minZoom:13, maxZoom:23});
    this.BDMapObject.centerAndZoom(new BMap.Point(merchant_lng, merchant_lat), 15);
    this.BDMapObject.enableScrollWheelZoom(true);
    this.BDMapObject.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));

    // 信息窗口
    var opts = {
        width : 250,
        height: 100,
        title : this.merchant.name
    };
    var content = this.merchant.phone+'<br/>'+this.merchant.address;
    var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象    
    this.BDMapObject.openInfoWindow(infoWindow, this.BDMapObject.getCenter());

    var BDMapObject = this.BDMapObject;

    //标注
    var point = new BMap.Point(merchant_lng, merchant_lat);
    var marker = new BMap.Marker(point);
    marker.addEventListener('click', function (){
        BDMapObject.openInfoWindow(infoWindow, point);
    });
    this.BDMapObject.addOverlay(marker);
  }
}
