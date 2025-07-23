import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

const ContactInformations = {
    Name: "Antonious Youssef",
    Accounts: [
        {
            platform: "GitHub",
            url: "https://github.com/antonious",
            Icon: <FaGithub size={24} />
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/antonious",
            Icon: <FaLinkedin size={24} />
        },
        {
            platform: "WhatsApp",
            url: "https://wa.me/+201080077917",
            Icon: <FaWhatsapp size={24} />
        },
        {
            platform: "Email",
            url: "mailto:contact@antonious.com",
            Icon: <MdOutlineEmail size={24} />
        }
    ]
}

export default ContactInformations;
