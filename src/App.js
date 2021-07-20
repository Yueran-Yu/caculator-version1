import React, {useState} from 'react';
import './App.css'

const App = () => {
  const [result, setResult] = useState('')
  const handleClick = (e) => {
    const text = e.target.textContent

    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '+':
      case '-':
      case '*':
      case '/':
        setResult(result.concat(e.target.textContent))
        break;
      case 'Clear':
        setResult('')
        break;
      case 'C':
        setResult(result.slice(0, result.length - 1))
        break;
      case '=':
        try {
          setResult(eval(result).toString())
        } catch (err) {
          setResult('Error')
        }
        break;
      default:
        console.log(text)
        break;
    }
  }

  return (
    <div className='container'>

      <form>
        <input type='text' value={result}/>
      </form>
      <div className="keypad " onClick={handleClick}>
        <button className='clear highlight'>Clear</button>
        <button className='backspace highlight '>C</button>
        <button className='highlight'>&divide;</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='highlight'>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className='highlight'>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className='highlight'>+</button>
        <button>0</button>
        <button className='highlight'>.</button>
        <button className='equal highlight'>=</button>
      </div>
    </div>
  );
};

export default App;
