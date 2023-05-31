import './style.css'
import './script.js'
import logo from './images/logo.svg'
import kunica from './images/kunica.svg'
import telegram from './images/telegram.svg'
import vk from './images/vk.svg'
import youtube from './images/youtube.svg'
import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'


const Navbar = ({ onChange }) => {
  const[menu, setMenu] = useState(false)
  
  const[windowSize, setWindowSize] = useState([
    window.innerWidth
  ]);
  

  
  
  // Вычисляем ширину сайта
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth])
      
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    }, []);
  
  // Если <= 660 то выключаем меню  
  useEffect(() => { 
    onChange(windowSize[0]) // передаем размеры ширины экрана в App
    if (windowSize[0] <= 660){
      setMenu(false)
    }
    else{
      setMenu(true)
    }
  },[windowSize[0]])
  
  // Кнопка всплывания меню
  const clickMenu = () => {
    setMenu(!menu)
  }
   
  
  
  return (
    <nav className="nav">
      <div className="container">
        <img src={logo} alt="logo" className="logo" id="logo"/>
        <div className="content">
          <div className="cont">
            <div className="address">
              <p>450030, г.Уфа Ферина, 2</p>
              <img src={kunica} alt="куница" className="kunica"/>
              <div id="menuToggle" onClick={clickMenu}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                </ul>
              </div>
    
            </div>
            <div className="search_social_phone">
              <div className="search">поиск</div>
              <div className="social">
                <a href="#"><img src={telegram} alt="телеграм" /></a>
                <a href="#"><img src={vk} alt="вконтакте" /></a>
                <a href="#"><img src={youtube} alt="youtube" /></a>
              </div>
              <a href="tel:+7(347) 555-52-42"><p>+7(347)555-52-42</p></a>
            </div>
          </div>
          <CSSTransition in={menu} timeout={300}
          classNames='alert' unmountOnExit>
            <ul className="menu">
              <li>главная</li>
              <li>новости</li>
              <li>мероприятия</li>
              <li>сми о нас</li>
              <li>о союзе</li>
              <li>вакансии</li>
              <li>цок</li>
              <li>проекты</li>
            </ul>
          </CSSTransition>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
