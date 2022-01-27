import {useContext} from 'react'
import {CounterContext} from '../contexts/CounterContext'
import ComponentB from './ComponentB'
const ComponentA = () => {
  const {count} = useContext(CounterContext)
  return(
    <>
    <p style={{backgroundColor:'wheat'}}>Count : {count}</p>
    <ComponentB/>
    </>
  )
}
export default ComponentA