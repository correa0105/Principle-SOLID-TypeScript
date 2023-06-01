import { CartItem } from './intefacesAndTypes/cart-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
