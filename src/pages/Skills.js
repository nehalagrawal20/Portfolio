import React from 'react'
import Title from '../components/Title'
import SkillsSection from '../components/SkillSection'

function Skills() {
  return (
    <div className="SkillsPage">
      <Title title={'Skills'} span={'Skills'} />
      <div className="skillsContainer">
       <SkillsSection skill={'HTML'}  progress={'60%'} width={'60%'} />
       <SkillsSection skill={'CSS'} progress={'30%'} width={'30%'} />
       <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
       <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
       <SkillsSection skill={'React Js'} progress={'90%'} width={'90%'} />
       <SkillsSection skill={'Express Js'} progress={'40%'} width={'40%'} />
       <SkillsSection skill={'MongoDB'} progress={'80%'} width={'80%'} />
       <SkillsSection skill={'CPP'} progress={'25%'} width={'25%'} />
       <SkillsSection skill={'Python'} progress={'76%'} width={'76%'} />
       </div>
    </div>
  )
}

export default Skills;
