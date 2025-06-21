import React, { useState } from 'react';
import { Link } from "react-router-dom";
import playstore from "../assets/favicon2.png";
import { FaHome, FaGithub, FaRegCopyright, FaDiscord, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const companyLinks = [
        { name: 'About Us', path: '/aboutus' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Contributors', path: '/contributor' },
    ];

    const quickLinks = [
        { name: 'Crop Recommendation', path: '/crop' },
        { name: 'Fertilizer Recommendation', path: '/fertilizer' },
        { name: 'Soil Quality', path: '/soil' },
        { name: 'Price Prediction', path: '/prices' },
        { name: 'Forecast', path: '/Climate' },
        { name: 'Disease', path: '/disease' },
        { name: 'Discussion Forum', path: '/discussion' },
    ];

    // ✅ Brajesh's actual links updated
    const socialMedia = [
        { Icon: FaGithub, link: 'https://github.com/Brajesh31', color: '#333' },
        { Icon: FaDiscord, link: 'https://discordapp.com/users/immortalsplugin', color: '#7289DA' },
        { Icon: FaXTwitter, link: 'https://x.com/lord_Brajesh', color: '#1DA1F2' },
        { Icon: FaLinkedinIn, link: 'https://linkedin.com/in/brajesh-kumar-9b58651a8', color: '#0077B5' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Code Of Conduct', path: '/code-of-conduct' },
        { name: 'License', path: '/licensing' },
        { name: 'Terms and Conditions', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookie-policy' },
    ];

    const handleRating = (value) => {
        setRating(value);
    };

    const submitRating = async () => {
        const authData = JSON.parse(localStorage.getItem("auth"));
        const token = authData?.token;

        if (!token) {
            toast.error("Please log in to submit a rating.");
            return;
        }

        try {
            const response = await fetch("https://agrotech-ai-11j3.onrender.com/api/rating", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ rating, comment }),
            });

            if (response.ok) {
                toast.success("Thank you for your feedback!");
                setRating(0);
                setComment("");
                setIsModalOpen(false);
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message || "Submission failed."}`);
            }
        } catch (error) {
            console.error("Error submitting rating:", error);
            toast.error("An error occurred while submitting your rating.");
        }
    };

    return (
        <footer className='bg-gradient-to-r from-[#11cb46] via-green-600 to-[#04ba10] p-8 text-white'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group hover:scale-105 transition-all">
                            <img src={playstore} className="h-10 w-10 group-hover:rotate-12 transition-transform" alt="AgroTech AI Logo" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent group-hover:from-lime-200 group-hover:to-white">
                                AgroTech AI
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            AgroTech AI platform provides cutting-edge Machine Learning models for agricultural predictions and insights.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-4 relative inline-block'>Company</h3>
                        <ul className='space-y-2'>
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className='group flex items-center'>
                                        <span className="mr-2 group-hover:translate-x-1">›</span>
                                        <span className="relative group-hover:text-lime-200">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-4 relative inline-block'>Quick Links</h3>
                        <ul className='space-y-2'>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className='group flex items-center'>
                                        <span className="mr-2 group-hover:translate-x-1">›</span>
                                        <span className="relative group-hover:text-lime-200">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Connect with us</h3>
                        <div className='flex space-x-4 mt-4'>
                            {socialMedia.map(({ Icon, link, color }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white text-green-700 hover:scale-110 hover:rotate-12 transition-all"
                                    style={{ color }}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                        <h3 className='text-lg font-semibold mt-6 mb-4'>Legal</h3>
                        <ul className='space-y-2'>
                            {legalLinks.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className='group flex items-center'>
                                        <span className="mr-2 group-hover:translate-x-1">›</span>
                                        <span className="relative group-hover:text-lime-200">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='mt-8 pt-8 border-t border-white/30 text-center'>
                    <p className='flex justify-center items-center text-sm'>
                        Copyright <FaRegCopyright className='mx-1' /> {currentYear} All Rights Reserved
                        <span className="font-bold ml-2 bg-white text-emerald-600 px-2 py-1 rounded">AgroTech AI</span>
                    </p>
                </div>

                {/* Rate Us Button */}
                <div className="text-center mt-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-lime-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-lime-300 transition-all"
                    >
                        Rate Us
                    </button>
                </div>
            </div>

            {/* Rating Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">✕</button>
                        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">We'd Love Your Feedback</h2>
                        <div className="flex justify-center space-x-2 mb-6">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span
                                    key={value}
                                    className={`cursor-pointer text-2xl ${rating >= value ? 'text-yellow-500' : 'text-gray-300'} hover:scale-105`}
                                    onClick={() => handleRating(value)}
                                >★</span>
                            ))}
                        </div>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-4 mb-4 text-gray-700 placeholder-gray-400 resize-none"
                            rows="3"
                            placeholder="Share your thoughts..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end space-x-4">
                            <button onClick={submitRating} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">Submit</button>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer />
        </footer>
    );
};

export default Footer;
