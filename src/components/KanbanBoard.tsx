import React, { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext } from "react-beautiful-dnd";
// import type { DropResult } from "react-beautiful-dnd"; 
import Column from "./Column";
import Navbar from "./Navbar";
import { Task } from "../types"; 

interface DropResult {
  draggableId: string;
  type: string;
  source: {
    index: number;
    droppableId: string;
  };
  destination?: {
    index: number;
    droppableId: string;
  } | null;
}

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // 🔹 Track search input
  const [loading, setLoading] = useState(true);

  // Fetch tasks from MongoDB
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/cards");
        if (res.status === 200) {
          const formattedTasks = res.data.map((task: any) => ({
            _id: task._id,
            title: task.title,
            description: task.description || "No description",
            column: task.column,
          }));
          setTasks(formattedTasks);
        }
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setTasks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading tasks...</div>;
  }

  // 🔹 Filter tasks based on search query
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (task.description?.toLowerCase() ?? "").includes(searchQuery.toLowerCase()) 
  );

  // Handle drag and drop
  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    let updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(task => task._id === draggableId);
    if (taskIndex === -1) return;

    const movedTask = updatedTasks[taskIndex];
    updatedTasks.splice(taskIndex, 1);
    movedTask.column = destination.droppableId;
    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks([...updatedTasks]);

    try {
      await axios.put(`http://localhost:5000/cards/${movedTask._id}`, {
        column: movedTask.column,
      });
    } catch (error) {
      console.error("Failed to update task column", error);
    }
  };

  return (
    <>
      {/* 🔹 Include the search bar */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex justify-between px-5 pb-8 w-full pt-[20px]">
          {["todo", "inprogress", "peerreview", "done"].map((col) => (
            <Column
              key={col}
              title={
                col === "todo"
                  ? "To Do"
                  : col === "inprogress"
                  ? "In Progress"
                  : col === "peerreview"
                  ? "Peer Review"
                  : "Done"
              }
              column={col}
              tasks={filteredTasks.filter((task) => task.column === col)} // 🔹 Filter applied here
              setTasks={setTasks}
            />
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default KanbanBoard;
