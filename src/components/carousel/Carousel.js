import {useState, useEffect, Children, cloneElement} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './style.css'

//Принимаем children и value из App  (value это ширина страницы котоая выщитывается в меню) 
const Carousel = ({children, value}) => {
  const PAGE_WIDTH = value
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState([0])


  //Левая кнопка
  const handleLeftArrowClick = () => {
    console.log('handleLeftArrowClick')
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset,0)
  })
  } 
  console.log(value)
  
  //Правая кнопка
  const handleRightArrowClick = () => {
    console.log('handleRightArrowClick')
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
      
      console.log(newOffset, maxOffset);
      if (newOffset == maxOffset){
        const maxOffset = 0
        const newOffset = 0
        console.log('JJJJJJ')
        console.log(maxOffset)
        return Math.max(newOffset, maxOffset)
      } 
      else{
        console.log(newOffset, maxOffset)
        return Math.max(newOffset, maxOffset)
      }
    })
  }

  // Вставляем ширину страницы в стили слайдера
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      }),
      // При уменьшении(увеличении) ширины окна скидываем на первый слайд
      setOffset((currentOffset) => {
        const revo=0
        return revo
      })
    )
  },[value])
  
  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      setTimeout(handleRightArrowClick, 5000);
    }
  },[])
  



  return (
    <div className="main-container" >
      <FaChevronLeft className="arrowleft" onClick={handleLeftArrowClick}/>
      <div className="window">
        <div className="all-pages-container"
          style={{
            transform: `translate(${offset}px)`, //offset - на сколько пикселей происходит перелистывание
          }}
        >{pages}</div>
      </div>
      <FaChevronRight className="arrowright" onClick={handleRightArrowClick}/>
    </div>
  );
}

export default Carousel
