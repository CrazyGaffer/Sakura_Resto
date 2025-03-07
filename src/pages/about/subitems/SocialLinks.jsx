import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialLinks = () => (
    <div className="about-socials">
        <a
            href="https://www.facebook.com/sakuraresto.ee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
        >
            <FaFacebookF />
        </a>
        <a
            href="https://www.instagram.com/sakuraresto.ee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
            <FaInstagram />
        </a>
        <a
            href="https://www.tiktok.com/@sakuraresto.ee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
        >
            <FaTiktok />
        </a>
    </div>
);

export default SocialLinks;