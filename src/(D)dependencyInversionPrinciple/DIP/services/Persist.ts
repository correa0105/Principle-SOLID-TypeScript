import { PersistProcol } from './interfacesAndTypes/persist-protocol';

export class Persist implements PersistProcol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
