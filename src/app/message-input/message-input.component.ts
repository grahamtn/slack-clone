import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { StoreMessageService } from '../store-message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  @Input() message: Message;

  constructor(private storeMessageService: StoreMessageService) {

  }

  textValue = 'initial value';

  ngOnInit() {
  }

  createMessage(input: String){
      this.storeMessageService.storeMessage(input);
  }

}
