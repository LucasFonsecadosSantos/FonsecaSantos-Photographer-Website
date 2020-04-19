import { HomeController } from './../app/controller/HomeController.js';

export class App {

    private _homeController: HomeController;

    constructor() {

        this._homeController = new HomeController();

    }

}