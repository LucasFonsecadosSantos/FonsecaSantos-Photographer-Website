export abstract class HomeElements {

    public static readonly ELEMENTS: Map<string, HTMLElement> = new Map([

        ['section-home_title-label', document.querySelector('#section-home_title-label')],
        ['section-home_intro-label', document.querySelector('#section-home_intro-label')],
        ['section-home_link-label', document.querySelector('#section-home_link-label')],
        ['section-home_instagram-link', document.querySelector('#section-home_instagram-link')],
        ['section-home_facebook-link', document.querySelector('#section-home_facebook-link')],
        ['section-home_pinterest-link', document.querySelector('#section-home_pinterest-link')],
        ['section-home_linkedin-link', document.querySelector('#section-home_linkedin-link')],
        ['section-home_youtube-link', document.querySelector('#section-home_youtube-link')],
        ['section-home_down-page-link', document.querySelector('#section-home_down-page-link')],

        ['latest-works__title01-label', document.querySelector('#latest-works__title01-label')],
        ['latest-works__title02-label', document.querySelector('#latest-works__title02-label')],

        ['services__title01-label', document.querySelector('#services__title01-label')],
        ['services__title02-label', document.querySelector('#services__title02-label')],
        
        ['portfolio__title01-label', document.querySelector('#portfolio__title01-label')],
        ['portfolio__title02-label', document.querySelector('#portfolio__title02-label')],

        ['whoiam__title01-label', document.querySelector('#whoiam__title01-label')],
        ['whoiam__title02-label', document.querySelector('#whoiam__title02-label')],

        ['whoiam__button01', document.querySelector('#whoiam__button01')],
        ['whoiam__button02', document.querySelector('#whoiam__button02')],
    ]);

}