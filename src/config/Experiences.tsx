interface WorkExperience {
    company: string;
    role: string;
    description: string;
    duration: string;
}

const WorkExperiences: WorkExperience[] = [
    {
        company: "Ria Store",
        role: "Full Stack Developer",
        description: "Developed and maintained the Ria Store e-commerce platform, focusing on both frontend and backend functionalities. Implemented features such as product management, user authentication, and payment processing.",
        duration: "Jan 2021 - Dec 2022",
    },
    {
        company: "BytesStudio",
        role: "Backend Developer",
        description: "Worked on building and optimizing RESTful APIs and microservices using Node.js and Express.",
        duration: "Jan 2023 - Jul 2023",
    },
    {
        company: "Freelance Projects",
        role: "Full Stack Developer",
        description: "Worked on various freelance projects, developing web applications using React, Node.js, and MongoDB.",
        duration: "Aug 2022 - Present",
    }
];

export default WorkExperiences;
