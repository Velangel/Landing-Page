import React, { useEffect, useState } from "react";
import { 
    motion,
    useMotionTemplate, 
    useMotionValue, 
    animate, 
} from "framer-motion";

// Colores para Modo Oscuro
const DARK_COLORS = ["#545454", "#0F0F0F", "#525252"];
const DARK_COLORS2 = ["#0F0F0F", "#303030", "#141414"];

// Colores para Modo Claro (Blancos y grises muy suaves)
const LIGHT_COLORS = ["#d6d6d6ff", "#e7e7e7ff", "#b8b8bcff"];
const LIGHT_COLORS2 = ["#e8e8e8ff", "#c5c5c5ff", "#a3a3a3ff"];

const Background = () => {
    // 1. Estado para detectar el modo
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

    // 2. Valores de movimiento
    const color = useMotionValue(isDark ? DARK_COLORS[0] : LIGHT_COLORS[0]);
    const color2 = useMotionValue(isDark ? DARK_COLORS2[0] : LIGHT_COLORS2[0]);
    
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 50%, ${color2} 50%, ${color})`;

    // 3. Efecto para escuchar el cambio de tema global
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });

        return () => observer.disconnect();
    }, []);

    // 4. Animación que se reinicia cuando cambia el tema
    useEffect(() => {
        const targetColors = isDark ? DARK_COLORS : LIGHT_COLORS;
        const targetColors2 = isDark ? DARK_COLORS2 : LIGHT_COLORS2;

        animate(color, targetColors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });

        animate(color2, targetColors2, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [isDark]); // Se dispara cada vez que cambias el modo

    return (
        <motion.div         
            style={{
                backgroundImage,
            }}
            className="absolute inset-0 -z-10 transition-colors duration-500"
        />
    );
};

export default Background;