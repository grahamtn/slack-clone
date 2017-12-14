import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';
import { FormsModule } from '@angular/forms';
import { MessageInputComponent } from '../message-input/message-input.component';
import { StoreMessageService } from '../store-message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {


  messages: Message[];

  message: Message = {
      messageBody: 'YO DUDE!'
  };

  constructor(private storeMessageService: StoreMessageService) { }

  ngOnInit() {
  }

}
