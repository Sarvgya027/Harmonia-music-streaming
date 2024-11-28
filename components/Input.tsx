import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge';

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  // id: string;
}

const Input = forwardRef<HTMLInputElement, InputInterface>(({
  className,
  disabled,
  type,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={twMerge(`
        w-full 
        rounded-xl
        border
        border-slate-700/30
        bg-slate-800/30
        text-slate-200
        placeholder:text-slate-400
        focus:outline-none
        focus:ring-2 
        focus:ring-indigo-500
        focus:border-transparent
        disabled:cursor-not-allowed
        disabled:opacity-50
        px-4
        py-2
        transition
        duration-300
        hover:bg-slate-800/50
      `, className)}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
});

Input.displayName = "Input"

export default Input
