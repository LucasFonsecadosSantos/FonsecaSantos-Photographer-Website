export class ServiceComponent {
    constructor() { }
    build(data) {
        let fragment = new DocumentFragment();
        let serviceContainer;
        let containerFluid;
        let row01;
        let row02;
        let iconBox;
        let icon;
        let h3;
        let p;
        let a;
        data['pt-BR'].forEach(service => {
            serviceContainer = document.createElement('DIV');
            serviceContainer.classList.add('services__service', 'col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'col-xl-4', 'p-3');
            containerFluid = document.createElement('DIV');
            containerFluid.className = 'container-fluid';
            row01 = document.createElement('DIV');
            row01.className = 'row';
            iconBox = document.createElement('DIV');
            iconBox.classList.add('icon-box', 'p-3', 'mb-3');
            icon = document.createElement('I');
            icon.classList.add('fa', service['icon'], 'text-white');
            icon.setAttribute('aria-hidden', 'true');
            row02 = document.createElement('DIV');
            row02.className = 'row';
            h3 = document.createElement('H3');
            h3.innerText = (service['title'] && service['title'] != "") ? service['title'] : "Título não informado";
            p = document.createElement('P');
            p.classList.add('mt-3', 'mb-3');
            p.innerText = (service['brief'] && service['brief'] != "") ? service['brief'] : "Descrição não fornecida.";
            a = document.createElement('A');
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
