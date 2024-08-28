const ELEMENT_IDS = {
    // header
    HeaderPhone: 'landings-header-phone',
    // landing hero section
    LandingHeroCta: 'landings-hero-cta',
    LandingHeroStory: 'landings-hero-story',
    // landing service section
    LandingService: (number: number) => `landing-service-${number}`,
    // landing about section
    LandingAboutDetail: 'landing-about-detail',
    // landing national projects section
    LandingNationalAll: 'landing-national-all',
    // landing catalog section
    LandingCatalog: 'landing-catalog',
    // landing media section
    LandingMediaPlayer: 'landing-media-player',
    // landing questions section
    LandingQuestions: (number: number) => `landing-questions-${number}`,
    // landing our customers section
    LandingOurCustomersView: 'landing-our-customers-view',
    // landing smart choice section
    LandingCta: 'landing-cta',
    // footer
    LandingFooterPermission: (number: number) => `landing-footer-permission-${number}`,
}

export default ELEMENT_IDS
