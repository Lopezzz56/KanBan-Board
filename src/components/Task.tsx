// import React from "react";
// import { Draggable } from "react-beautiful-dnd";
// import { Task } from "../types";

// interface TaskCardProps {
//   task: Task;
//   index: number;
// }

// const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
//   return (
//     <Draggable draggableId={task._id} index={index}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className="cursor-grab bg-gray-800 text-white p-3 my-2 rounded border border-gray-600"
//         >
//           <h3 className="font-bold">{task.title}</h3>
//           <p className="text-sm text-gray-400">{task.description}</p>
//         </div>
//       )}
//     </Draggable>
//   );
// };

// export default TaskCard;

import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FiTrash } from "react-icons/fi"; // Import delete icon
import axios from "axios";
import { Task } from "../types";

interface TaskCardProps {
  task: Task;
  index: number;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index, setTasks }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/cards/${task._id}`);
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="cursor-grab bg-transparent rounded border-t border-b border-white/15 text-white p-3 my-2 flex justify-between items-center"
          >
          <span>    
            <h3 className="font-bold">{task.title}</h3>
           <p className="text-sm text-white-100">{task.description}</p>

          </span>
          <button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-600"
          >
            <FiTrash size={18} />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
