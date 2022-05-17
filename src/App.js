import React, { useState } from 'react';
import { useRef } from 'react';

import './App.css';

import Result from './components/Result';
import DataSliders from './components/DataSliders';
import CalcButtons from './components/CalculateButtons';
import ErrorUI from './components/ErrorUI';

const dummy_data = {
  weight: 100,
  height: 100
}

function App() {
  var [calculated_result, setCalculatedResult] = useState(5)
  var [personal_data, setNewPersonalData] = useState(dummy_data)

  const UpdatePersonalData = (new_data) => {
    setNewPersonalData(new_data)
  }

  const childCompRef = useRef()

  const UpdateKMI = (new_kmi) => {
    setCalculatedResult(new_kmi)
    console.log(new_kmi)
    console.log(calculated_result)
    childCompRef.current.showAlert()
  }

  return (
    <div className="App">
      <div class="inputs">
        <DataSliders onUpdateValues={UpdatePersonalData} />
        <CalcButtons data={personal_data} onCalculateKmi={UpdateKMI}/>
      </div>
      <Result kmi={calculated_result} ref={childCompRef}/>
      <ErrorUI/>
    </div>
  );
}

export default App;
