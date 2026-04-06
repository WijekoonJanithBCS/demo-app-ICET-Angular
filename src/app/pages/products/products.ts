import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductItem, NgFor],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  ngOnInit(): void {
    this.loadProductInfo();
    //throw new Error('Method not implemented.');
  }

  public productList:any = [];

  loadProductInfo(){
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())

      
    
      .then(data=>{
        this.productList = data;
        console.log(this.productList);
      })
  }
}
