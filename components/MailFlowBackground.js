"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const TAGS = [
  { label: "Finance", color: "bg-emerald-500", border: "border-emerald-500/30", shadow: "shadow-emerald-500/20" },
  { label: "Support", color: "bg-blue-500", border: "border-blue-500/30", shadow: "shadow-blue-500/20" },
  { label: "Urgent", color: "bg-rose-500", border: "border-rose-500/30", shadow: "shadow-rose-500/20" },
  { label: "Invoices", color: "bg-violet-500", border: "border-violet-500/30", shadow: "shadow-violet-500/20" },
  { label: "AI Sorted", color: "bg-amber-500", border: "border-amber-500/30", shadow: "shadow-amber-500/20" },
  { label: "Spam", color: "bg-gray-500", border: "border-gray-500/30", shadow: "shadow-gray-500/20" },
];

const FloatingItem = ({ positionStyle, delayOffset, isMobile }) => {
  const [isTag, setIsTag] = useState(false);
  const [tag, setTag] = useState(TAGS[0]);

  const handleClick = () => {
    setIsTag((prev) => !prev);
    if (!isTag) {
      setTag(TAGS[Math.floor(Math.random() * TAGS.length)]);
    }
  };

  useEffect(() => {
    setTag(TAGS[Math.floor(Math.random() * TAGS.length)]);

    const startDelay = Math.random() * 2000 + delayOffset;
    let intervalId;

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setIsTag((prev) => {
          const newState = !prev;
          if (newState) {
             setTag(TAGS[Math.floor(Math.random() * TAGS.length)]);
          }
          return newState;
        });
      }, 4500);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.div
      className="absolute z-10 cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: 1.05, zIndex: 50 }}
      style={positionStyle} 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        y: {
          duration: isMobile ? 5 : 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        layout
        className={cn(
          "relative flex items-center justify-center backdrop-blur-md border shadow-2xl overflow-hidden transition-all duration-500 ease-spring",
          isTag
            ? `rounded-lg bg-[#0f172a]/95 ${tag.border} ring-1 ring-white/10 px-3 h-9 md:h-10 md:px-4`
            : "rounded-2xl bg-white/5 border-white/10 hover:bg-white/20 hover:border-white/30 h-12 w-12 md:h-14 md:w-14"
        )}
        style={{
          minWidth: isTag ? "auto" : (isMobile ? "48px" : "56px"),
        }}
      >
        <AnimatePresence mode="wait">
          {!isTag ? (
            <motion.div
              key="mail"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center w-full h-full"
            >
              <Mail className="w-6 h-6 md:w-7 md:h-7 text-gray-200 stroke-[1.5]" />
              <span className="absolute top-2.5 right-2.5 flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-indigo-500"></span>
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="tag"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <div className={cn("rounded-full shrink-0 w-1.5 h-1.5 md:w-2 md:h-2", tag.color)} />
              <span className="text-xs md:text-sm font-semibold text-white tracking-wide select-none">
                {tag.label}
              </span>
              {tag.label === "AI Sorted" && (
                <Sparkles className="w-3 h-3 text-amber-400 ml-1" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const BackgroundGrid = ({ isMobile }) => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
    <div
      className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]"
      style={{
        backgroundSize: isMobile ? "60px 60px" : "120px 120px",
        maskImage: isMobile
          ? "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)" 
          : "radial-gradient(ellipse 100% 80% at 60% 40%, #000 60%, transparent 100%)",
      }}
    />
  </div>
);

const SpotlightEffect = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 transition duration-300"
      style={{
        background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.08),
              transparent 80%
            )
          `,
      }}
    />
  );
};

export default function MailFlowBackground() {
  const [items, setItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => typeof window !== "undefined" && window.innerWidth < 768;
    const mobile = checkMobile();
    setIsMobile(mobile);

    let generatedItems = [];

    if (mobile) {
      generatedItems = [
        {
          id: "m-1",
          isMobile: true,
          delayOffset: 0,
          positionStyle: { top: "12%", left: "5%" }
        },
        {
          id: "m-2",
          isMobile: true,
          delayOffset: 1500,
          positionStyle: { top: "18%", right: "5%" } 
        },
        {
          id: "m-3",
          isMobile: true,
          delayOffset: 800,
          positionStyle: { bottom: "15%", left: "10%" }
        },
                {
          id: "m-4",
          isMobile: true,
          delayOffset: 800,
          positionStyle: { bottom: "15%", right: "10%" } 
        },
        {
          id: "m-5",
          isMobile: true,
          delayOffset: 800,
          positionStyle: { top: "25%", left: "30%" } 
        },
      ];

    } else {
      const cols = 5;
      const rows = 4;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if ((r === 1 || r === 2) && c < 3) continue;

          generatedItems.push({
            id: `d-${r}-${c}`,
            isMobile: false,
            delayOffset: (r * cols + c) * 200,
            positionStyle: {
                left: `${(c / cols) * 100 + 5}%`,
                top: `${(r / rows) * 100 + 10}%`
            }
          });
        }
      }
    }

    setItems(generatedItems);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-transparent group">
      {!isMobile && <SpotlightEffect />}
      <BackgroundGrid isMobile={isMobile} />
      
      {items.map((item) => (
        <FloatingItem 
            key={item.id} 
            positionStyle={item.positionStyle}
            delayOffset={item.delayOffset}
            isMobile={item.isMobile}
        />
      ))}
    </div>
  );
}