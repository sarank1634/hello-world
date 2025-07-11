"use client";
import "./globals.css";

import { useState } from "react";

interface ErrorWrapperProps {
    children: React.ReactNode;
}
const ErrorSimulator = ({
    message = "An error occurred",
}:{
    message?: string;
}) =>{
  const [error, setError] = useState(false);
  if(error) throw new Error(message);
  return (
    <button 
    title="Simulate error"
    className="bg-red-950 text-red-500 rounded p-1"
    onClick={() => setError(true)}>Simulate Error</button>
  )
}


export const ErrorWrapper = ({ children }: ErrorWrapperProps) => {
    return (
        <div className="flex rounded-lg border border-gray-200 p-4">
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100">
        <ErrorSimulator message="Simulated error in root layout"/>
    </div>
    {children}
        </div>
    )
}