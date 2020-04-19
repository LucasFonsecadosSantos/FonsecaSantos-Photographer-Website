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
    ]);

}