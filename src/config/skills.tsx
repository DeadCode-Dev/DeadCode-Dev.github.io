interface SkillCategory {
  category: string;
  skills: string[];
}

const skills: SkillCategory[] = [
  {
    category: 'FrontEnd',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Web Design',
      'REST API Integration',
      'State Management',
      'Client/Server Components',
      'SEO & Performance Optimization',
      'Dark Mode & Theming'
    ]
  },
  {
    category: 'BackEnd',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Authentication',
      'Authorization',
      'Multi-Device Session Management',
      'WebSockets',
      'Email Services',
      'File Uploads',
      'Redis'
    ]
  },
  {
    category: 'DevOps',
    skills: [
      'Docker',
      'CI/CD',
      'AWS',
      'Vercel',
      'Git',
      'Reverse Proxy',
      'SSL/TLS Setup'
    ]
  },
  {
    category: 'Security & Streaming',
    skills: [
      'Token-based Auth',
      'HTTP-Only Cookies',
      'Signed URLs',
      'Rate Limiting',
      'Video Encryption',
      'Download Detection & Fingerprinting',
      'DRM-like Protection Strategy'
    ]
  }
];

export default skills;
