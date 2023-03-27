import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  productInfoId = "";
  param$!:  Subscription;
  constructor(private activatedRoute : ActivatedRoute){

  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        (params)=>{
          this.productInfoId = params['pid'];
        }
      )
  }

  ngOnDestroy(): void {
      this.param$.unsubscribe();
  }

}
