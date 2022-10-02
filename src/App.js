import React from 'react';
import { Input2 } from './components/input2/Input2';
import { Input13 } from './components/input13/Input13';
import './App.scss';


function App() {


  return (
    <div className="App">
      <h1 className='main-title'>Рассчитайте стоимость автомобиля в лизинг</h1>

      <div className="form-body">
        <Input13 title={'Стоимость автомобиля'} rightSpan={'₽'}
          initialValue={3_300_000}
        />
        
        <Input2 title={'Первоначальный взнос'}
          initialValue={420_000}
        />

        <Input13 title={'Срок лизинга'} rightSpan={'мес.'}
          initialValue={60}
        />
      </div>

      <div className="form-bottom">
        <div className="finaData">
          <div className="leasingAmountAgreement">
            <span className='finaDatat__subtitle'>Сумма договора лизинга</span>
            <span className='finaDatat__total'>4 467 313 ₽</span>
          </div>
          <div className="MonthlyPayment">
            <span className='finaDatat__subtitle'>Ежемесячный платеж от</span>
            <span className='finaDatat__total'>114 455 ₽</span>
          </div>
        </div>

        <button className='checkout' type='submit'>Оставить заявку</button>
      </div>


    </div>
  );
}

export default App;
