import './App.css';
import { useState } from 'react'
import Navbar from './components/navbar/Navbar.js'
import Space from './components/space/Space.js'
import Slide from './components/carousel/Slide.js'

function App() {
  // Передам данны
  const [value, setValue] = useState('')
  
  // Вытаскиваем данные о ширине браузера из Navbar и передаем в Slide -> Carouser
  const handleChange = (value) => {
    setValue(value)
  }
  
  return (
    <div className="App">
      <Navbar onChange={handleChange}/>
      <Space />
      <Slide value={value}/>
    
    
      <div className="test">
        🐍🌙по натуре победительница🌿🐉
        Я буду задавать вопросы, но не сильно. Просто буду спрашивать что-то, а ты будешь отвечать, что ты делала, потом переходить на другую тему. А потом когда ты скажешь, что хочешь уйти, я спрошу ты что, уходишь? И ты такая: да, потому что мне нужно отдохнуть. И все.
        -----
        Ваовывыва
        я не знаю че делать я не могу
        -----
        ваовыываo
        и еще я боюсь что на меня будут сыпаться вопросы типа "чо ты делаешь" или "а че ты не можешь" и мне будет очень неловко

      </div>
    </div>
  );
}

export default App;
