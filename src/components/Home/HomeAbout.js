import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar3.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const HomeAbout = () => {
  const [copyMessage, setCopyMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleCopyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopyMessage(message);
        setIsVisible(true);
      })
      .catch(() => {
        setCopyMessage("Failed to copy.");
        setIsVisible(true);
      });
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
        </Row>
        <Row>
          <Col md={8} className="home-about-description pt-0">
            <p className="home-about-body">
              I am currently pursuing a Master's degree in <b className="purple">Artificial Intelligence</b> and <b className="purple">Data Science</b> at the Faculty of Science and Technology in Tangier. Passionate about new technologies and data engineering, I am a curious and enthusiastic individual eager to contribute to innovative projects and shape the solutions of tomorrow. Through my academic journey and the diverse experiences I have undertaken, I have developed both technical expertise and strong interpersonal skills, making me a valuable asset to any future team...
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex align-items-center pt-0">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HoussamZn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/houssam-zitan-757256301/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <button
                  onClick={() => handleCopyToClipboard("HoussamZitan2003@gmail.com", "Email copied to clipboard!")}
                  className="icon-colour home-social-icons"
                  style={{ background: "transparent", border: "none" }}
                >
                  <MdEmail />
                </button>
              </li>

              <li className="social-icons">
                <button
                  onClick={() => handleCopyToClipboard("+21263529159", "Phone number copied to clipboard!")}
                  className="icon-colour home-social-icons"
                  style={{ background: "transparent", border: "none" }}
                >
                  <FaPhoneAlt />
                </button>
              </li>
            </ul>

            <div style={{ height: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {isVisible && <p className="copy-message" style={{ height: "20px", margin: 0 }}>{copyMessage}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeAbout;
