import React, { useEffect } from "react";
import { 
    motion,
    useMotionTemplate, 
    useMotionValue, 
    animate, 
} from "framer-motion";

const COLORS = ["#545454", "#0F0F0F", "#525252"];
const COLORS2 = ["#0F0F0F", "#303030", "#141414"];

const Background = () => {
    const color = useMotionValue(COLORS[0]);
    const color2 = useMotionValue(COLORS2[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 50%, ${color2} 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    useEffect(() => {
        animate(color2, COLORS2, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    return(
        <motion.div        
        style={{
            backgroundImage,
        }}
        className="absolute inset-0 -z-10"
        />
    );

};

export default Background;