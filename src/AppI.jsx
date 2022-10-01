import React from 'react';
import './AppI.scss';

function App() {


  return (
    <div className="App">
     <form className='lizing-form' action="lizing">

        <div className='lizing-form__wrapper'>

          <div className='lizing-form__subtitle'>Стоимость автомобиля</div> 
          <div className="lizing-form__lable">
            <input className='input__number-value' value={'3 300 000' } type="text" name="p5" id="p5"/>

              <div className="right-input-wrapper">
                <div className="right-input">
                  <div className="right-input__lable">
                    <input value={55} type="number" name="p4" id="p4" />
                  </div>
                </div>
              </div>
            <input className='range' type="range" name="p3" id="p3" />
          </div>

          <div className='lizing-form__subtitle'>Первоначальный взнос</div> 
          <div className="lizing-form__lable">

            <div className="input__number-value__label">
              <input className='input__number-value' value={420_000} type="text" name="p5" id="p5"/>
            </div>

            <div className="right-input-wrapper">
              <div className="right-input">
                <div className="right-input__lable">
                  <input value={55} type="number" name="p4" id="p4" />
                </div>
              </div>
            </div>

            <input className='range' type="range" name="p3" id="p3" />
          </div>
          
        </div>

 
      </form>
      

    </div>
  );
}

export default App;
