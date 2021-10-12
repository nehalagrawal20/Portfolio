import React from 'react'
import Title from '../components/Title'


function Experience() {
  return (
    <div>
      <Title title={'Experience'} span={'Experience'} />
      <div class="timeline">
        <ul>
          <li>
            <div class="right_content">
              <h2>The Sparks Foundation</h2>
              <p>•Build a Basic Banking Website
              • User can transfers online from one account to another with some dummy data in the
              database(MongoDB).
        </p>
            </div>
            <div class="left_content">
              <h3>Aug21-Sept21</h3>
            </div>
          </li>

          {/* <li>
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
          </li> */}

        </ul>
      </div>
    </div>
  )
}

export default Experience
