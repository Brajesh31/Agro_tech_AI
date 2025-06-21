// src/WhyAI.js
import React from 'react';
import cropMonitoringImg from '../assets/crop_monitor.jpg';
import soilAnalysisImg from '../assets/soil_analysis.jpg';
import supplyChainImg from '../assets/supply.jpg';
import roboticsImg from '../assets/robo.jpg';
import weather from '../assets/weather.jpg';
import irrigation from '../assets/irrigation.jpg';

const applications = [
  {
    title: 'Crop Monitoring',
    description: 'AI technologies like computer vision and machine learning can detect diseases in crops at an early stage, allowing for timely intervention.',
    img: cropMonitoringImg,
  },
  {
    title: 'Soil Analysis',
    description: 'AI algorithms can analyze soil health and nutrient levels, providing tailored recommendations for fertilizer application.',
    img: soilAnalysisImg,
  },
  {
    title: 'Supply Chain Optimization',
    description: 'AI enhances the agricultural supply chain by predicting demand and managing logistics, ensuring quick and efficient product delivery.',
    img: supplyChainImg,
  },
  {
    title: 'Weather Forecasting',
    description: 'AI models analyze historical weather data and real-time satellite imagery to provide accurate weather forecasts, helping farmers make informed decisions about planting, harvesting, and irrigation.',
    img: weather,
  },
  {
    title: 'Smart Irrigation Systems',
    description: 'AI-powered smart irrigation systems analyze soil moisture levels, weather forecasts, and crop water requirements to optimize irrigation schedules, conserving water resources and improving crop yield.',
    img: irrigation,
  },
  {
    title: 'Robotics and Automation',
    description: 'Robotic systems powered by AI can perform tasks such as planting and harvesting, improving precision and reducing labor costs.',
    img: roboticsImg,
  },
];

const WhyAI = () => {
  return (
      <div className="p-14 max-w-7xl mx-auto mt-12 bg-gradient-to-br from-green-50 via-white to-green-100 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-green-600 mb-6 text-center">🌾 Why Agrotech AI in Agriculture? 🌾</h2>
        <p className="text-lg text-green-700 font-semibold mb-6 mt-6 text-center">
          Powered by Brajesh Kumar, Agrotech AI is on a mission to revolutionize agriculture using the power of Artificial Intelligence. By harnessing data-driven insights, our platform empowers farmers, researchers, and agricultural communities with tools for sustainable and smart farming practices.
        </p>

        {/* Benefits */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-bold text-green-600 mb-4">Key Benefits of Agrotech AI</h3>
          <ul className="list-disc list-inside text-green-600 space-y-2">
            <li>🎯 Precision Farming: Monitor and optimize crop health, soil, and water use.</li>
            <li>📊 Predictive Analytics: Get intelligent forecasts on weather, pests, and yields.</li>
            <li>🚜 Automated Machinery: AI-driven robotics reduce manual labor and increase efficiency.</li>
            <li>📡 Smart Decision Making: Real-time dashboards guide strategic agricultural actions.</li>
            <li>🌱 Sustainability: Minimize chemical inputs and water wastage for greener farming.</li>
          </ul>
        </div>

        {/* Applications Grid */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-bold text-green-700 mb-4">AI in Action – Use Cases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-xl transition duration-300">
                  <img src={app.img} alt={app.title} className="h-48 w-full object-cover rounded-t-lg mb-4" />
                  <h4 className="text-xl font-semibold text-green-700">{app.title}</h4>
                  <p className="text-gray-800">{app.description}</p>
                </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-bold text-green-700 mb-4">Challenges to Overcome</h3>
          <ul className="list-disc list-inside text-green-600 space-y-2">
            <li>💰 High Setup Costs: Difficult for smallholders to adopt without support.</li>
            <li>🔐 Data Privacy: Ensuring protection of farmer data and insights.</li>
            <li>📚 Training Needs: Farmers require proper education to utilize these systems.</li>
          </ul>
        </div>

        {/* Future */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-bold text-green-700 mb-4">The Road Ahead with Agrotech AI</h3>
          <ul className="list-disc list-inside text-green-600 space-y-2">
            <li>🌐 Real-time IoT Integration with smart sensors.</li>
            <li>🧠 More powerful, adaptive AI models.</li>
            <li>🧬 Personalized farm optimization tools.</li>
            <li>🔗 Blockchain-backed traceability in food supply.</li>
            <li>🌦️ AI models that adapt to climate change for crop resilience.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-4">In Conclusion</h3>
          <p className="text-lg text-gray-700">
            Agrotech AI isn’t just about technology—it’s about empowering India’s agricultural backbone with the future of farming. Join us in driving smarter harvests, sustainable practices, and a digitally enabled rural revolution.
          </p>
          <p className="mt-6 font-medium text-green-700">🚀 Built by Brajesh Kumar | Let's connect:
            <a href="https://linkedin.com/in/brajesh-kumar-9b58651a8" target="_blank" rel="noreferrer" className="text-blue-600 underline ml-1">LinkedIn</a>,
            <a href="https://github.com/Brajesh31" target="_blank" rel="noreferrer" className="text-blue-600 underline ml-1">GitHub</a>
          </p>
        </div>
      </div>
  );
};

export default WhyAI;
