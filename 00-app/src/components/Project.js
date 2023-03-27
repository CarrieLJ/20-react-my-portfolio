import React from 'react';
import '../styles/Project.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'a7c957',
  },
};

function Project() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Portfolio of Carrie Jensen</h2>
      <p>
        Enter text here
      </p>
      <p>
        Enter text here
      </p>
      <p>
        Enter text here
      </p>
    </section>
  );
}

export default Project;