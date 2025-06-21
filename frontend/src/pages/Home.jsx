import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/hero.png';
import Features from '../components/Features';
import About from './About';
import Showcase from '../components/Showcase';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';
import { FaComment } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdvantagesDisadvantages from '../components/AdvDis';
import "../styles/ChatbotButton.css";
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatBotAuthentication = () => {
    if (isLoggedIn) {
      navigate('/chatbot');
    } else {
      toast.warn('🔒 Please login to access the Agrotech AI ChatBot. Redirecting...', {
        position: 'top-center',
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  };

  return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-green-50 to-green-100">
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            draggable
            pauseOnHover
            toastClassName="custom-toast"
            bodyClassName="custom-toast-body"
            className="mt-16"
        />

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-4 md:py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-20">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl md:text-6xl pt-48">
              <span className="block">Welcome to Agrotech AI</span>
              <span className="block text-green-600">Revolutionizing Agriculture</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-green-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore AI-powered solutions tailored to enhance farming practices. From crop prediction to soil analysis,
              discover tools designed to optimize agricultural productivity.
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-md shadow">
                <Link
                    to="/products"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  🌾 Explore Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* ChatBot Button (floating bottom-right) */}
          <div className="fixed bottom-5 right-5 z-50">
            <button
                onClick={handleChatBotAuthentication}
                className="group bg-green-500 rounded-full p-4 shadow-xl hover:scale-110 transition-transform"
                aria-label="Try ChatBot"
            >
              <FaComment className="text-white text-2xl" />
              <span className="absolute -top-10 -right-4 bg-white text-green-600 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Try Our ChatBot
            </span>
            </button>
          </div>

          {/* Hero Image */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-20"
          >
            <img
                src={heroImage}
                alt="Agrotech AI Hero"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center">How It Works?</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Step 1: Data Collection", desc: "We gather real-time data on soil, weather, and crop health using AI sensors." },
                { title: "Step 2: Analysis", desc: "AI analyzes data and generates insights on growth, stress, and yield." },
                { title: "Step 3: Optimization", desc: "We suggest best practices to boost yield and sustainability." }
              ].map((step, index) => (
                  <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-b from-green-100 to-green-200 p-6 rounded-lg text-center shadow-2xl"
                  >
                    <h3 className="text-xl font-semibold text-green-700">{step.title}</h3>
                    <p className="mt-4 text-green-600">{step.desc}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features & Engagement Sections */}
        <Features />
        <About />
        <Showcase />
        <AdvantagesDisadvantages />
        <TestimonialSlider />
        <FAQ />
      </div>
  );
}
