import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="pt-48 pb-12 px-6 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden bg-black">
      {/* Liquid background accent */}


      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter text-center mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[0.9]"
        >
          Eyes Of
          <br />
          Asia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl text-neutral-400 max-w-lg mx-auto leading-relaxed font-medium tracking-tight"
        >
          Moments captured in silence.
        </motion.p>
      </motion.div>
    </section>
  );
}
