import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostgresql, SiMongodb, SiReact, SiFastapi, SiLaravel, SiPython,
  SiUml, SiQt, SiFlutter, SiSqlite, SiStreamlit, SiNumpy, SiPandas,
  SiTensorflow, SiScikitlearn, SiDjango, SiDocker, SiKubernetes,
  SiGithub, SiFlask, SiApacheairflow
} from "react-icons/si";
import {
  DiMsqlServer, DiJavascript1, DiJava, DiPhp, DiGit
} from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { CgCPlusPlus } from "react-icons/cg";
import { GrMysql } from "react-icons/gr";
import { FaRaspberryPi } from "react-icons/fa";
import { GiProcessor,GiPsychicWaves } from "react-icons/gi";
import { TbBrandCpp } from "react-icons/tb";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { FaProjectDiagram } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineBarChart } from "react-icons/md";
import { SiApachekafka, SiApachehadoop, SiApachespark } from "react-icons/si";

const techCategories = [
  {
    title: "Machine Learning & Deep Learning",
    items: [
      { icon: SiScikitlearn, name: "Scikit-learn" },
      { icon: SiTensorflow, name: "TensorFlow" }
    ]
  },
  {
    title: "Data Analysis, Processing, and Visualization",
    items: [
      { icon: SiNumpy, name: "NumPy" },
      { icon: SiPandas, name: "Pandas" },
      { icon: PiMicrosoftPowerpointLogoFill, name: "Power BI" },
      { icon: FaProjectDiagram, name: "Talend" },
      { icon: BsBarChartLine, name: "Seaborn" },
      { icon: MdOutlineBarChart, name: "Matplotlib" }
    ]
  },
  {
    title: "Big Data & Databases",
    items: [
      { icon: SiApachespark, name: "Apache Spark" },
      { icon: SiApachekafka, name: "Kafka" },
      { icon: SiApachehadoop, name: "Hadoop" },
      { icon: GrMysql, name: "MySQL" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: DiMsqlServer, name: "SQL Server" },
      { icon: SiMongodb, name: "MongoDB" }
    ]
  },
  {
    title: "DevOps",
    items: [
      { icon: SiDocker, name: "Docker" },
      { icon: SiKubernetes, name: "Kubernetes" },
      { icon: DiGit, name: "CI/CD" },
      { icon: SiGithub, name: "GitHub" }
    ]
  },
  {
    title: "Programming Languages",
    items: [
      { icon: SiPython, name: "Python" },
      { icon: DiJava, name: "Java" },
      { icon: CgCPlusPlus, name: "C++" },
      { icon: TbBrandCpp, name: "C" }
    ]
  },
  {
    title: "Web Development",
    items: [
      { icon: SiReact, name: "React" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiDjango, name: "Django" },
      { icon: SiFlask, name: "Flask" },
      { icon: BiLogoSpringBoot, name: "Spring Boot" },
      { icon: SiLaravel, name: "Laravel" }
    ]
  },
  {
    title: "Internet of Things (IoT)",
    items: [
      { icon: GiProcessor, name: "Arduino" },
      { icon: FaRaspberryPi, name: "Raspberry Pi" },
      { icon: GiPsychicWaves, name: "MQTT" }
    ]
  }
];

function Techs() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      {techCategories.map((category, idx) => (
        <div key={idx} style={{ marginBottom: "40px" }}>
          <h4 style={{ fontFamily: "Press Start 2P", fontSize: "2em", marginBottom: "20px", textAlign: "center" }}>
            {category.title}
          </h4>
          <Row style={{ justifyContent: "center" }}>
            {category.items.map(({ icon: Icon, name }, index) => (
              <Col key={index} xs={4} md={2} className="tech-icons">
                <Icon size={50} />
                <p style={{
                  fontSize: "0.4em",
                  marginTop: "5px",
                  textAlign: "center",
                  fontFamily: "Press Start 2P"
                }}>{name}</p>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techs;
