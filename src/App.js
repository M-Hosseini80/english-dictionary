import './App.css';
import Translator from './components/Translator'
import Input from './components/Input';
import React,{useState} from 'react';
function App() {
  const [value, setValue] = useState(" ");
  const handleChange = (newValue)=>{
    setValue(newValue)
  }

  // console.log("Props in App :", value);
  return (
    <div className="App">
      <Input value={value} onChange={handleChange}/>
      <Translator value={value}/>
    </div>
  );
}

export default App;
