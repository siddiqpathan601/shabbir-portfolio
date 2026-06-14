import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = Array.from({ length: 20 });
  
  // Custom code symbols to float around
  const symbols = ["{ }", "< >", "ML", "JSX", "API", "f()", "[]", "const"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, index) => {
        const size = Math.random() * 8 + 4;
        const isSymbol = index % 3 === 0;
        const symbol = symbols[index % symbols.length];

        // Random trajectories
        const xAnim = [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
        ];
        const yAnim = [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
        ];

        return (
          <motion.div
            key={index}
            className={`absolute flex items-center justify-center font-mono ${
              isSymbol
                ? "text-color2/20 text-xs font-semibold"
                : "bg-color2/15 rounded-full blur-[1px]"
            }`}
            style={{
              width: isSymbol ? "auto" : size,
              height: isSymbol ? "auto" : size,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              x: xAnim,
              y: yAnim,
              opacity: [0.15, 0.45, 0.25, 0.15],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            {isSymbol ? symbol : null}
          </motion.div>
        );
      })}
    </div>
  );
}
