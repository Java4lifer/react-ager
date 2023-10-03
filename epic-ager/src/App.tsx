import { useState } from 'react'
import './App.css'
import Logo from "./assets/ultradie.jpg"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {

  const [ nom, setNom ] = useState("")
  const [ age, setAge ] = useState(0)
  const [secDate, setDate] = useState<Date | null>(null)
  
  function calcage() {
    console.log("Hello")
    const cDate = new Date()
    if(secDate == null) {
      console.log("Date null")
      return
    }
    const sameMonth = secDate.getMonth() == cDate.getMonth()
    const passedMonth = secDate.getMonth() < cDate.getMonth()
    const passedDay = secDate.getDate() <= cDate.getDate()
    console.log(passedDay, passedMonth)
    
    if(passedMonth == true) {
      const year1 = cDate.getFullYear()
      const year2 = secDate.getFullYear()
      const year = year1 - year2
      console.log(year)
      setAge(year)
      return
    }

    if(sameMonth == true && passedDay == true) {
      const year1 = cDate.getFullYear()
      const year2 = secDate.getFullYear()
      const year = year1 - year2
      console.log(year)
      setAge(year)
      return
    }

    const year1 = cDate.getFullYear()
    const year2 = secDate.getFullYear()
    const year = year1 - year2 - 1
    console.log(year)
    setAge(year)
  }

  return (
    <>
      <div className='container'>
        <img src={Logo} className='logo'/>

        <h1 className='title'>Whateth be thy age?</h1>

        <div className='input'>
          <label htmlFor='name'>Name:</label>
          <input id='name' className='inyput' required={true} value={nom} onChange={input => setNom(input.target.value)}/>
          
          <label id='sec2' htmlFor='date'>Birth:</label>
          <DatePicker id="date" className='inyput' maxDate={new Date()} selected={secDate} onChange={date => setDate(date)} dateFormat="dd/MM/yyyy"/>
        </div>

        <button className='calcthing' onClick={() => calcage()}>Calcular idade</button>

        {age !== 0 && nom !== '' && <p className='output'>You are {nom} and you are {age} years old.</p>}
      </div>
    </>
  )
}

export default App
