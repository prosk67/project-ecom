"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // router.push("/login");
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return <p className="text-center mt-20 text-lg">Loading...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-black">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-black">Contact Information</h2>
          <p className="text-lg text-black mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-lg text-black mb-2">
            <strong>Email:</strong> contact@company.com
          </p>
          <p className="text-lg text-black mb-4">
            <strong>Branch Address:</strong> 123 Main Street, City, Country
          </p>
          <h3 className="text-xl font-medium mb-2 text-black">Follow us on Social Media:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaFacebook className="text-blue-600 mr-2" />
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-black hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center">
              <FaTwitter className="text-blue-400 mr-2" />
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-black hover:underline"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center">
              <FaInstagram className="text-pink-500 mr-2" />
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-black hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-black">Subscribe to Our Newsletter</h2>
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Email</label>
              <input
                type="email"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black hover:border-black border-2 border-black transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="space-y-12">
        <section id="complaint" className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-black">Any complaint to us?</h2>
          <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div >
              <p className="text-lg text-black mb-4">
                If you have any complaint, please let us know. We are here to help you.
              </p>
              <button
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
              >
                Raise a Complaint
              </button>
            </div>            
            <img
              src="https://www.startech.com.bd/catalog/view/theme/starship/images/complain.svg"
              alt="Complaint"
              className="w-full md:w-1/2 h-48 object-contain rounded-md"
            />

          </div>
        </section>
        <section id="talk-to-experts" className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-black">Talk to Experts</h2>
          <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="https://www.startech.com.bd/catalog/view/theme/starship/images/support.svg"
              alt="Talk to Experts"
              className="w-full md:w-1/2 h-48 object-contain rounded-md"
            />
            <div>
              <p className="text-lg text-black mb-4">
                Need help? Our experts are here to assist you. Click the button below to start a live chat.
              </p>
              <button
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
              >
                Start Live Chat
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
