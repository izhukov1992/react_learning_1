import ToDoTask from './ToDoTask'

function ToDoList() {
  const tasks = [
    {
      id: 1,
      task_name: "Сходить в универ",
      done: true
    },
    {
      id: 2,
      task_name: "Сделать курсач",
      done: false
    },
    {
      id: 3,
      task_name: "Сходить в магаз",
      done: false
    },
    {
      id: 4,
      task_name: "Лечь спать пораньше",
      done: false
    }
  ];

  return (
    <div className="container">
		{
			tasks.map(function(task) {
				return (
					<ToDoTask key={task.id} task_object={task}/>
				)
			})
		}
    </div>
  );
}

export default ToDoList;
