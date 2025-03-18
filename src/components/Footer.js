import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn,FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";




function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          
          <h3><MdEmail style={{ marginRight: "8px" }}/>HoussamZitan2003@gmail.com</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3><FaPhoneAlt style={{ marginRight: "8px" }}/>+212663529159</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/HoussamZn"
                style={{ color: "white",fontSize: "1.4rem" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/houssam-zitan-757256301/"
                style={{ color: "white" ,fontSize: "1.4rem" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
