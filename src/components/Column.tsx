import React from "react";

import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./Task";
import AddCard from "./AddCard";
import { Task } from "../types";

interface ColumnProps {
  title: string;
  column: string;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const Column: React.FC<ColumnProps> = ({ title, column, tasks, setTasks }) => {
  return (
    <div className="w-[300px] p-2 bg-transparent rounded border border-white/20">
<h2 className="text-white font-bold text-lg p-1 mb-2">{title}</h2>
<Droppable droppableId={column}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-full min-h-[500px] bg-transparent rounded border border-none"
        >
  
            {tasks
              .filter((task) => task.column === column) // Only tasks for this column
              .map((task, index) => (
                <TaskCard key={task._id} task={task} index={index} setTasks={setTasks}/>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="p-1">
  <AddCard column={column} setTasks={setTasks} />
</div>
    </div>
  );
};

export default Column;
