import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom';


function About() {
  return (

    <div className="AboutPage">
      <Title title={'About'} span={'About'} />
      <header className="nehal">
        <h1 className="nehal-about">
          I am
            <span> Nehal Agrawal.</span>
        </h1>
        <p className="nehal-sub-about">
          Lorem ipsum dolor sit amet. Vel reprehenderit consequatur non harum numquam qui nihil officia et fugit possimus ex mollitia modi et praesentium deserunt vel quae dolorem. Aut incidunt saepe rem similique minima eos saepe aspernatur ut nisi error ut praesentium perspiciatis est quia deserunt? Eos excepturi incidunt aut officiis velit aut nemo galisum ex dignissimos impedit et eveniet illo et aspernatur earum aut dicta exercitationem.
          </p>

        <button className="btn" onClick={(e)=>{
          e.preventDefault();
          window.location.href='https://drive.google.com/file/d/1ueptqy7gn3bjYwlXwRmqUxqosSUk9bFz/view?usp=sharing';
        }}>Resume</button>

      </header>
    </div>
  )
}

export default About
