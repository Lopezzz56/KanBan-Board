import React, { useState } from "react";
import axios from "axios";
import { Task } from "../types"; 
import { FiPlus } from "react-icons/fi";

interface AddCardProps {
  column: string;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddCard: React.FC<AddCardProps> = ({ column, setTasks }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newCard = {
      title: text.trim(),
      description: description.trim(),
      column, // ✅ Ensure the column is sent
    };

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/cards", newCard, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200 || res.status === 201) {
        setTasks((prevTasks) => [...prevTasks, res.data]); // ✅ Update tasks
        setText(""); // ✅ Clear input fields
        setDescription("");
        setAdding(false);
      } else {
        console.error("Failed to add card:", res);
      }
    } catch (error) {
      console.error("Error adding card:", error);
    } finally {
      setLoading(false);
    }
  };

  return adding ? (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full rounded border border-gray-500 p-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
          placeholder="Add New Task..."
          className="w-full text-neutral-50 bg-transparent focus:outline-none"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Description..."
          className="w-full mt-2 text-neutral-50 bg-transparent focus:outline-none"
        />
      </div>
      <div className="mt-2 flex items-center justify-end gap-1.5">
        <button
          type="button"
          onClick={() => setAdding(false)}
          className="px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-50"
          disabled={loading}
        >
          Close
        </button>
        <button
  type="submit"
  className="px-3 py-1.5 text-sm text-neutral-950 bg-neutral-50 rounded flex items-center gap-1"
  disabled={loading}
>
  {loading ? "Adding..." : "Add"} <FiPlus />
</button>
      </div>
    </form>
  ) : (
    <button
      onClick={() => setAdding(true)}
      className="flex items-center p-2 gap-1.5 text-sm font-medium text-neutral-300 rounded border border-white hover:text-neutral-10"
      >
      Add Card <FiPlus />
    </button>
  );
};

export default AddCard;
