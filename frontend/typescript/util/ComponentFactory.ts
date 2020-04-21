import { ServiceComponent } from '../app/components/ServiceComponent.js';
import { LatestWorksComponent } from '../app/components/LatestWorksComponent.js';
import { PortfolioComponent } from '../app/components/PortfolioComponent.js';
import { WhoiamComponent } from '../app/components/WhoiamComponent.js';
import { ComponentNames } from '../conf/ComponentNames.js';
import { Component } from '../core/Component.js';

const components = {

    ServiceComponent,
    WhoiamComponent,
    PortfolioComponent,
    LatestWorksComponent

}

export abstract class ComponentFactory {

    public static buildComponent(targetComponent: ComponentNames, data: Object): DocumentFragment {

        
        let component: Component = new components[targetComponent]();
        
        return component.build(data);

    }

}