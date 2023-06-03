/*
Liskov Substitution Principle (Princípio da Substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais Simples: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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

// const fiftyPercentDescount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDisount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDisount);
const message = new Message();
const persist = new Persist();
const order = new Order(shoppingCart, message, persist);

shoppingCart.addItem(new Product('Placa Mãe', 1080.35));
shoppingCart.addItem(new Product('Placa de Video', 2680.95));
shoppingCart.addItem(new Product('Processador', 1499.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
