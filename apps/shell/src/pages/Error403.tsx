import { motion } from "motion/react";
import { ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Error403() {
  const navigate = useNavigate();

  const onBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 text-slate-800 flex flex-col justify-center items-center min-h-full text-center">
      {/* Giant Overlapping Design from Sleek Theme */}
      <div className="relative inline-block select-none my-6">
        <h1 className="text-[120px] md:text-[150px] font-black text-slate-100 leading-none tracking-tighter">
          403
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-20 h-20 md:w-24 md:h-24 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 border-4 border-white shadow-xl relative"
          >
            <Lock
              className="w-9 h-9 md:w-11 md:h-11 text-rose-500"
              id="lock-icon-403"
            />
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
          Access Restricted &bull; 访问受限
        </h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
          You don't have authorization to view this resource. Please contact
          your system administrator or return to safety.
        </p>
        <p className="text-xs text-slate-400 italic">
          您没有该页面的访问权限。请核验您的身份凭证或返回首页。
        </p>
      </motion.div>

      {/* Global Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full flex justify-center"
      >
        <button
          id="back-home-403-btn"
          onClick={onBackToHome}
          className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-black text-white rounded-xl text-sm font-bold tracking-tight transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 active:scale-[0.98] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back Home / 返回首页</span>
        </button>
      </motion.div>

      {/* Aesthetic Footer */}
      <div className="text-center mt-16 text-[11px] text-slate-400 flex items-center justify-center gap-2 font-medium">
        <span>Protected by Sentinel SecOS</span>
        <span>&bull;</span>
        <span>Version 2.4.0</span>
      </div>
    </div>
  );
}
