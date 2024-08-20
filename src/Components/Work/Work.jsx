import React from 'react'
import './Work.css'
 import theme_pattern from '../../assets/theme_pattern.svg'
 import mywork_data from '../../assets/mywork_data'

const Work = () => {
  return (
    <div id='work' className='MyWork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="work-container">
            {
                mywork_data.map((work, idx)=>
                ( 
                    <img src={work.w_img} alt="" />  
                
                )
            )
            }
        </div>
    </div>
  )
}

export default Work