import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

export const TasksPage = () => {
  const { getTasks, tasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
};
