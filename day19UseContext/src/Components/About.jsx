import React, { useContext } from 'react';
import { BioContext } from './BioProvider';

function About() {
  const { myName, myAge } = useContext(BioContext);

  return (
    <div>
      <h1>My name is {myName} and my age is {myAge}</h1>
    </div>
  );
}

export default About;
