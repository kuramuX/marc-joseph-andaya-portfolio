import React, { useState } from "react";
import RedeemARThumb from "./images/portfolio/RedeemAR.png";
import SavingStrayThumb from "./images/portfolio/Stray.png";
import KathaXIVThumb from "./images/portfolio/Katha Cover.jpg";
import KathaPDF from "./portfolio/KATHA XIV.pdf";
import PayasoThumb from "./images/portfolio/Payaso Cover.png";
import PayasoPDF from "./portfolio/Payaso.pdf";
import Dalumat2Thumb from "./images/portfolio/Dalumat 2.png";
import Dalumat2PDF from "./portfolio/Dalumat 2.pdf";
import TheSpringThumb from "./images/portfolio/The Spring.png";
import TheSpringPDF from "./portfolio/Newsletter The Spring.pdf";

import BTShirtThumb from "./portfolio/BT Poloshirt Maroon.jpg";
import BTLanyardThumb from "./portfolio/BT Lanyard.jpg";
import Gear5Thumb from "./portfolio/Gear 5.jpg";

function Portfolio() {
  const portfolioData = {
    Programming: [
      {
        title: "RedeemAR: A Bible Learning Application through Augmented and Virtual Reality",
        description: "RedeemAR is a capstone project my team developed to make Bible learning more engaging through Augmented Reality (AR) and Virtual Reality (VR). The app turns lessons into interactive, multi-sensory experiences that are easier to understand and more enjoyable, especially for younger audiences. It was built using the RUP methodology and received great feedback for its usability and effectiveness in teaching biblical lessons.",
        image: RedeemARThumb,
        link: "https://github.com/kuramuX/RedeemAR",
      },
      {
        title: "Saving Stray",
        description: "Saving Stray is a database management system designed for a stray-saving establishment. It allows users to record and manage detailed information about rescued animals, including their photos, rescuers, caretakers, and assigned doctors. The system also monitors each stray’s health status, tracks their readiness for adoption, and makes their current status visible to potential adopters. This project was built to streamline animal care management and support the adoption process.",
        image: SavingStrayThumb,
        link: "https://github.com/kuramuX/SavingStray", 
      },
    ],
    "Graphic Design": [
      {
        title: "Payaso",
        description: "Payaso is a 2024 magazine published by Breakthrough Publication of Camarines Norte State College. It features discussions on the Philippine government, the student government, and campus events. As the head of the layout team, I led the design and page organization, ensuring the magazine delivered its message with a professional and engaging visual style.",
        image: PayasoThumb,
        link: PayasoPDF,
      },
      {
        title: "Dalumat 2",
        description: "Dalumat 2 is a newsletter project created by a group of Education students. They tasked me with designing the entire publication, where I handled the layout and visual presentation to ensure the content was clear, organized, and visually appealing.",
        image: Dalumat2Thumb,
        link: Dalumat2PDF,
      },
      {
        title: "The Spring Tabloid",
        description: "The Spring Tabloid is a newsletter publication from Tulay na Lupa National High School. I was hired to design the project and also trained the staff in basic layout fundamentals, as well as how to use Adobe InDesign and Photoshop for future publications.",
        image: TheSpringThumb,
        link: TheSpringPDF,
      },
      {
        title: "Katha XIV",
        description: "Katha XIV is the 2023 literary folio published by Breakthrough Publication of Camarines Norte State College. As the layout artist, I designed and arranged the pages of the folio, ensuring a clean and creative presentation that showcased the students’ literary and artistic works effectively.",
        image: KathaXIVThumb,
        link: KathaPDF,
      },
    ],
    "Poloshirt / Lanyard": [
      {
        title: "Breakthrough Uniform",
        description: "I designed two polo shirts and one sublimation t-shirt as official uniforms for Breakthrough Publication. The designs balanced professionalism and creativity, representing the organization’s identity while being practical for everyday use.",
        image: BTShirtThumb,
        link: "https://www.behance.net/gallery/233177023/Breakthrough-Poloshirt-Design-and-Sublimation-T-shirt",
      },
      {
        title: "Breakthrough Lanyard",
        description: "I created a custom lanyard design for Breakthrough Publication, combining functionality with a clean visual style that reflected the organization’s branding and identity.",
        image: BTLanyardThumb,
        link: "https://www.behance.net/gallery/189881613/Breakthrough-Lanyard",
      },
      {
        title: "Gear 5 T-Shirt",
        description: "I created a custom t-shirt design of Monkey D. Luffy in Gear 5 for DTF (Direct-to-Film) printing. The design captures the dynamic style of the character while being optimized for print quality and wearability.",
        image: Gear5Thumb,
        link: "https://www.behance.net/gallery/177747931/GEAR-5TH-T-SHIRT-DESIGN",
      },
    ],
  };

  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <div className="Portfolio p-6">
      <div className="categories flex flex-col gap-8">
        {Object.entries(portfolioData).map(([category, items]) => (
          <div key={category} className="category bg-neutral-900 p-4 rounded-xl">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">
              {category}
            </h3>
            <ul className="portfolio-list space-y-3">
              {items.map((item, index) => {
                const key = `${category}-${index}`;
                const isOpen = openItem === key;
                return (
                  <li key={index} className="portfolio-item">
                    <button
                      className="item-button w-full flex justify-between items-center text-blue-400 font-medium hover:text-blue-300 transition"
                      onClick={() => handleToggle(category, index)}
                    >
                      <span>{item.title}</span>
                      {isOpen ? "-" : "+"}
                    </button>
                    {isOpen && (
                      <>
                      <div className="item-details mt-3 p-3 bg-blue-900/30 rounded-lg text-gray-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full max-w-sm rounded-lg mb-3"
                        />
                        <p className="mb-3">{item.description}</p>
                      </div>
                      <div className="button">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
                        >
                          View Project
                        </a>
                      </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
