General Steps When Using the Context API
In the src folder create a new folder named contexts 
In the contexts folder create a file named CounterContext.js
Inside the CounterContext.js file follow these steps :-
1. `import {useState,useContext} from 'react'`
2. `export const CounterContext = createContext()`
3. 

   

     const CounterContextProvider = (props) => {
        return(
		    <CounterContext.Provider>
			    {props.children}
		    </CounterContext.Provider>
			  )
    export default CounterContextProvider

4. All the state variables you want to pass in sibling components define it here and create their handler functions
5.      const CounterContextProvider = (props) => {
        const [count,setCount] = useState(0)    
        const increaseCount = () => {
        setCount(count + 1)
        }
        const decreaseCount = () => {
        setCount(count - 1)
        }
        return (
        <CounterContext.Provider>
        {props.children}
        </CounterContext.Provider>
        )
        export default ConterContextProvider
6. Pass the values through the value prop in the
 `<CounterContext.Provider value={}>{props.children}</CounterContext.Provider>`
 7. Create a variable and pass all the values in the value prop like
 

   ``` const CounterContextProvider = (props) => {
         const [count,setCount] = useState(0)    
         const increaseCount = () => {
         setCount(count + 1)
         }
         const decreaseCount = () => {
         setCount(count - 1)
         }
         const value = {count, increaseCount, decreaseCount}
         return (
         <CounterContext.Provider values = {value}>
         {props.children}
         </CounterContext.Provider>
         )
         export default ConterContextProvider