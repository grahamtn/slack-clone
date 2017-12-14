import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './mock-messages';

@Injectable()
export class StoreMessageService {

  userInputEle:any;
  newMessage: String;
  messages: String[] = [];


  constructor() {
  this.userInputEle = document.getElementById("user_input");
  }

  storeMessage(newMessage: String){
      let message: Message = new Message(newMessage);
      MESSAGES.push(message);
  }

  getMessages(){
      return this.messages;
  }


}
