import { HomeElements } from './../elements/HomeElements.js';
import { MessageBuilder } from './../../util/MessageBuilder.js';
import { MessageModel } from './../model/MessageModel.js';

export class HomeController {

    private _messageModel: MessageModel;

    constructor() {
        
        this._messageModel = new MessageModel();
        this._buildMessages();
        this._initListeners();

    }

    private _buildMessages(): void {

        this._messageModel.all().then(data => {

            data['pt-BR'].forEach(message => {

                console.log(message['id']);
                let element: HTMLElement = HomeElements.ELEMENTS.get(message['id']);
                MessageBuilder.buildMessage(element, message);

            });

        });

    }

    private _initListeners(): void {

    }

}