import * as React from "react";

export const add = (a: number, b: number) => a + b;

interface PropsType {
   children: React.ReactNode;
   className?: string;
}
export const Button = ({ children, className }: PropsType) => {
   return (
      <button className={`bg-gray-500 ${className}`}> {children} </button>
   )
}