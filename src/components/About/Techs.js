import React from "react";
import { Col, Row } from "react-bootstrap";

import { 
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiFastapi,
  SiLaravel,
  SiPython,
  SiUml,
  SiQt,
  SiFlutter,
  SiSqlite,
  SiStreamlit,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiScikitlearn,
  SiDjango
} from "react-icons/si";

import { 
  DiMsqlServer ,
  DiJavascript1,
  DiJava,
  DiPhp,
  DiGit
} from "react-icons/di";

import {BiLogoSpringBoot} from "react-icons/bi";
import { CgCPlusPlus } from "react-icons/cg";
import { GrMysql } from "react-icons/gr";


const techStack = [
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: BiLogoSpringBoot, name: "Spring Boot" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiReact, name: "React" },
  { icon: SiDjango, name: "Django" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: DiMsqlServer, name: "SQL Server" },
  { icon: GrMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiSqlite, name: "SQLite" },
  { icon: SiPython, name: "Python" },
  { icon: CgCPlusPlus, name: "C++" },
  { icon: DiJava, name: "Java" },
  { icon: DiJavascript1, name: "JavaScript" },
  { icon: DiPhp, name: "PHP" },
  { icon: SiUml, name: "UML" },
  { icon: DiGit, name: "Git" },
  { icon: SiQt, name: "Qt" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiStreamlit, name: "Streamlit" }
];


function Techs() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map(({ icon: Icon, name }, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon size={50} />
          <p style={{ fontSize: "0.4em", marginTop: "5px", textAlign: "center" , fontFamily:"Press Start 2P"}}>{name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techs;
