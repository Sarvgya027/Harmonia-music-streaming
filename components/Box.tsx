import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => (
  <div className={twMerge(`bg-slate-900 rounded-xl h-fit border border-slate-800/40 backdrop-blur-sm`, className)}>
    {children}
  </div>
);

export default Box;