import { ServiceComponent } from '../app/components/ServiceComponent.js';
import { LatestWorksComponent } from '../app/components/LatestWorksComponent.js';
import { PortfolioComponent } from '../app/components/PortfolioComponent.js';
import { WhoiamComponent } from '../app/components/WhoiamComponent.js';
const components = {
    ServiceComponent,
    WhoiamComponent,
    PortfolioComponent,
    LatestWorksComponent
};
export class ComponentFactory {
    static buildComponent(targetComponent, data) {
        let component = new components[targetComponent]();
        return component.build(data);
    }
}
