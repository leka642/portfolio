import React, { useState } from 'react';
import uniqid from 'uniqid';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from 'react-icons/fa';
import {  SiFigma } from 'react-icons/si';


const Skills = () => {
  const skillsData = [
    { name: 'HTML', logo: FaHtml5, color: '#E34F26' },
    { name: 'CSS', logo: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', logo: FaJsSquare, color: '#F7DF1E' },
    
    { name: 'React', logo: FaReact, color: '#61DAFB' },
    
    { name: 'Git', logo: FaGitAlt, color: '#F05032' },
    
    { name: 'Figma', logo: SiFigma, color: '#F24E1E' },
  ];

  if (!skillsData.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skillsData.map((skill) => (
          <li
            key={uniqid()}
            className="skills__list-item skills__logo-item"
          >
            <skill.logo
              className="skills__logo"
              style={{
                fontSize: '3em',
                marginBottom: '0.3em',
                color: 'var(--clr-fg)',
                transition: 'color 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = skill.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--clr-fg)';
              }}
            />
            <span className="skills__logo-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;