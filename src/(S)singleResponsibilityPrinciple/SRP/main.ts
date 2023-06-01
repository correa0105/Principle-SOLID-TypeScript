import { ShoppingCart } from './entities/ShoppingCart';
import { Product } from './entities/Product';
import { Order } from './entities/Order';
import { Message } from './services/Message';
import { Persist } from './services/Persist';

const shoppingCart = new ShoppingCart();
const message = new Message();
const persist = new Persist();
const order = new Order(shoppingCart, message, persist);

shoppingCart.addItem(new Product('Placa Mãe', 1080.35));
shoppingCart.addItem(new Product('Placa de Video', 2680.95));
shoppingCart.addItem(new Product('Processador', 1499.99));

console.log(shoppingCart.items);
order.checkout();
console.log(order.orderStatus);
