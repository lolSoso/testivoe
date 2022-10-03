import React from 'react';
import './Input2.scss';

function Input2(props) {

  return (
    <div className="Input">
     <div className='lizing-form' action="lizing">

        <div className='lizing-form__wrapper'>
          <div className='lizing-form__subtitle'>{props.title}</div> 
          <div className="lizing-form__lable">

            <div className="input__number-value__label">
              <input className='input__number-value' type="text" name="p5" id="p5" 
                readOnly
                value={Math.round((props.initialValue/100 * props.carСost)).toLocaleString()} 
              />
            </div>
            
            <div className="right-input-wrapper">
              <div className="right-input">
                <div className="right-input__lable">
                  <input type="number" name="p4" id="p4" 
                    value={props.initialValue}  
                    onChange={e => {
                      props.setValue(e.target.value);
                      props.onChange && props.onChange(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <input className='range' type="range" name="p3" id="p3" 
              min={props.min} max={props.max}
              value={props.initialValue} 
                onChange={e => {
                  props.setValue(e.target.value);
                  props.onChange && props.onChange(e);
                }}
            />
          </div>
        </div>

      </div>
      
    </div>
  );
}

export { Input2 };
