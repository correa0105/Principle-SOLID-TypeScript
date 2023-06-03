import { MessageProcol } from './interfacesAndTypes/message-protocol';

export class Message implements MessageProcol {
  sendMessage(msg: string): void {
    console.log('Messagem enviada: ', msg);
  }
}
