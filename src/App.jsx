import { useEffect, useRef, useState } from "react"
import { Button } from "./components/Button"
import {Input} from './components/Input'



function App() {
  const [value, setValue] = useState('');
  const [choosenValue, setChoosenValue] = useState([])
  const refResult = useRef(null)
  const fruitsList = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
 
  //  const handleCLick = (item) => {
  //   console.log(item)
  //  }


  refResult.current = fruitsList.filter(fruit => fruit.toLowerCase().includes(value.toLowerCase()))

  return (
    <>
    
    <div className="container">
      <div className="first">
      <p>Search:</p>
        <Input
          type="text"
          onChange={e => setValue(e.target.value)}
        />
        <div className="ulDiv">
          <ul>
            {refResult.current.map((res,i) =>
            <li 
            className = "pointerLi" 
              onClick = {() => setChoosenValue(prevValue => [...prevValue, res])}
              key = {i}> {res} </li>)}
          </ul>
        </div>
      </div>
      <div className="second"> {/* New section to display chosen values */}
          <p>Chosen Values:</p>
          <ul>
            {choosenValue.map((chosen, i) =>
              <li key={i}>{chosen}</li>
            )}
          </ul>
      </div>
    </div>
    </>
  )
}

export default App
