import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 w-full text-white py-10 mt-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">AudioShop</h2>
                    <p className="text-amber-100">High-quality audio equipment for your best sound experience.</p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Shipping & Returns</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
                &copy; {new Date().getFullYear()} AudioShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
