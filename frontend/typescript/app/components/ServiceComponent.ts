import { Component } from '../../core/Component.js';

export class ServiceComponent implements Component {

    constructor() {}

    public build(data: Object): DocumentFragment {

        let fragment = new DocumentFragment();

        let serviceContainer:   HTMLDivElement;
        let containerFluid:     HTMLDivElement;
        let row01:              HTMLDivElement;
        let row02:              HTMLDivElement;
        let iconBox:            HTMLDivElement;
        let icon:               HTMLElement;
        let h3:                 HTMLHeadingElement;
        let p:                  HTMLParagraphElement;
        let a:                  HTMLLinkElement;

        data['pt-BR'].forEach(service => {

            serviceContainer = <HTMLDivElement> document.createElement('DIV');
            serviceContainer.classList.add(
                'services__service', 'col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'col-xl-4', 'p-3'
            );

            containerFluid = <HTMLDivElement> document.createElement('DIV');
            containerFluid.className = 'container-fluid';

            row01 = <HTMLDivElement> document.createElement('DIV');
            row01.className = 'row';

            iconBox = <HTMLDivElement> document.createElement('DIV');
            iconBox.classList.add(
                'icon-box', 'p-3', 'mb-3'
            );

            icon = document.createElement('I');
            icon.classList.add(
                'fa',service['icon'],'text-white'
            );
            icon.setAttribute('aria-hidden', 'true');

            row02 = <HTMLDivElement> document.createElement('DIV');
            row02.className = 'row';

            h3  =   <HTMLHeadingElement> document.createElement('H3');
            h3.innerText = (service['title'] && service['title'] != "") ? service['title'] : "Título não informado";

            p = <HTMLParagraphElement> document.createElement('P');
            p.classList.add(
                'mt-3','mb-3'
            );
            p.innerText = (service['brief'] && service['brief'] != "") ? service['brief'] : "Descrição não fornecida.";

            a = <HTMLLinkElement> document.createElement('A');
            a.innerText = ' - Clique e saiba mais.';
            a.setAttribute('href', (service['link'] && (service['link'] != '') ? service['link'] : '#'));

            row02.appendChild(h3);
            row02.appendChild(p);
            row02.appendChild(a);

            iconBox.appendChild(icon);
            row01.appendChild(iconBox);

            containerFluid.appendChild(row01);
            containerFluid.appendChild(row02);

            serviceContainer.appendChild(containerFluid);

            fragment.appendChild(serviceContainer);




        });
        
        return fragment;

    }    

}