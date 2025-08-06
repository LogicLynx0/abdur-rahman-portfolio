
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Next.js, featuring user authentication, payment processing, and admin dashboard.',
    longDescription: 'This comprehensive e-commerce platform demonstrates my full-stack capabilities. Built with Next.js for optimal performance and SEO, it includes user authentication, product management, shopping cart functionality, and integrated payment processing. The admin dashboard allows for complete store management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'PostgreSQL'],
    features: [
      'User authentication and profiles',
      'Product catalog with search and filters',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Admin dashboard for store management',
      'Responsive design for all devices'
    ],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    challenges: [
      'Implementing secure payment processing',
      'Optimizing performance for large product catalogs',
      'Creating intuitive admin interface'
    ]
  },
  {
    id: '2',
    slug: 'task-management-app',
    title: 'Collaborative Task Manager',
    description: 'A real-time task management application with team collaboration features, built using React and Firebase.',
    longDescription: 'This project showcases real-time functionality and team collaboration features. Users can create projects, assign tasks, set deadlines, and collaborate in real-time. The application uses Firebase for backend services and real-time updates.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI', 'Context API'],
    features: [
      'Real-time task updates',
      'Team collaboration and assignments',
      'Project organization and categorization',
      'Due date tracking and notifications',
      'Activity timeline and comments',
      'Drag-and-drop task management'
    ],
    liveUrl: 'https://example-taskmanager.com',
    githubUrl: 'https://github.com/username/task-manager',
    challenges: [
      'Implementing real-time synchronization',
      'Managing complex state across components',
      'Designing intuitive user workflows'
    ]
  },
  {
    id: '3',
    slug: 'weather-dashboard',
    title: 'Advanced Weather Dashboard',
    description: 'An interactive weather dashboard with detailed forecasts, maps, and data visualization charts.',
    longDescription: 'This weather dashboard provides comprehensive weather information with beautiful data visualizations. It features current conditions, detailed forecasts, interactive maps, and historical data charts. The application demonstrates API integration and data visualization skills.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Leaflet Maps', 'Styled Components'],
    features: [
      'Current weather conditions',
      '7-day detailed forecast',
      'Interactive weather maps',
      'Historical data charts',
      'Location search and favorites',
      'Weather alerts and notifications'
    ],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    challenges: [
      'Handling multiple API integrations',
      'Creating responsive data visualizations',
      'Optimizing map performance'
    ]
  },
  {
    id: '4',
    slug: 'social-media-dashboard',
    title: 'Social Media Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for social media metrics with real-time data updates and beautiful charts.',
    longDescription: 'This analytics dashboard helps users track and analyze their social media performance across multiple platforms. It features real-time data updates, customizable widgets, and detailed reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Multi-platform analytics integration',
      'Real-time data visualization',
      'Customizable dashboard widgets',
      'Automated report generation',
      'Goal tracking and KPI monitoring',
      'Export functionality for reports'
    ],
    liveUrl: 'https://example-analytics.com',
    githubUrl: 'https://github.com/username/social-analytics',
    challenges: [
      'Integrating multiple social media APIs',
      'Creating responsive data visualizations',
      'Managing large datasets efficiently'
    ]
  },
  {
    id: '5',
    slug: 'recipe-sharing-platform',
    title: 'Recipe Sharing Community',
    description: 'A platform for food enthusiasts to share, discover, and rate recipes with social features and meal planning.',
    longDescription: 'This recipe sharing platform brings food enthusiasts together to share their favorite recipes, discover new dishes, and plan meals. It includes social features like following other users, rating recipes, and creating meal plans.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Cloudinary'],
    features: [
      'Recipe creation and sharing',
      'Advanced search and filtering',
      'User profiles and following system',
      'Recipe rating and reviews',
      'Meal planning calendar',
      'Shopping list generation'
    ],
    liveUrl: 'https://example-recipes.com',
    githubUrl: 'https://github.com/username/recipe-platform',
    challenges: [
      'Implementing complex search functionality',
      'Managing user-generated content',
      'Creating engaging social features'
    ]
  },
  {
    id: '6',
    slug: 'portfolio-website',
    title: 'Interactive Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects with smooth animations and interactive elements.',
    longDescription: 'This portfolio website demonstrates advanced frontend skills with smooth animations, interactive elements, and modern design principles. It features a content management system for easy updates and optimal performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Contentful CMS', 'Vercel'],
    features: [
      'Smooth page transitions and animations',
      'Interactive project showcases',
      'Content management system integration',
      'SEO optimization',
      'Performance optimization',
      'Contact form with email integration'
    ],
    liveUrl: 'https://example-portfolio.com',
    githubUrl: 'https://github.com/username/portfolio-website',
    challenges: [
      'Creating smooth animations without performance impact',
      'Implementing CMS integration',
      'Optimizing for search engines'
    ]
  }
];
