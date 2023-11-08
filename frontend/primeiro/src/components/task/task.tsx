import { useState } from 'react';

const initTasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];

function Task() {
  const [tasks, setTasks] = useState(initTasks);
  const [inputTask, setInputTask] = useState<string>('');

  function handleAdicionarTask() {
    if (!inputTask) {
      alert('Preencha o nome da sua tarefa!');

      return;
    }

    setTasks((tasksOld) => [...tasksOld, inputTask]);
    setInputTask('');
  }

  function handleEditTask(indexTask: number) {
    indexTask = tasks.findIndex((task, index) => {
      if (index === indexTask) {
        let taskEditeded: string | null = prompt('Digite o nome correto da tarefa...', task);

        if (!taskEditeded) {
          taskEditeded = task;
        }

        const allTasks = [...tasks];

        allTasks[indexTask] = taskEditeded;

        setTasks(allTasks);
      }
    });
  }

  function handleDeleteTask(indexTask: number) {
    const removeTask = tasks.filter((_, index) => index !== indexTask);

    setTasks(removeTask);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <hr />

      <input
        type='text'
        placeholder='Digite uma tarefa...'
        value={inputTask}
        onChange={(event) => setInputTask(event.target.value)}
      />

      <button onClick={handleAdicionarTask}>Adicionar</button>

      {tasks.map((task, indexTask) => (
        <section key={indexTask}>
          <span>{task}</span>
          <button onClick={() => handleEditTask(indexTask)}>Editar</button>
          <button onClick={() => handleDeleteTask(indexTask)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}

export default Task;
