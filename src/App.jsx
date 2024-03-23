import PropTypes from 'prop-types';
import { useState } from 'react'
import './App.css'
import Responsnev from './Responsnav/Responsnev'
import PriceOption from './component/PriceOption/PriceOption';
import LineChart from './component/LineChart/LineChart';
import PhonenBroken from './component/PhoneBroken/PhonenBroken';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Responsnev></Responsnev>
      <h1 className='text-2xl'>App-Restor</h1>
      
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <PhonenBroken></PhonenBroken>

    </>
  )
}

App.PropTypes ={
  route: PropTypes.object
}
export default App
