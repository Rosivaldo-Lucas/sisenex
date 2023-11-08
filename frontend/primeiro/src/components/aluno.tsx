interface AlunoProps {
  nome: string;
  idade: number;
}

export default function Aluno(alunoProps: AlunoProps) {
  return (
    <div>
      <h1>{alunoProps.nome}</h1>
      <h2>{alunoProps.idade}</h2>
    </div>
  )
}
