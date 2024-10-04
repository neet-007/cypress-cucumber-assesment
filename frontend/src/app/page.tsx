"use client"
import { useRouter } from "next/navigation";
import ListContainer from "./listContainer";
import useLocalStorage from "./useLocalStorage";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { getValue, setValue } = useLocalStorage()
  const [user, setUser] = useState<string>("");

  function logout() {
    setValue("todoUser", "")
    router.push("/login");
  }

  useEffect(() => {
    const userName = getValue("todoUser");
    if (!userName) {
      router.push("/login");
    }
    setUser(userName)
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Todo List</h1>
      <h2 className="text-2xl text-gray-600 mb-8">{`Welcome, ${user}`}</h2>
      <button onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >logout</button>
      <ListContainer />
    </main>
  );
}
