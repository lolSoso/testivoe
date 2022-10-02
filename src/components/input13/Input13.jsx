import React from 'react';
import './Input13.scss';

function Input13(props) {

  const [value, setValue] = React.useState(props.initialValue)

  return (
    <div className="Input">
     <form className='lizing-form' action="lizing">

        <div className='lizing-form__wrapper'>
          <div className='lizing-form__subtitle'>{props.title}</div> 
          <div className="lizing-form__lable">
            <div className="input__number-value__label13">
              <input className='input__number-value' type="text" name="p5" id="p5" 
                value={value} 
              />
            </div>
            
            <div className="right-input-wrapper13">
              <span>{props.rightSpan}</span>
            </div>
            <input className='range' type="range" name="p3" id="p3" />
          </div>
        </div>

 
      </form>
      

    </div>
  );
}

export { Input13 };
