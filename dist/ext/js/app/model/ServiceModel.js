import { Model } from './../../core/Model.js';
export class ServiceModel extends Model {
    constructor() {
        super("ServiceModel", "/data/services.json");
    }
}
