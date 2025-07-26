import { JSX } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

interface Account {
    platform: string;
    url: string;
    Icon: JSX.Element;
}

interface ContactInformation {
    Name: string;
    Accounts: Account[];
}

const ContactInformations: ContactInformation = {
    Name: "Antonious Youssef",
    Accounts: [
        {
            platform: "GitHub",
            url: "https://github.com/DeadCode-Dev/",
            Icon: <FaGithub size={24} />
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/tony-yousef/",
            Icon: <FaLinkedin size={24} />
        },
        {
            platform: "WhatsApp",
            url: "https://wa.me/+201080077917",
            Icon: <FaWhatsapp size={24} />
        },
        {
            platform: "Email",
            url: "mailto:contact@antonious.me",
            Icon: <MdOutlineEmail size={24} />
        }
    ]
}

export default ContactInformations;
