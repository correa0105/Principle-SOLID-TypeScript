/*
Interface Segregation Principle (Princípio da Segregação de Interface) -
Os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam
*/

import { ShoppingCart } from './class/ShoppingCart';
import { Product } from './class/Product';
import { Order } from './class/Order';
import { Message } from './services/Message';
import { Persist } from './services/Persist';
import {
  NoDiscount,
  TenPercentDiscount,
  FiftyPercentDiscount,
} from './class/Discount';
import { IndividualCustomer } from './class/Customer';

// const fiftyPercentDescount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDisount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDisount);
const individualCustomer = new IndividualCustomer(
  'Lucas',
  'Corrêa',
  '035.316.740-13',
);
const message = new Message();
const persist = new Persist();
const order = new Order(shoppingCart, message, persist, individualCustomer);

shoppingCart.addItem(new Product('Placa Mãe', 1080.35));
shoppingCart.addItem(new Product('Placa de Video', 2680.95));
shoppingCart.addItem(new Product('Processador', 1499.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
