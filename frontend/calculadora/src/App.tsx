import { useState, FormEvent } from 'react'

import './App.css'

import logoImg from './assets/logo.png'

interface InfoProps {
  title: string;
  alcool: string | number;
  gasolina: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState<number>();
  const [alcoolInput, setAlcoolInput] = useState<number>();

  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    if (alcoolInput != undefined && gasolinaInput != undefined) {
      let calculo = (alcoolInput / gasolinaInput)
      
      if (calculo <= 0.7) {
        setInfo({
          title: 'Compensa usar Álcool!',
          alcool: formatarMoeda(alcoolInput),
          gasolina: formatarMoeda(gasolinaInput),
        });
      } else {
        setInfo({
          title: 'Compensa usar Gasolina!',
          alcool: formatarMoeda(alcoolInput),
          gasolina: formatarMoeda(gasolinaInput),
        });
      }
    }
  }

  function formatarMoeda(valor: number) : string {
    let valorFormatado: string = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    return valorFormatado
  }

  return (
    <div>
      <main className='container'>
        <img
          src={logoImg}
          alt='Logo da calculadora de gasolina ou álcool'
        />

        <h1 className='title'>Qual a melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Álcool (preço por litro)</label>
          <input
            className='input'
            type='number'
            placeholder='4,90'
            min={1}
            step={0.01}
            required
            value={alcoolInput}
            onChange={(event) => setAlcoolInput(Number(event.target.value))}
          />

          <label>Gasolina (preço por litro)</label>
          <input
            className='input'
            type='number'
            placeholder='4,90'
            min={1}
            step={0.01}
            required
            value={gasolinaInput}
            onChange={(event) => setGasolinaInput(Number(event.target.value))}
          />

          <input
            className='button'
            type='submit'
            value='Calcular'
          />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{info.title}</h2>

            <span>ÁLCOOL {info.alcool}</span>
            <span>GASOLINA {info.gasolina}</span>
          </section>
        )}

      </main>
    </div>
  )
}

export default App
