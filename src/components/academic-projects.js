import React from "react";
import project1PDF from "../assets/pdf/Prototype Bluetooth-Powered Physical Distancing Regulator Alarm.pdf";
import project2PDF from "../assets/pdf/Groundwater Private Resort Booking System.pdf";
import project3PDF from "../assets/pdf/RedeemAR.pdf";

import project1Thumb from "./images/thumbnail-acadproj1.jpg";
import project2Thumb from "./images/thumbnail-acadproj2.jpg";
import project3Thumb from "./images/thumbnail-acadproj3.jpg";
import project4Thumb from "./images/thumbnail-acadproj4.jpg";

import './acadproj.css';

function AcademicProjects() {
    const project4PDF = "https://www.facebook.com/cnscitsofficial/posts/pfbid02dt3ndyCLB6yTzxEsRxeTpfM9mkybasBJqDmy3nCXr4vgMiEwZn4j49KZz5jw7KkQl";

  const projects = [
    {
      title: "Prototype Bluetooth-Powered Physical Distancing Regulator Alarm",
      year: "2021",
      school: "Camarines Norte State College",
      thumbnail: project1Thumb,
      pdf: project1PDF,
    },
    {
      title: "Groundwater Private Resort Booking System",
      year: "2022",
      school: "Camarines Norte State College",
      thumbnail: project2Thumb,
      pdf: project2PDF,
    },
    {
      title: "RedeemAR: A Bible Learning Application Through Augmented and Virtual Reality",
      year: "2023",
      school: "Camarines Norte State College",
      thumbnail: project3Thumb,
      pdf: project3PDF,
    },
    {
      title: "CNSC Main Campus 3D Simulation",
      year: "2023",
      school: "Camarines Norte State College",
      thumbnail: project4Thumb,
      pdf: project4PDF,
    },
  ];

  return (
    <div className="academic-projects">
        <div className="project-grid">
            {projects.map((proj, index) => (
                <div className="project-card" key={index}>
                <a href={proj.pdf} target="_blank" rel="noopener noreferrer">
                    <img
                    src={proj.thumbnail}
                    alt={proj.title}
                    className="clickable-thumbnail"
                    />
                </a>
                <h3>{proj.title}</h3>
                <p className="year">{proj.year}</p>
                <p className="school">{proj.school}</p>
                </div>
            ))}
            </div>
    </div>
  );
}

export default AcademicProjects;