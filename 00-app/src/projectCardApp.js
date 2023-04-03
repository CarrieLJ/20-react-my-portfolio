import React from "react";
import ProjectCard from "./components/pages/projectCard";


const projects = [
    {
      id: 1,
      name: "Project1",
    },
  ];
  
  function ProjectCard() {
    return <List projects={projects} />;
  }
  
  export default ProjectCard;
  
  