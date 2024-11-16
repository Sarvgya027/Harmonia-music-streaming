'use client';

import { useRouter } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import Button from '../components/Button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();

  const handleLogin = () => {
    console.log('oeooeosoe');
    
    router.push('/login')
  }

  return (
    <div className={twMerge(`
      h-20 bg-gradient-to-b from-slate-900 to-transparent 
      backdrop-blur-sm border-b border-slate-800/40
      px-4 py-6
    `, className)}>
      <div className="w-full h-full flex items-center justify-between">
        {/* Navigation Buttons - Desktop */}
        <div className="hidden md:flex gap-x-3 items-center">
          <button 
            onClick={() => router.back()}
            className="rounded-xl bg-slate-800/50 p-2.5
              hover:bg-slate-700/50 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <RxCaretLeft size={24} className="text-slate-200" />
          </button>
          <button 
            onClick={() => router.forward()}
            className="rounded-xl bg-slate-800/50 p-2.5
              hover:bg-slate-700/50 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <RxCaretRight size={24} className="text-slate-200" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="p-2 rounded-xl hover:bg-slate-800/50 transition-colors duration-200">
            <HiHome className="text-slate-200" size={22} />
          </button>
          <button className="p-2 rounded-xl hover:bg-slate-800/50 transition-colors duration-200">
            <BiSearch className="text-slate-200" size={22} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-x-2">
          <Button 
            onClick={() => {}} 
            className="bg-transparent hover:bg-slate-800/50 text-slate-200 px-4 py-2.5 w-auto"
          >
            Sign up
          </Button>
          <Button 
            onClick={handleLogin} 
            className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2.5 w-auto
              shadow-lg shadow-indigo-500/20"
          >
            Log in
          </Button>
        </div>
      </div>
      <div className="mt-10">
        {children}
      </div>
    </div>
  );
};

export default Header;