import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function ProjectCard(props) {
  return (
    <ul className="list-group">
      {/* Here we map over each project item and return a new array of `li` elements that contains the project name */}
      {/* When using map you must provide a unique key attribute to each project. Ours is `project.id` */}
      {props.projects.map(project => (
        <li className="list-group-project" key={project.id}>
          {project.name}
        </li>
      ))}
    </ul>
  );
}

export default ProjectCard;
