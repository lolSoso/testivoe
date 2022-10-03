import React from 'react';
import './Input13.scss';

function Input13(props) {

  
  return (
    <div className="Input">
     <div className='lizing-form' action="lizing">

        <div className='lizing-form__wrapper'>
          <div className='lizing-form__subtitle'>{props.title}</div> 
          <div className="lizing-form__lable">
            <div className="input__number-value__label13">
              <input className='input__number-value' type="text" name="p5" id="p5" 
                value={props.initialValue.toLocaleString()} 
                onChange={e => {
                  // handler(e)
                  props.setValue(parseInt(e.target.value));
                  props.onChange && props.onChange(e);
                }}
              />
            </div>

            <div className="right-input-wrapper13">
              <span>{props.rightSpan}</span>
            </div>
            <input min={props.min} max={props.max} className='range' type="range" name="p3" id="p3" 
              value={props.initialValue} 
              onChange={e => {
                props.setValue(parseInt(e.target.value));
                props.onChange && props.onChange(e);
              }}
            />
          </div>
        </div>

 
      </div>
      

    </div>
  );
}

export { Input13 };
