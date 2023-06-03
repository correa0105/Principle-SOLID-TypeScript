import { OrderStatus } from './intefacesAndTypes/oder-status';
import { CustomerOrder } from './intefacesAndTypes/customer-protocol';
import { ShoppingCartProtocol } from './intefacesAndTypes/shopping-cart-protocol';
import { MessageProcol } from '../services/interfacesAndTypes/message-protocol';
import { PersistProcol } from '../services/interfacesAndTypes/persist-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProcol,
    private readonly persist: PersistProcol,
    private readonly customer: CustomerOrder,
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
      `Seu pedido no valor de R$${this.cart.totalWithDiscount()} está sendo processado!`,
    );
    this.persist.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
