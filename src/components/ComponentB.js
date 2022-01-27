import {useContext} from 'react'
import {CounterContext} from '../contexts/CounterContext'
const ComponentB = () => {
  const {increaseCount} = useContext(CounterContext)
  return(
    <button onClick={increaseCount} style={{backgroundColor:'red'}}>Increase Count</button>
  )
}
export default ComponentB