import React from 'react';
import GitProjectsCards from "../components/GitProjectsCards";
import IndependentProjectsCards from "../components/IndependentProjectsCards";
import { gitData, independentData } from '../data/data';


const Projects = () => {

  return (
    <section className="Projects">
      <div className="Projects-Container">
        <GitProjectsCards data={gitData} />
        <IndependentProjectsCards data={independentData} />
      </div>
    </section>
  );
};

export default Projects;