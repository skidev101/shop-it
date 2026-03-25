"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        
        {/* The Fluid Axis Loader */}
        <div className="relative h-16 w-16 flex items-center justify-center">
          
          {/* Outer Fluid Ring */}
          <svg className="absolute inset-0 w-full h-full animate-[fluid-spin_1.2s_linear_infinite]">
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-[fluid-stretch_1.2s_ease-in-out_infinite]"
              style={{ strokeDasharray: '20, 180' }}
            />
          </svg>

          {/* Stationary Monogram Axis */}
          <div className="flex items-baseline font-black text-[12px] tracking-tighter text-[#1A1A1A] opacity-30">
            <span>M</span>
            <span>A</span>
          </div>
        </div>

        {/* Minimalist Brand Tag */}
        <div className="mt-6 flex items-center gap-3">
            <span className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-[0.4em] opacity-40">
                Atlas
            </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fluid-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fluid-stretch {
          0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 100, 200; stroke-dashoffset: -15; }
          100% { stroke-dasharray: 100, 200; stroke-dashoffset: -120; }
        }
      `}</style>
    </div>
  );
}
