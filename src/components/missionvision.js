import React from 'react';
import './missionvision.css';

const MissionVision = () => {
  return (
    <div className="container">
      <div className="mission-vision-section">
        <span className="section-title">OUR MISSION</span>
        <span className="right-title">OUR VISION</span>
        <div className="mission-vision-content">
          <p>
            Our mission is to provide high-quality, personalized education that inspires students to excel academically and personally. We believe that every student has unique potential, and we strive to unlock it with the right guidance, resources, and motivation.
          </p>
          <p className="vision-text">
            We envision a future where every student feels confident, capable, and prepared to achieve their dreams. At Learn-N-Fly Coaching Academy, we are committed to making this vision a reality, one student at a time. Join us at Learn-N-Fly, and together, let’s soar toward success!
          </p>
        </div>
      </div>

      <div className="why-choose-section">
        <div className="why-choose-title">WHY CHOOSE US?</div>
        <ul className="why-choose-list">
          <li>Experienced Educators: Our team comprises qualified and passionate mentors who bring years of teaching expertise.</li>
          <li>Interactive Online Classes: We utilize modern technology to create engaging and interactive learning experiences.</li>
          <li>Comprehensive Curriculum: Our programs are tailored to meet the needs of students across various grades and exams.</li>
          <li>Personalized Attention: Small class sizes and focused mentoring ensure every student gets the support they need.</li>
          <li>Holistic Approach: Beyond academics, we instill values, confidence, and a problem-solving mindset.</li>
          <li>Budget-Friendly: High-quality education that is accessible and economical for every learner.</li>
        </ul>
      </div>
    </div>
  );
};

export default MissionVision;
