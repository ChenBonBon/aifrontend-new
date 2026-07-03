import { motion } from "motion/react";
import { Compass, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  // Cosmic floating particles (lightweight coordinates for Framer Motion)
  const stars = [
    { id: 1, x: "12%", y: "15%", size: 3, delay: 0.2, duration: 3.5 },
    { id: 2, x: "85%", y: "25%", size: 4, delay: 0.8, duration: 4 },
    { id: 3, x: "78%", y: "70%", size: 2.5, delay: 0.5, duration: 2.8 },
    { id: 4, x: "20%", y: "80%", size: 4.5, delay: 1.1, duration: 4.5 },
    { id: 5, x: "50%", y: "85%", size: 3, delay: 0.1, duration: 3.2 },
    { id: 6, x: "90%", y: "55%", size: 2, delay: 1.5, duration: 2.5 },
    { id: 7, x: "5%", y: "45%", size: 3.5, delay: 0.9, duration: 3.8 },
  ];

  const navigate = useNavigate();

  const onBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 text-slate-800 flex flex-col justify-center items-center min-h-full text-center relative overflow-hidden">
      {/* Dynamic Cosmic Floating Stars adapted for Light Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-indigo-200/60 rounded-full"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Soft elegant backdrop glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-indigo-100/40 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Icon and Hero Header */}
      <div className="text-center mb-8 relative z-10">
        {/* Giant Overlapping Design from Sleek Theme */}
        <div className="relative inline-block select-none my-6">
          <h1 className="text-[120px] md:text-[150px] font-black text-slate-100 leading-none tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-20 h-20 md:w-24 md:h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border-4 border-white shadow-xl relative"
            >
              {/* Spinning Compass Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <Compass
                  className="w-9 h-9 md:w-11 md:h-11 text-indigo-600"
                  id="compass-icon-404"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Error Titles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3 px-4 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
            Lost In Space &bull; 页面未找到
          </h2>
          <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            The destination you requested has drifted offline. Explore active
            coordinates or return to safety.
          </p>
          <p className="text-xs text-slate-400 italic">
            您访问的页面不存在。请核实页面路径或返回首页。
          </p>
        </motion.div>
      </div>

      {/* Global Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full flex justify-center relative z-10"
      >
        <button
          id="back-home-404-btn"
          onClick={onBackToHome}
          className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-black text-white rounded-xl text-sm font-bold tracking-tight transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-[0.98] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back Home / 返回首页</span>
        </button>
      </motion.div>

      {/* Aesthetic Footer */}
      <div className="text-center mt-16 text-[11px] text-slate-400 flex items-center justify-center gap-2 font-medium relative z-10">
        <span>Sentinel Pathfinder Navigation</span>
        <span>&bull;</span>
        <span>Version 2.4.0</span>
      </div>
    </div>
  );
}
