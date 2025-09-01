import React from 'react'
import Header from './Header';
import Stepper from "./Stepper"
const stepsData = ['Profile', 'Contact', 'Employment', 'Financial', 'Preferences', 'Summary'];
const MainForm = () => {
    

  return (
    <div>
      <Header/>
      <Stepper currentStep={1} steps={stepsData}/>
    </div>
  )
}

export default MainForm
