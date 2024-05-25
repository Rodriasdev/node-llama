import { useState } from 'react'
import './App.css'

function App() {
  const [stateQuestion, setStateQuestion] = useState('')


  const sendQuestion = () => {
    
  }

  const handleChange = (e) => {
      setStateQuestion(e.target.value)
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Chat</h1>
      <div className='d-flex justify-content-center'>
        <input type="text" className='rounded' defaultValue={stateQuestion} onChange={handleChange}/>
        <div className='ms-2'>
          <svg onClick={sendQuestion} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 
            0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default App
