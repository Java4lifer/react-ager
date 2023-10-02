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

    const cDate = new Date()
    if(secDate == null) {
      console.log("Date null")
      return
    }

    const passedMonth = secDate.getMonth() >= cDate.getMonth()
    const passedDay = secDate.getDate() >= cDate.getDate()
    if(passedMonth == true && passedDay == true) {
      const year = cDate.getFullYear() - secDate.getFullYear()
      setAge(year)
      return
    }

    const year = cDate.getFullYear() - secDate.getFullYear() - 1
    setAge(year)
  }

  return (
    <>
      <div className='container'>
        <img src={Logo} className='logo'/>

        <h1 className='title'>Whateth be thy age?</h1>

        <form className='calculator'>
        <div className='input'>
          <label>Name:</label>
          <input name='name' required={true} value={nom} onChange={input => setNom(input.target.value)}/>
          <label>Birth:</label>
          <DatePicker selected={secDate} onChange={date => setDate(date)} dateFormat="dd/MM/yyyy"/>
        </div>
        
        <button className='calcthing' onClick={() => calcage}>Calcular idade</button>
        </form>

        {age !== 0 && <div className='numbercont'><p className='output'>You are {nom} and you are {age} years old.</p></div>}
      </div>
    </>
  )
}

export default App
