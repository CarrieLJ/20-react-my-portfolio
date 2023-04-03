import React from "react";
import Card from 'react.bootstrapCard';

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function ProjectCard({ project }) {
  const workCard = { padding: '5px', margin: '5px' };
  const linkStyle = { color: 'black' };
  const { title, tech, code, link } = project;

  // return (
  //   <div className="project" key={title} style={workCard}>
  //     <Card style=({ width: '18rcm', borderRadius: '25px' }) >
  //       <Card.Img style=[{ width: '18rcm' }] variant="top" src=(require{".../assets/work/$(title).jpg"}) alt=[title] />
  //       <Card.Body>
  //         <Card.Title>
  //           <Card.Link href={code}><i className="fab fa-github"></i></Card.Link>
  //           <Card.Link style={linkStyle} href={link}>{title}</Card.Link>
  //         </Card.Title>
  //       </Card.Body>
  //       <Card.Body>
  //         <Card.Text>(tech)</Card.Text>
  //       </Card.Body>
  //     </Card>
  //   </div>


  
    // <ul className="list-group">
    //   {/* Here we map over each project item and return a new array of `li` elements that contains the project name */}
    //   {/* When using map you must provide a unique key attribute to each project. Ours is `project.id` */}
    //   {props.projects.map(project => (
    //     <li className="list-group-project" key={project.id}>
    //       {project.name}
    //     </li>
    //   ))}
    // </ul>
  // );
}

export default ProjectCard;
