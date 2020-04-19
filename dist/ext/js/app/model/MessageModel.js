import { Model } from './../../core/Model.js';
export class MessageModel extends Model {
    constructor() {
        super("MessageModel", "/messages/home.json");
    }
}
