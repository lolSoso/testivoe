import React from 'react';
import './App.scss';

function App() {

  const [auto, setAuto] = React.useState(3300000)
  const [vznos, setVznos] = React.useState(10)
  const [srok, setSrok] = React.useState(60)

  const changeAuto = (e) => {
    setAuto(e.target.value)
  }
Array.length
  const blur1 = () => {
    if ( auto < 1e6 ) {
      setAuto(1e6)
    }
    if ( auto > 6e6 ) {
      setAuto(6e6)
    }
  }
  
  const changeVznos = (e) => {
    
    setVznos(parseInt(e.target.value) )
  }

  const changeSrok = (e) => {
    setSrok(e.target.value)
  }

  const t = auto.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
  
  

  const blur2 = () => {
     
    setVznos(prev => parseInt(prev) )
    if ( vznos < 10 ) {
      setAuto(10)
    }
    if ( vznos > 60 ) {
      setAuto(60)
    }
  }

  const monthPay = (auto - (Number(auto) * parseInt(vznos) / 100)) * ((vznos / 100 * Math.pow((1 + (vznos / 100)), srok)) / (Math.pow((1 + (vznos / 100)), srok) - 1));

  

  return (
    <div className="App">
     <h1  className='main-title'>Рассчитайте стоимость автомобиля в лизинг</h1>
     <form className='lizing' action="lizing">
        <div className='header'>
          <div className='title'>Стоимость автомобиля</div> 
          <div className="lable-auto">
            <input className='input__number-auto' onBlur={blur1} onChange={(e) => changeAuto(e)} value={t} type="text" name="p1" id="p1" />
            <input className='range' onChange={(e) => changeAuto(e)} min={1e6} max={6e6} value={auto} type="range" name="p2" id="p2" />
          </div>
        </div>

        <div className='header'>
          <div className='title'>Первоначальный взнос</div> 
          <div className="lable">
            <input className='input__number-auto'   value={(Number(auto) * parseInt(vznos) / 100).toLocaleString('ru-RU') } type="text" name="p5" id="p5"/>

              <div className="wrapperr">
                <div className="input-procentII">
                  <div className="procent">
                    <input className='input__number-auto input_number-procent'  onChange={(e) => changeVznos(e)} onBlur={blur2} value={vznos} type="number" name="p4" id="p4" />
                  </div>
                </div>
              </div>

          </div>
          
          <input className='range' onChange={(e) => changeVznos(e)} min={10} max={60} value={vznos } type="range" name="p3" id="p3" />
        </div>

        <div className='header'>
          <div className='title'>Срок лизинга</div> 
          <div className="lable">
            <input className='input__number-auto'  onChange={(e) => changeSrok(e)}  value={srok } type="number" name="p9" id="p9" />
            <input className='range' onChange={(e) => changeSrok(e)} min={1} max={60} value={srok} type="range" name="p8" id="p8" />
          </div>
        </div>
      </form>
      
      <div className="footer">
        <div className="footer-sum">
          <span>сумма договора лизинга</span> <br/>
          <span className='count'>{Math.round((Number(auto) * parseInt(vznos) / 100) + srok*monthPay).toLocaleString('ru-RU') + ' ₽'}</span>
        </div>

        <div className="footer-sum">
          <span>Ежемесячный платеж от</span> <br/>
          <span className='count'>{Math.round(monthPay).toLocaleString('ru-RU') + ' ₽'}</span>
        </div>

        <button className='checkout'>Оставить заявку</button>
      </div>
    </div>
  );
}

export default App;
