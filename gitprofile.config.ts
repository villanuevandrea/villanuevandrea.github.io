// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'villanuevandrea', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['villanuevandrea/stuff', 'villanuevandrea/Bioinformatics'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Andrea Villanueva',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'villanuevandreai',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://villanuevandrea.github.io',
    phone: '',
    email: 'andreaaaiv.19@gmail.com',
  },
  resume: {
    fileUrl:
      'https://villanuevandrea.github.io/pdfs/villanuevaCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Hands-on Patient Care Experience', '68 WPM', 'Academic Writing', 'Billingual'
  ],
  experiences: [
    {
      company: 'Golden Modesto Care Center',
      position: 'Certified Nursing Assistant',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://goldenmodestohc.com',
    },
    {
      company: 'Falcons Lair',
      position: 'Prep Cook/Food Runner',
      from: 'March 2023',
      to: 'June 2023',
      companyLink: 'https://relicincorporated.com/falcons-lair/',
    },
     {
      company: 'Great Wolf Lodge',
      position: 'Food & Beverage Assistant',
      from: 'December 2021',
      to: 'August 2022',
      companyLink: 'https://relicincorporated.com/falcons-lair/',
    },
     {
      company: 'Panera Bread',
      position: 'Retail Service Member',
      from: 'June 2021',
      to: 'December 2021',
      companyLink: 'https://relicincorporated.com/falcons-lair/',
    },
     {
      company: 'The Habit Burger Grill',
      position: 'Cashier',
      from: 'July 2019',
      to: 'April 2021',
      companyLink: 'https://www.habitburger.com',
    },
  ],
  certifications: [
    {
      name: 'Certified Nursing Assistant ',
      body: 'CNA License',
      year: '2023',
      link: 'https://cvl.cdph.ca.gov/ListPage.aspx',
    },
  ],
  educations: [
    {
      institution: 'CSU Stanislaus',
      degree: 'BA in Biological Sciences',
      from: '2020',
      to: '2024',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
