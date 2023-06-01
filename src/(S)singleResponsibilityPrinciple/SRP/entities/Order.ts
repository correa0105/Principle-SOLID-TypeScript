import { OrderStatus } from './intefacesAndTypes/oder-status';
import { Message } from '../services/Message';
import { Persist } from '../services/Persist';
import { ShoppingCart } from './ShoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persist: Persist,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido no valor de R$${this.cart.total()} está sendo processado!`,
    );
    this.persist.saveOrder();
    this.cart.clear();
  }
}
