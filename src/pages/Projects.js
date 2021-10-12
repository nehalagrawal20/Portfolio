import React from 'react'
import Title from '../components/Title'
import AllProjects from '../components/AllProjects'

function Projects() {
  return (
    <div>
      <div className="p-title">
        <Title title={'Projects'} span={'Projects'} />
      </div>
      <div className="Projects">
        {
          AllProjects.map((project) => {
            return <div className="project" key={project.id}>
              <div className="project-content">
                <img src={project.image} alt="" />
                <a href={project.link} className="project-link">
                  {project.title}
                </a>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Projects
