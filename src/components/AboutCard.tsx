import React from 'react';

// Define the props type
interface HeaderProps {
  title: string;
  subtitle?: string; // Optional prop
}

// Functional Component with Props
const AboutCard: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="about-container">
      <header className="about-card">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </header>
    </div>
  );
};

export default AboutCard;
