import { useState } from 'react'

import Header from '../header';

function Primeiro() {
  const [inputAluno, setInputAluno] = useState("");
  const [inputIdade, setInputIdade] = useState("");
  const [aluno, setAluno] = useState<string | number>("Sem nome");
  const [idade, setIdade] = useState("Sem idade");

  const [contador, setContador] = useState<number>(0);

  function mostrarAluno() {
    setAluno(inputAluno);
    setIdade(inputIdade);
  }

  function incrementar() {
    setContador((contador) => contador += 1);
  }

  function decrementar() {
    if (contador != 0) {
      setContador((contador) => contador -= 1);
    }
  }
  
  return (
    <div>
      <Header title='Alunos do React + TypeScript' />

      <input
        placeholder='Digite o nome'
        value={inputAluno}
        onChange={(e) => setInputAluno(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder='Digite a idade'
        value={inputIdade}
        onChange={(e) => setInputIdade(e.target.value)}
      />

      <br />
      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>

      <hr />

      <h3>Bem Vindo Aluno: {aluno} - Idade: {idade}</h3>

      <hr />

      <button onClick={incrementar}>+</button>
      <span>{contador}</span>
      <button onClick={decrementar}>-</button>
    </div>
  )
}

export default Primeiro;
