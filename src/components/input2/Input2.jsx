import React from 'react';
import './Input2.scss';

function Input2(props) {


  return (
    <div className="Input">
     <form className='lizing-form' action="lizing">

        <div className='lizing-form__wrapper'>
          <div className='lizing-form__subtitle'>{props.title}</div> 
          <div className="lizing-form__lable">
            <div className="input__number-value__label">
              <input className='input__number-value' type="text" name="p5" id="p5" 
                value={props.initialValue} 
              />
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

export { Input2 };
