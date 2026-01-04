import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // 1. Al cargar, revisamos si ya hay preferencia o si el sistema es oscuro
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement; // Esto es el <html>
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-orange-500 text-white shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-all"
    >
      {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} className='text-zinc-900'/>}
    </button>
  );
}