interface Project {
    title: string;
    description: string;
    image?: string;
    link: string;
    tags: string[];
    date: string; // ISO date format
}

const Projects: Project[] = [
    {
        title: "E-commerce Frontend",
        description: "A full-featured e-commerce frontend built with React, supporting product management, user authentication, and payment processing.",
        image: "/projects/ecommerce.png",
        link: "https://fashion-ecommerce-gules.vercel.app/",
        tags: ["React", "Rest API", "Tailwind CSS", "TypeScript"],
        date: "2023-11-13"
    },
    {
        title: "E-commerce Backend",
        description: "A robust backend for an e-commerce platform, handling product management, user authentication, and payment processing.",
        link: "https://github.com/DeadCode-Dev/E-commerce-backend",
        tags: ["Node.js", "Express.js", "SQL", "REST API"],
        date: "2025-07-26"
    }
];

export default Projects;