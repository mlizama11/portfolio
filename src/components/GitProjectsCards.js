import React from 'react';

const GitProjects = ({ data }) => {

  return (
    <>
      {data.map((info, i) => (
        <div class="Card" key={i}>
          <img src={info.image} class="Card-Image" alt="Project" />
          <div class="Card-Body">
            <h3 className="Card-Title ">{info.title}</h3>
            <p className="Card-Description">{info.description}</p>
            <div className="Buttons-Container">
              <a className="Btn Btn-Black" href={info.demo} target="_blank" rel="noreferrer">DEMO</a>
              <a className="Btn Btn-Grey" href={info.code} target="_blank" rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}

export default GitProjects;