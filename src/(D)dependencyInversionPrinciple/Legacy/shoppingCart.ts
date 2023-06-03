type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((acc, cv) => {
        return acc + cv.price;
      }, 0)
      .toFixed(2);
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Seu pedido no valor de R$${this.total()} está sendo processado!`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Messagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Esvaziando carrinho...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Placa de Video', price: 2400.55 });
shoppingCart.addItem({ name: 'Placa Mãe', price: 1180.8 });
shoppingCart.addItem({ name: 'Processador', price: 1499.0 });

console.log(shoppingCart.items);

shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
