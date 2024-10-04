"use client"
import { useEffect, useRef, useState } from "react";
import { ListCardProps } from "./listCard";
import ListCard from "./listCard";
import useLocalStorage from "./useLocalStorage";

export default function ListContainer() {
  const { getValue, setValue } = useLocalStorage()
  const [todos, setTodos] = useState<ListCardProps[]>([]);
  const todoTitleRef = useRef<HTMLInputElement>(null);
  const todoContentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const oldTodos = getValue("todos");
    if (!oldTodos) {
      return
    }

    setTodos(oldTodos)

  }, [])

  function addTodo() {
    setTodos(prev => {
      if (!todoTitleRef.current || !todoContentRef.current) {
        return prev
      }
      const newArr = [...prev];
      newArr.push({ cardTitle: todoTitleRef.current.value, cardContent: todoContentRef.current.value })
      setValue("todos", newArr)
      return newArr
    })
  }

  function removeLastTodo() {
    setTodos(prev => {
      const newArr = [...prev];
      newArr.pop();
      setValue("todos", newArr)
      return newArr
    })
  }
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-black">Todo List</h2>
      <div className="space-y-4">
        {todos.map((todo, index) => (
          <ListCard
            key={`${index}-${todo.cardTitle}`}
            cardTitle={todo.cardTitle}
            cardContent={todo.cardContent}
          />
        ))}
      </div>
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-2">Add a New Todo</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="todoTitle" className="block mb-1 font-semibold text-black">Todo Title</label>
            <input
              id="todoTitle"
              name="todoTitle"
              type="text"
              ref={todoTitleRef}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="todoContent" className="block mb-1 font-semibold text-black">Todo Content</label>
            <input
              id="todoContent"
              name="todoContent"
              type="text"
              ref={todoContentRef}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            id="addTodo"
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add Todo
          </button>
          <button
            id="removeTodo"
            onClick={removeLastTodo}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Remove Last Todo
          </button>
        </div>
      </div>
    </section>
  );
}
