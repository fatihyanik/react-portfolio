import "./NavbarComponents.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

export const socialIcons = [
    <FaYoutube />,
    <FaDribbble />,
    <FaGithub />,
    <FaTwitter />,
];

export const Logo =( <Link to="/" className="logo"> Fatih </Link>);

export const navItems = [
    {
        name: "Home",
        id: '/',
    },
    {
        name: "About",
        id: 'about',
    },
    {
        name: "Projects",
        id: 'portfolio',
    },
    {
        name: "FAQ's",
        id: 'faq',
    },
    {
        name: "Appointment",
        id: 'appointment',
    },
]