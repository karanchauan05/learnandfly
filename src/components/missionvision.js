import React from "react";
import "./missionvision.css"; // Import the CSS file

const MissionVision = () => {
  return (
    <div>
      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>OUR MISSION</h2>
          <p>
            Our mission is to provide high-quality, personalized education that
            inspires students to excel academically and personally. We believe
            that every student has unique potential, and we strive to unlock it
            with the right guidance, resources, and motivation.
          </p>
        </div>
        <div className="vision">
          <h2>OUR VISION</h2>
          <p>
            We envision a future where every student feels confident, capable,
            and prepared to achieve their dreams. At Learn-N-Fly Coaching
            Academy, we are committed to making this vision a reality, one
            student at a time. Join us at Learn-N-Fly, and together, let’s soar
            toward success!
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>WHY CHOOSE US?</h2>
        <ul>
          <li>
            <strong>Experienced Educators:</strong> Our team comprises
            qualified and passionate mentors who bring years of teaching
            expertise.
          </li>
          <li>
            <strong>Interactive Online Classes:</strong> We utilize modern
            technology to create engaging and interactive learning experiences.
          </li>
          <li>
            <strong>Comprehensive Curriculum:</strong> Our programs are
            tailored to meet the needs of students across various grades and
            exams.
          </li>
          <li>
            <strong>Personalized Attention:</strong> Small class sizes and
            focused mentoring ensure every student gets the support they need.
          </li>
          <li>
            <strong>Holistic Approach:</strong> Beyond academics, we instill
            values, confidence, and a problem-solving mindset.
          </li>
          <li>
            <strong>Budget-Friendly:</strong> High-quality education that is
            accessible and economical for every learner.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MissionVision;
