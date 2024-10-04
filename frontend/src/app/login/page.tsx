"use client";

import { useRouter } from "next/navigation";
import useLocalStorage from "../useLocalStorage";
import { useEffect } from "react";

async function checkCredentials({ email, password }: { email: string; password: string }) {
  const emailValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!emailValid) {
    return 400;
  }

  const containsDigit = /\d/;
  if (password.length < 8 || !containsDigit.test(password)) {
    return 400;
  }

  return 200;
}

export default function Login() {
  const router = useRouter();
  const { getValue, setValue } = useLocalStorage();

  useEffect(() => {
    if (getValue("todoUser")) {
      router.push("/");
    }

  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    let res = await checkCredentials({ email, password });

    if (res === 200) {
      setValue("todoUser", email)
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            id="login"
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
