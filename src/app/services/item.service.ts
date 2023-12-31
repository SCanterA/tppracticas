import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Item []=[
    {
    id: 0,
    title: 'manzana',
    price: 10.5,
    quantity: 4,
    completed: false
  },
  {
    id: 1,
    title: 'pan',
    price: 5,
    quantity: 8,
    completed: true
  },
  {
    id: 2,
    title: 'tomates',
    price: 3,
    quantity: 8,
    completed: true
  }
];
  constructor() { }


  getItems(){
    
  return this.items;
  }
  addItem(item:Item){
    this.items.unshift(item)
  }
}
