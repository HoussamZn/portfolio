import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.25rem"}}>
          {props.title}
        </Card.Title>

        {props.techs && (
          <>
            <hr />
            <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
              <strong>Technologies :</strong> {props.techs}
            </p>
          </>
        )}

        <hr />
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>

        

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        )}
        &nbsp;&nbsp;
        {props.prvLink && (
          <Button variant="primary" href={props.prvLink} target="_blank">
            <FaEye /> &nbsp;
            Preview
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
