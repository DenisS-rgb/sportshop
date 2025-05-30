import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function TopNavbar() {
    return (
        <nav className="hidden lg:block bg-gray-900 text-white px-25 py-1">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-sm" />
                        <a href="mailto:infosportshop@company.md" className="hover:underline">
                            infosportshop@company.md
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhone className="text-sm" />
                        <a href="tel:+37360-945-543" className="hover:underline">
                            +37360-945-543
                        </a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://fb.com/templatemo" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="hover:text-blue-500 transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-pink-500 transition-colors" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="hover:text-sky-500 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-700 transition-colors" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;
