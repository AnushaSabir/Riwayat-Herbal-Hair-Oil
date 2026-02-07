import { motion, useScroll, useTransform } from "framer-motion";
import amlaFruit from "@/assets/ingredients/amla.png";
import neemLeaves from "@/assets/ingredients/neem.png";
import amlaLeaves from "@/assets/amla-leaves.png";
import leafPattern from "@/assets/leaf-pattern.png";
import { useEffect, useState } from "react";

const FloatingParticles = () => {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-gold/30 blur-[1px]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: ["0vh", "100vh"],
                        x: ["-10vw", "10vw"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

const GlossyShine = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]"
            animate={{
                x: ["-100%", "200%"],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{ width: "50%" }}
        />
        <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.15)_0%,_transparent_70%)]"
            animate={{
                opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    </div>
);

const BackgroundLayer = () => {
    const { scrollYProgress } = useScroll();
    const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const botanicalElements = [
        { src: amlaLeaves, top: "5%", left: "5%", size: "w-24 md:w-32", rotate: -15, delay: 0, opacity: 0.08, parallax: yParallaxSlow },
        { src: neemLeaves, top: "12%", right: "8%", size: "w-20 md:w-28", rotate: 20, delay: 2, opacity: 0.08, parallax: yParallaxFast },
        { src: amlaFruit, top: "25%", left: "40%", size: "w-10 md:w-16", rotate: 10, delay: 1, opacity: 0.1, parallax: yParallaxSlow },
        { src: amlaLeaves, top: "45%", right: "45%", size: "w-28 md:w-36", rotate: 45, delay: 3, opacity: 0.08, parallax: yParallaxFast },
        { src: neemLeaves, top: "65%", left: "15%", size: "w-24 md:w-32", rotate: -25, delay: 1.5, opacity: 0.08, parallax: yParallaxSlow },
        { src: amlaFruit, bottom: "10%", right: "35%", size: "w-12 md:w-20", rotate: -10, delay: 0.5, opacity: 0.1, parallax: yParallaxFast },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Subtle ornamental texture layer */}
            <div
                className="absolute inset-0 opacity-[0.04] grayscale invert pointer-events-none"
                style={{
                    backgroundImage: `url(${leafPattern})`,
                    backgroundSize: '300px',
                    backgroundRepeat: 'repeat',
                }}
            />

            <div className="absolute inset-0 bg-background mix-blend-multiply opacity-20" />
            <GlossyShine />
            <FloatingParticles />

            {/* Scattered Botanical Elements with Parallax */}
            {botanicalElements.map((el, index) => (
                <motion.img
                    key={index}
                    src={el.src}
                    className={`absolute ${el.size} h-auto select-none pointer-events-none`}
                    style={{
                        top: el.top,
                        left: el.left,
                        right: el.right,
                        bottom: el.bottom,
                        rotate: el.rotate,
                        opacity: el.opacity,
                        y: el.parallax,
                        filter: "blur(0.5px) grayscale(30%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: el.opacity,
                        rotate: [el.rotate, el.rotate + 3, el.rotate],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: el.delay
                    }}
                />
            ))}

            {/* Radial Gradient for depth - Enhanced for shine */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(145,210,160,0.1)_100%)] mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
        </div>
    );
};

export default BackgroundLayer;
