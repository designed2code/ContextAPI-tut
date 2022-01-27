import ComponentA from "./components/ComponentA";
import MyCounter from "./components/MyCounter";
import CounterContextProvider from "./contexts/CounterContext";


export default function App() {
  return (
    <CounterContextProvider>
    <div className="App" style={{textAlign:'center'}}>
      <h1>Context API</h1>
      <MyCounter />
      <ComponentA/>
    </div>
    </CounterContextProvider>
  );
}
