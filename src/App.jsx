
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ReducerCounter from './components/ReducureCounter'
import { add } from './features/counter/counterSlice'
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
// import Counters from './components/Counters'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  

  console.log(counter, 'this si redux counter')

  const {count, countDispatch} = useContext(ThemeContext)
  console.log(count,'new')


  return (
    <>
      <h1>counter is: {counter.count}</h1>
      <h1>counter is: {count}</h1>
      <button onClick={()=> countDispatch({payload:5})}>click 5</button>
      <button onClick={()=> dispatch(add(1))}>add</button>
      <ReducerCounter />
    </>
  )
}

export default App
