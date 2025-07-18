import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import bgHero from "../assets/bgHero.png";
import { useNavigate } from 'react-router-dom';

const CropRecommendationCard = () => {
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const cardData = [
        {
            image: "https://storage.googleapis.com/kaggle-datasets-images/2891746/4985987/b2d60ecb83da08b41502185097895593/dataset-cover.jpeg?t=2023-02-13-07-14-27",
            title: "Crop Recommendation",
            description: "Find the best crops based on soil and environmental data.",
            link: "/crop",
            details: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Nitrogen, Phosphorus, Potassium (NPK) levels.</li>
                    <li>Soil pH and moisture levels.</li>
                    <li>Temperature and rainfall data.</li>
                    <li>Crop adaptability and resistance to local pests.</li>
                </ul>
            )
        },
        {
            image: "https://cloudinary.propane.com/images/w_637,h_247,c_fill/f_auto,q_auto/v1651243734/website-media/PERC_Renewable-Propane_Plant-Based-Header-Image_4-29-22/PERC_Renewable-Propane_Plant-Based-Header-Image_4-29-22.jpeg?_i=AA",
            title: "Crop Rotation Recommendation",
            description: "Learn about optimal crop rotation to improve soil quality.",
            link: "/crop_recommendation",
            details: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Balance nutrient depletion and replenishment.</li>
                    <li>Reduce soil-borne diseases and pests.</li>
                    <li>Maintain soil structure and organic matter.</li>
                    <li>Adapt rotation plans to local climate and crops.</li>
                </ul>
            )
        },
        {
            image: "https://th.bing.com/th/id/OIP.QkxKnS7kskNm9wNwypEncwHaF7?rs=1&pid=ImgDetMain",
            title: "Crop Price Prediction",
            description: "Predict future prices for crops based on market trends.",
            link: "/prices",
            details: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Historical price fluctuations.</li>
                    <li>Supply-demand ratios for different regions.</li>
                    <li>Impact of weather patterns on crop yields.</li>
                    <li>Government policies and global trade trends.</li>
                </ul>
            )
        },
        {
            image: "https://img.freepik.com/premium-photo/digital-design-fertilization-role-nutrients-plant-soil_117255-1850.jpg",
            title: "Fertilizer Prediction",
            description: "Get recommendations for the best fertilizers for your crops.",
            link: "/fertilizer",
            details: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Tailored recommendations based on soil nutrient analysis.</li>
                    <li>Balanced nutrient profiles for different crops.</li>
                    <li>Guidance on organic vs. synthetic fertilizers.</li>
                    <li>Recommendations to improve long-term soil health.</li>
                </ul>
            )
        },
        {
            image: "https://th.bing.com/th/id/OIP.MjCO836ZA5dCr0AmblPAnwHaEP?rs=1&pid=ImgDetMain",
            title: "Soil Quality Prediction",
            description: "Analyze the quality of your soil for better yields.",
            link: "/soil",
            details: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Organic matter content and soil texture.</li>
                    <li>Nutrient availability and pH balance.</li>
                    <li>Presence of contaminants or toxins.</li>
                    <li>Recommendations for soil amendments and improvements.</li>
                </ul>
            )
        },
        {
            image: "https://th.bing.com/th/id/OIP.m5-x6mfyS59kwL_pH2L-ugHaEK?w=1000&h=562&rs=1&pid=ImgDetMain",
            title: "Irrigation System Prediction",
            description: "Determine the most effective irrigation system for your farm.",
            link: "/irrigation",
            details: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Drip vs. sprinkler irrigation suitability.</li>
                    <li>Water availability and crop water requirements.</li>
                    <li>Soil moisture retention and evaporation rates.</li>
                    <li>Efficiency recommendations for water conservation.</li>
                </ul>
            )
        }
    ];

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCard(null);
    };

    return (
        <>
            {loading ? <Spinner /> : (
                <div className="max-w-full mt-16 mx-auto px-4 pb-10 pt-5 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Header */}
                    <h1 className="text-3xl text-center font-extrabold text-green-600 mb-2">🌿 Agrotech AI Tools</h1>
                    <p className="text-md text-center text-green-800 font-medium mb-6">
                        Empowering agriculture with intelligence — built by <strong>Brajesh Kumar</strong>
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-green-300 p-4 rounded-xl shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                onClick={() => handleCardClick(card)}
                            >
                                <img src={card.image} alt={card.title} className="w-full h-44 object-cover rounded-md" />
                                <h2 className="text-xl font-semibold text-green-700 mt-3">{card.title}</h2>
                                <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Modal */}
                    {showModal && selectedCard && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
                            <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg animate-fade-in">
                                <h2 className="text-2xl font-bold text-green-600">{selectedCard.title}</h2>
                                <div className="mt-4 text-gray-700">{selectedCard.details}</div>

                                <button
                                    className="mt-6 w-full px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700"
                                    onClick={() => navigate(selectedCard.link)}
                                >
                                    🚀 Try Now
                                </button>

                                <button
                                    className="mt-3 w-full px-4 py-2 rounded bg-gray-300 text-black font-semibold hover:bg-gray-400"
                                    onClick={closeModal}
                                >
                                    ❌ Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default CropRecommendationCard;
