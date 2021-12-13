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
      // setTimeout(function () {
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
      // }, 2000);

    }, [value]
  )
  // const word = value;
  // const [word, setWord] = useState(value);
  const [dataWord, setDataWord] = useState([]);

  // console.log(dataWord)


  // console.log("Props in App :", value);
  return (
    <>
      <div className="App">
        <Input value={value} onChange={handleChange} />
        {/* <Translator value={value}/> */}
        <Result Data={dataWord} />

      </div>
      <footer><p> &lt;/&gt; by: <a href="https://mohamadhossein.ir/">MohamadHossein.ir</a> </p><p><a rel="noreferrer" target="_blank" href="https://github.com/M-Hosseini80/english-dictionary">github / Terms of Use</a></p></footer>
    </>
  );
}

export default App;
