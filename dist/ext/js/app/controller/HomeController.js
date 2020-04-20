import { HomeElements } from './../elements/HomeElements.js';
import { MessageBuilder } from './../../util/MessageBuilder.js';
import { MessageModel } from './../model/MessageModel.js';
import { ServiceModel } from './../model/ServiceModel.js';
import { LatestWorksModel } from './../model/LatestWorksModel.js';
import { PortfolioModel } from './../model/PortfolioModel.js';
import { ComponentFactory } from '../../util/ComponentFactory.js';
import { ComponentNames } from '../../conf/ComponentNames.js';
export class HomeController {
    constructor() {
        this._messageModel = new MessageModel();
        this._serviceModel = new ServiceModel();
        this._latestWorksModel = new LatestWorksModel();
        this._portfolioModel = new PortfolioModel();
        this._buildMessages();
        this._initListeners();
        this._loadContent();
    }
    _buildMessages() {
        this._messageModel.all().then(data => {
            data['pt-BR'].forEach(message => {
                console.log(message['id']);
                let element = HomeElements.ELEMENTS.get(message['id']);
                MessageBuilder.buildMessage(element, message);
            });
        });
    }
    _initListeners() {
    }
    _loadContent() {
        this._loadLatestWorks();
        this._loadServices();
        this._loadPortfolio();
    }
    _loadPortfolio() {
        this._portfolioModel.all()
            .then(data => {
            let component = ComponentFactory.buildComponent(ComponentNames.PORTFOLIO_COMPONENT, data);
            console.log(component);
        })
            .catch(error => {
            console.log("HomeController exception in load services method: " + error);
        });
    }
    _loadLatestWorks() {
        this._latestWorksModel.all()
            .then(data => {
            let component = ComponentFactory.buildComponent(ComponentNames.LATEST_WORKS_COMPONENT, data);
            console.log(component);
        })
            .catch(error => {
            console.log("HomeController exception in load services method: " + error);
        });
    }
    _loadServices() {
        this._serviceModel.all()
            .then(data => {
            let component = ComponentFactory.buildComponent(ComponentNames.SERVICE_COMPONENT, data);
            console.log(component);
        })
            .catch(error => {
            console.log("HomeController exception in load services method: " + error);
        });
    }
}
