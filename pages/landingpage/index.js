import Image from "next/image";
import todoLogo from "../images/todologo.png";
import profile from "../images/profile.png";
import edittodo from "../images/edittodo.svg";
import { useEffect, useState } from "react";
import React from "react";

const LandingPage = () => {
  const [todos, setTodos] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("todos")) || []
      : []
  );
  const [searchInput, setSearchInput] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleInputDescription = (e) => {
    setInputDescription(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      const newTodo = {
        id: selectedTodo ? selectedTodo.id : Math.random(),
        title: inputValue,
        description: inputDescription,
        completed: false,
      };
      const newTodos = selectedTodo
        ? todos.map((todo) => (todo.id === selectedTodo.id ? newTodo : todo))
        : [...todos, newTodo];
      setTodos(newTodos);
      setSelectedTodo(null);
      setInputValue("");
      setInputDescription("");
    }
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setSelectedTodo(null);
  };

  const handleCompletedTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodo);
  };

  const searchHandler = () => {
    const filtered = todos.filter((todo) => todo.title.includes(searchInput));
    setFilteredTodos(filtered);
  };

  return (
    <div>
      <nav className="flex max-w-full h-20 justify-between px-4 items-center shadow-md bg-white">
        <div>
          <Image height={40} width={40} src={todoLogo} alt="todoLogo" />
        </div>
        <h1 className="flex  items-start text-gray-900 text-xl ">Todo App</h1>
        <div className="flex items-center mr-72">
          <input
            type="text"
            placeholder="Search Todos By Title"
            className="bg-gray-100 text-sm text-gray-800 rounded-xl w-60 h-10 px-6 focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="flex-shrink-0 p-2 ml-2 border-2 leading-4 rounded text-black border-cyan-500-600 hover:text-white hover:bg-cyan-500"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <div className="mr-3 ml-2">
          <h1 className="text-xs">User Name</h1>
          <button className=" rounded border-2 border-gray-400 hover:text-white hover:bg-yellow-400">
            <Image height={28} width={28} src={profile} alt="profile" />
          </button>
        </div>
      </nav>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4 ">
            <input
              maxLength="25"
              value={inputValue}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker"
              type="text"
              id="title"
              name="title"
              placeholder="Enter your todo title here"
            />
            <br></br>
            <textarea
              value={inputDescription}
              onChange={handleInputDescription}
              maxLength="1200"
              className="shadow appearance-none border rounded-md w-full py-2 px-3 mr-4 mt-1 text-black"
              id="description"
              name="description"
              placeholder="Enter your description here"
            ></textarea>
            <button
              onClick={handleAddTodo}
              type="submit"
              className="flex flex-shrink-0 mt-10 p-2 border-2 rounded text-teal-800 border-teal-800 hover:text-white hover:bg-teal-800"
            >
              Add New Todo
            </button>
            <h1 className="text-xl mb-10 mt-4 ml-4">Your Latest Todos</h1>
            <ul>
              {(searchInput.length > 0 ? filteredTodos : todos).map((todo) => (
                <li
                  key={todo.id}
                  className={`relative ${
                    todo.completed ? "opacity-50 line-through" : ""
                  }`}
                >
                  <div className="border border-gray-300 mb-10 relative">
                    <div className="text-2xl text-center text-black">
                      <button
                        onClick={() => {
                          setSelectedTodo(todo);
                          setInputValue(todo.title);
                          setInputDescription(todo.description);
                        }}
                        className="flex flex-shrink-0 absolute  right-3 mt-2 p-2 border-2 text-sm rounded hover:text-white text-green-800 border-gray-800 hover:bg-green-800"
                      >
                        <Image
                          height={20}
                          width={20}
                          src={edittodo}
                          alt="editIcon"
                        />
                      </button>
                      {todo.title}
                    </div>
                    <div className="text-sm text-start text-black">
                      {todo.description}
                    </div>
                    <div className="flex mb-4 ml-20 leading-3 mt-4">
                      <button
                        className={`flex-shrink-0 p-2 border-2 ml-2 rounded text-gray-600 border-gray-600 hover:text-white hover:bg-gray-600 ${
                          todo.completed ? "hidden" : ""
                        }`}
                        onClick={() => handleCompletedTodo(todo.id)}
                      >
                        Mark As Done
                      </button>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="flex-shrink-0 p-2 ml-2 border-2  rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
                      >
                        Delete Todo
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
