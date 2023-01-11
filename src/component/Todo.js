// import React, { useState } from 'react';

// function Todo() {
//   const [todos, setTodos] = useState([
//     { id: 1, task: 'Learn React', completed: false },
//     { id: 2, task: 'Learn Tailwind CSS', completed: false },
//     { id: 3, task: 'Build a to-do list', completed: false }
//   ]);



//   return (
//     <div className="max-w-md mx-auto py-10">
//       <ul className="bg-white p-5 rounded-lg shadow">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className={`flex items-center py-3 border-b ${
//               todo.completed ? 'line-through text-gray-500' : ''
//             }`}
//           >

          
//             <button
//               type="button"
//               className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:bg-red-50"
//               onClick={() => handleDelete(todo.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;

import React, { useState } from "react";
import Animation from "../animation/Animation.js"
function Todo() {
  const [todos, setTodos] = useState([{id:Date.now(), task:"Default Todo", completed:false}]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), task: newTodo, completed: false }]);
    setNewTodo("");
  };
  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // const handleUpdate = (id, task) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         todo.task = task;
  //       }
  //       return todo;
  //     })
  //   );
  // };
  return (
    <div className="max-w-md my-6 mx-auto py-10">
      <h1 className="text-4xl text-center"><Animation text="Todo List"/></h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded-lg py-2 my-5 px-3 w-full"
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="bg-indigo-500 my-5 w-full text-white rounded-lg py-2 px-3">
          Add Todo
        </button>
       
      </form>
      <ul className="bg-white p-5 my-5 rounded-lg shadow">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center py-3 border-b ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {/* <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              checked={todo.completed}
              onChange={() => handleChange(todo.id)}
            /> */}
            <input
              type="checkbox"
              className="form-checkbox cursor-pointer h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              checked={todo.completed}
              onChange={() => handleChange(todo.id)}
            />
            
            <span className="ml-3 flex-1">{todo.task}</span>
           
            <button
              type="button"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:bg-red-50"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
