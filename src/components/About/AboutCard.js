import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am a passionate and driven Master's student in Artificial Intelligence and Data Science, with a strong background in software development, data analysis, and machine learning. My expertise includes designing and implementing scalable applications, developing dynamic web platforms, and building data-driven solutions. I have hands-on experience with full-stack development, database management, and data processing pipelines, with a focus on optimizing performance and delivering robust solutions.
          </p>
          <footer className="blockquote-footer">Houssam Zitan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
