export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://aigenoves.github.io',
    title: 'Mi portfolio y blog personal',
    subtitle: 'AIG',
    description: 'Este es mi portfolio y blog personal donde comparto mis proyectos y pensamientos.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Acerca de',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Terminos de servicio',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'goodreads',
            href: 'https://www.goodreads.com/agenoves'
        },
        {
            text: 'Babelio',
            href: 'https://es.babelio.com/monprofil.php?id_user=105122'
        }
    ],
    hero: {
        title: 'Hola a todos! Bienvenidos a mi lugarcito en la Web!',
        text: "Soy Agustín Genoves, explorador del mundo digital y apasionado por aprender cada día algo nuevo. Este blog es mi espacio para documentar proyectos, ideas y descubrimientos en programación, tecnología y más allá. Si te interesa la innovación, los retos y el aprendizaje continuo, ¡bienvenido!.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
