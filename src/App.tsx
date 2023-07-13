import { FormEvent, useState } from 'react';
import './App.css';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [name, setName] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [age, setAge] = useState<number>(0);

  function handleSubmit(event: FormEvent){
    event.preventDefault()
    
    if(nameInput === '' && yearInput === '' ){
      alert('Preencha todos os campos')
    }

    let currentYear = new Date().getFullYear();
    let calculatedAge = currentYear - parseInt(yearInput);
    setName(nameInput);
    setAge(calculatedAge)
    setNameInput('');
    setYearInput('');
  }

  return (
    <>
      <div className='container'>
        <h2 className='title'>Descubra sua idade</h2>

        <form className='form' onSubmit={handleSubmit}>
          <label className='title-input'>Digite seu nome?</label>
          <input 
            className='input' 
            type="text" 
            placeholder='Digite seu nome...' 
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />

          <label className='title-input'>Digite o ano que nasceu?</label>
          <input 
            className='input' 
            type="number" 
            placeholder='Digite o ano do nascimento...' 
            value={yearInput}
            onChange={(e) => setYearInput(e.target.value)}
          />

          <input className='button' type="submit" value="Descobrir idade" />
        </form>

        {name && age && <h3>{name} você tem: {age} anos</h3>}

      </div>


    </>
  )
}

export default App
