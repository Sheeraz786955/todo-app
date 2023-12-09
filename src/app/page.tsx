"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]); //use state
  const [inputValues, setInputValues] = useState("");

  const handleInputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(event.target.value);
  };

  const handleAddTodos = () => {
    setTodos([...todos, inputValues]);
    setInputValues("");
  };

  const handleDeleteTodos = (index: number) => {
    const newTodos = todos.filter((_todo, i) => i !== index);
    setTodos(newTodos);
  };
  
  const handleClearAllTodos = () => {
    setTodos([]);
  };

  return (
    <main>
      <div className="main mx-auto max-w-md mt-28 bg-sky-400 rounded-xl p-4">
        <h1 className="text-3xl font-bold mb-4 justify-between text-center text-white ">TODO APP</h1>
        <div className="flex">
          <input
            className="border border-gray-400 mr-2 px-4 py-2 flex-grow rounded-xl"
            type="text"
            placeholder="Enter a todo"
            value={inputValues}
            onChange={handleInputValues}
            required
          />
          <button
            className="py-2 px-4 bg-green-500 hover:bg-green-700 font-bold text-white rounded-xl"
            onClick={handleAddTodos}
          >
            Add Todo
          </button>
        </div>
        <div className="list">
        <ul className="list-disc list-inside my-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2 pl-4 bg-sky-700 text-white rounded-xl">
              {todo}
              <button onClick={() => handleDeleteTodos(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-xl">X</button>
            </li>
          ))}
        </ul>
        </div>
        <button onClick={handleClearAllTodos} className="bg-red-600 hover:bg-red-800 text-white font-bold w-full p-1 rounded-xl ">Delet All Todos</button>
      </div>
    </main>
  );
}
