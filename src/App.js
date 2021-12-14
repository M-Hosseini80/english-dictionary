import './App.css';
// import Translator from './components/Translator'
import Input from './components/Input';
import React, { useState, useEffect } from 'react';
import Result from './components/Result';
import axios from "axios"

function App() {
  var randomWords = require('random-words');
  const [value, setValue] = useState(randomWords());
  const handleChange = (newValue) => {
    setValue(newValue)
  }

  useEffect(
    () => {
      const dictionaryAPI = async () => {
        if (value > "") try {
          const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
          setDataWord(data.data)
        }
          catch (error) {
            console.log(error)
          }
      }
      window.scrollTo(0, 0)
      dictionaryAPI()
    }, [value]
  )
  const [dataWord, setDataWord] = useState([]);

  return (
    <>
      <div className="App">
        <Input value={value} onChange={handleChange} />
        <Result Data={dataWord} setValues={setValue} />

      </div>
      <footer><p> &lt;/&gt; by: <a href="https://mohamadhossein.ir/">MohamadHossein.ir</a> </p><p><a rel="noreferrer" target="_blank" href="https://github.com/M-Hosseini80/english-dictionary">github / Terms of Use</a></p></footer>
    </>
  );
}

export default App;
