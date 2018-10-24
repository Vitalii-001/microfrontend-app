import {Component, TemplateRef, ViewChild, ElementRef, OnInit} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import {MessageBus} from 'ngx-message-bus';

const HUB_1 = 'test-hun';
const SUBSCRIBER_ID = 'test-subscriber';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public myConnection: any;
    public dataFromSlider: string;

    constructor(messageBus: MessageBus) {
       this.myConnection = messageBus.connect(HUB_1, SUBSCRIBER_ID);
    }

    ngOnInit() {
        const subscription = {
            groupId: HUB_1,
            callback: this.handleMessage.bind(this)
        };
        this.myConnection.on(subscription);
    }

    private handleMessage(data) {
        this.dataFromSlider = data;
    }

    public valueIsChanging(event) {
        const message = {
            recipientIds: [SUBSCRIBER_ID],
            payload: event.detail,
                groupId: HUB_1
            };
        this.myConnection.post(message);
    }
}