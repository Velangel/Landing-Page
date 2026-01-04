import React from 'react';
import { FaJs, FaPython, FaReact } from 'react-icons/fa';
import { SiFlask, SiTailwindcss, SiHtml5 } from 'react-icons/si';

const LanguagesTable = () => {
  const languages = [
    {
      id: 1,
      name: "JavaScript",
      color: "bg-yellow-400",
      percentage: "20%",
      icon: <FaJs className="text-2xl text-yellow-400" />,
    },
    {
      id: 2,
      name: "Python",
      color: "bg-blue-500",
      percentage: "62%",
      icon: <FaPython className="text-2xl text-blue-500" />,
    }
  ];

  const technologies = [
    {
      id: 1,
      name: "React + Vite",
      color: "bg-cyan-500",
      level: "Intermedio",
      icon: <FaReact className="text-2xl text-cyan-400" />,
    },
    {
      id: 2,
      name: "HTML5",
      color: "bg-orange-500",
      level: "Avanzado",
      icon: <SiHtml5 className="text-2xl text-orange-500" />,
    },
    {
      id: 3,
      name: "Flask",
      color: "bg-gray-300",
      level: "Bajo",
      icon: <SiFlask className="text-2xl text-gray-300" />,
    },
    {
      id: 4,
      name: "TailwindCSS",
      color: "bg-teal-500",
      level: "Intermedio",
      icon: <SiTailwindcss className="text-2xl text-teal-400" />,
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Sección Lenguajes */}
      <div className="rounded-xl shadow-2xl p-6 border
      bg-radial from-zinc-50 to-zinc-200 border-zinc-200
      hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
      dark:bg-radial dark:from-zinc-800 dark:to-zinc-900 dark:border-zinc-800">
        
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Lenguajes de Programación</h2>
          <span className="text-zinc-700 dark:text-gray-400">• Uso global</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((lang) => (
            <div key={lang.id} className="flex flex-col p-4 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-850 transition-colors duration-200">
              {/* Parte superior: Ícono y nombre */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 dark:bg-zinc-700 rounded-lg shrink-0">
                    {lang.icon}
                  </div>
                  <span className="font-semibold text-zinc-900 dark:text-white text-lg">{lang.name}</span>
                </div>
                <div className={`w-3 h-3 rounded-full ${lang.color} shrink-0`}></div>
              </div>
              
              {/* Parte inferior: Barra de progreso */}
              <div className="flex items-center gap-3">
                <span className="font-bold text-zinc-900 dark:text-white text-sm min-w-[40px]">
                  {lang.percentage}
                </span>
                <div className="flex-1 bg-zinc-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${lang.color} transition-all duration-1000 ease-out `}
                    style={{ width: lang.percentage }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Tecnologías - Diseño original */}
      <div className="rounded-xl shadow-2xl p-6 border
      bg-radial from-zinc-50 to-zinc-200 border-zinc-200
      hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
      dark:bg-radial dark:from-zinc-800 dark:to-zinc-900 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Tecnologías y Frameworks</h2>
          <span className="text-zinc-700 dark:text-gray-400">• Mi experiencia</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technologies.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between p-4 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-750 transition-colors duration-200">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 dark:bg-zinc-700 rounded-lg shrink-0">
                  {tech.icon}
                </div>
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-white text-lg block">{tech.name}</span>
                  <span className="text-zinc-700 dark:text-gray-400 text-sm">{tech.level}</span>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${tech.color} shrink-0`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesTable;