import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FutureVision from "../../Assets/Projects/FutureVision.jpg";
import Spark from "../../Assets/Projects/SPARKpng.png";
import FuzzyCBR from "../../Assets/Projects/FuzzyCBR.jpg";
import Card from "../../Assets/Projects/CARDS.png";
import Facial from "../../Assets/Projects/Facial.png";
import FSTlink from "../../Assets/Projects/FSTlink.jpg";
import Calender from "../../Assets/Projects/Calender.png";
import EFSA from "../../Assets/Projects/EFSA.png";
import Audit from "../../Assets/Projects/Audit.png";
import Fintech from "../../Assets/Projects/Fintech.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fintech}
              title="Fintech Platform"
              description="Financial platform composed of containerized microservices (Docker, Kubernetes) for managing accounts, users, banking transactions, and blockchain services. Integration of a real-time notification system via Kafka and a JWT authentication module. Frontend developed with React + Web3.js, enabling interaction with a MetaMask wallet and the Sepolia blockchain network. Automated deployment using Jenkins (CI/CD) and GitHub."
              ghLink="https://github.com/HoussamZn/FinTech"
              techs="Microservices - FastAPI - Docker - Kubernetes - blockchain - Kafka - Authentification JWT - React - Web3.js - MetaMask - Jenkins (CI/CD) & GitHub webhooks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Facial}
              title="Facial expression detection"
              description="Design of a CNN model for automatic emotion recognition from facial images, with data preprocessing including grayscale conversion, resizing, and normalization. The model is evaluated using classification metrics and implemented with TensorFlow/Keras. Deployed in an interactive Streamlit application enabling real-time emotion detection from webcam input, as well as analysis of uploaded images or videos."
              ghLink="https://github.com/HoussamZn/Facial-Emotion-Recognition"
              techs="Deep Learning (CNN) - TensorFlow/Keras - OpenCV - Image Preprocessing - Streamlit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spark}
              title="Real-Time customer review analysis"
              description="This project aims to implement a real-time sentiment analysis system for Amazon reviews. The architecture uses Kafka for data ingestion, Spark Streaming for processing, and MongoDB for storage. The results demonstrate effective classification of reviews, which can be visualized through an interactive dashboard."
              ghLink="https://github.com/HoussamZn/Reviews-Analysis/tree/last"
              techs="Kafka - Spark MLIB - MongoDB - Docker - preprocessing NLP (lemmatization - vectorization TF-IDF) - Machine Learning - React - FastAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FutureVision}
              title="Future Vision"
              description="Data Management and Processing Application : Design and development of a web application for importing, managing, and processing data (CSV, Excel, JSON…) and applying Machine Learning models using the Streamlit framework (Python)."
              ghLink="https://github.com/HoussamZn/future-vision"
              prvLink='https://future1vision.streamlit.app/'
              techs="Machine Learning - StreamLit (Python) - Scikit-learn - Pandas - Numpy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FuzzyCBR}
              title="Performance evaluation of fuzzy clustered CBR"
              description="Fuzzy Clustered Case-Based Reasoning System: Development of a machine learning framework that enhances traditional Case-Based Reasoning (CBR) using fuzzy clustering. The system partitions a case base into overlapping fuzzy clusters to improve knowledge retrieval, reduce computational costs, and enhance decision-making accuracy."
              ghLink="https://github.com/HoussamZn/fuzzy-cbr"
              techs="Machine learning Framework - Case-Based Reasoning (CBR) - Fuzzy C-means - Computational Cost Optimization"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EFSA}
              title="Parkinson’s Disease Prediction with Machine Learning"
              description="This project uses vocal features and an Ensemble Feature Selection Algorithm (EFSA) to enhance Parkinson’s disease classification. Optimized models (Logistic Regression, Random Forest, LightGBM) are combined in a majority-vote ensemble, improving accuracy and robustness for early diagnosis, particularly in telemedicine."
              ghLink="https://github.com/HoussamZn/machine-learning-parkinsons-disease-prediction"
              techs = "Machine learning (Logistic Regression - Random Forest - LightGBM) - SMOTE (Synthetic Minority Oversampling Technique) - PCA (Principal Component Analysis) - Numpy - Pandas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Card}
              title="Moroccan card game"
              description="Design and development of a Moroccan card game in C++ using the Qt Framework."
              ghLink="https://github.com/HoussamZn/Ronda-Game"
              techs="Qt Creator - C++"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FSTlink}
              title="FSTLink"
              description="Dynamic Web Platform - Professional Network : Design and development of a dynamic website as part of professional network platforms using the Django framework (HTML, CSS, JavaScript, Python) and the SQLite database management system."
              ghLink="https://github.com/HoussamZn/fstlink"
              techs="Django - Python - SQLite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calender}
              title="Personal Agenda"
              description="Personal Agenda Management App : Design and development of a mobile application for managing academic tasks using the Flutter framework (Dart) and the SQLite database management system."
              ghLink="https://github.com/HoussamZN/"
              techs="Flatter - Dart - SQLite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Audit}
              title="Enterprise Resource Audit and Management System"
              description="Development of a full-stack web application for managing physical, legal, and organizational structures within enterprises. The system integrates an AI-driven interface that interacts with users to assess business needs and provide tailored recommendations. Built using the MEAN stack (MongoDB, Express.js, Angular, Node.js), the platform automates resource audits, optimizes governance, and enhances decision-making."
              techs="MEAN Stack (MongoDB - Express - Angular - Node)"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
