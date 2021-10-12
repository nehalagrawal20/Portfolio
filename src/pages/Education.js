import React from 'react'
import Title from '../components/Title'


function Education() {
  return (
    <div className="EducationPage">
      <Title title={'Education'} span={'Education'} />
      <div class="timeline">
        <ul>
          <li>
            <div class="right_content">
              <h2>IET DAVV</h2>
              <p>indore, Pursuing BE in Information Technology.
                 SGPA: 7.72
        </p>
            </div>
            <div class="left_content">
              <h3>2019-2023</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h2>Sarafa Vidya Niketan 12th</h2>
              <p>Indore, Hsc, PCM, Percentage:91.17%
        </p>
            </div>
            <div class="left_content">
              <h3>2017-2019 </h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h2>Sarafa Vidya Niketan 10th</h2>
              <p>Indore, Ssc, 10th, Percentage:87%
        </p>
            </div>
            <div class="left_content">
              <h3>2015-2017 </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Education




