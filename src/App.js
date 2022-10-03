import React from 'react';
import { useFieldArray, useForm, useFormState, useWatch } from "react-hook-form";
import { Input2 } from './components/input2/Input2';
import { Input13 } from './components/input13/Input13';
import { fetchData } from './services/fetchData';
import './App.scss';


function App() {

  const refCarСost = React.useRef()
  const [fetching, setFetching] = React.useState(false)
  const [carСost, setCarСost] = React.useState(3_300_000)
  const [initialFee, setInitialFee] = React.useState(60)
  const [leasingTerm, setLeasingTerm] = React.useState(60)



  // React.useEffect(() => {
  //   console.log(refCarСost.current);
  // }, [])



  const Controller = ({ control, register, name, rules, render }) => {
    const value = useWatch({
      control,
      name
    });
    const { errors } = useFormState({
      control,
      name
    });
    const props = register(name, rules);
  
    return render({
      value,
      onChange: (e) =>
        props.onChange({
          target: {
            name,
            value: e.target.value
          }
        }),
      onBlur: props.onBlur,
      name: props.name
    });
  };

  const { control, register, handleSubmit, formState: { errors, isValid, isSubmitting} } = useForm({
    defaultValues: {
      carСost: '3300000',
      initialFee: '420000',
      leasingTerm: '60',
    },
    mode: "onBlur"
  })

  const { fields, append } = useFieldArray({
    control,
    name: "total"
  });

  const checkout = async (args) => {
    try {
      setFetching(true)
    
      append({ 
        monthlyPayment: monthlyPayment,
        leasingAmountAgreement: leasingAmountAgreement
      })

      await fetchData(args)

      setFetching(false)
    } catch (err) {
      setFetching(false)
    }

  }

  const  monthlyPayment = Math.round((carСost - initialFee) * ((0.035 * Math.pow((1 + 0.035), leasingTerm)) / (Math.pow((1 + 0.035), leasingTerm) - 1)))
  const leasingAmountAgreement = Math.round(initialFee + (leasingTerm * monthlyPayment))

  return (
    <div className="App">
      <h1 className='main-title'>Рассчитайте стоимость автомобиля в лизинг</h1>

      <form className='lizing-form' onSubmit={handleSubmit(checkout)}>
        <div className="form-body">

          <Controller
            {...{
              control,
              register,
              name: "carСost",
              rules: { required: true },
              render: (props) => (
                <Input13 title={'Стоимость автомобиля'} rightSpan={'₽'}
                  initialValue={carСost}
                  setValue={setCarСost}
                  min={1e6} max={6e6}
                  {...props}
                />
              )
            }}
          />

          <Controller
            {...{
              control,
              register,
              name: "initialFee",
              rules: { required: true },
              render: (props) => (
                <Input2 title={'Первоначальный взнос'}
                  initialValue={initialFee}
                  carСost={carСost}
                  setValue={setInitialFee}
                  min={10} max={60}
                  {...props}
                />
              )
            }}
          />

          <Controller
            {...{
              control,
              register,
              name: "leasingTerm",
              rules: { required: true },
              render: (props) => (
                <Input13 title={'Срок лизинга'} rightSpan={'мес.'}
                  initialValue={leasingTerm}
                  setValue={setLeasingTerm}
                  min={1} max={60}
                  {...props}
                />
              )
            }}
          />
          
        </div>

        <div className="form-bottom">
          <div className="finaData">
            <div className="leasingAmountAgreement">
              <span className='finaDatat__subtitle'>Сумма договора лизинга</span>
              <span className='finaDatat__total'>{leasingAmountAgreement.toLocaleString() + ' ₽'}</span>
            </div>
            <div className="monthlyPayment">
              <span className='finaDatat__subtitle'>Ежемесячный платеж от</span>
              <span className='finaDatat__total'>{monthlyPayment.toLocaleString() + ' ₽'}</span>
            </div>
          </div>

          <button disabled={fetching} className='checkout' type='submit'>Оставить заявку</button>
        </div>

      </form>

    </div>
  );
}

export default App;
