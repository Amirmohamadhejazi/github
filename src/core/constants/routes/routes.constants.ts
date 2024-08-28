const ROUTES = {
    // Independent Routes
    Landing: '/',
    Faq: '/faq',
    Terms: '/terms-and-conditions',
    Contact: '/contact-us',
    About: '/about-us',
    // MultiMedia Routes
    Gallery: '/gallery',
    GalleryDetail: (id: string) => `/gallery/${id}`,
    // Service Routes
    Services: '/services',
    // Event Routes
    Events: '/events',
    // Blog Routes
    Blogs: '/blogs',
    // Routes
    RoutesPage: '/routes',
    // Portfolio Routes
    Portfolio: '/portfolio',
}

export default ROUTES
