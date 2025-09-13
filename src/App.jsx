
import './App.css'
import {Counter} from './components/Counter/Counter'
import { Weather } from './components/Weather/Weather'
import question from './components/db/questions.json'
import { ExpensiveCalculation } from './components/FilteredList/FilteredList'

import { Quiz } from './components/Quiz/quiz'

function App() {



  return (
    <>
      {/* <Counter/> */}

      {/* <Weather/> */}
      {/* <h2>
        {count}
      </h2>

      <button onClick={handle}></button> */}

      {/* <Quiz question={question} />   */}
      <Counter/>

      <ExpensiveCalculation/>
    </>
  )
}

export default App
