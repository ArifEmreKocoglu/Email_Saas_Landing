"use client";

export default function FlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-80" />

      {/* cloud noise */}
      <div className="absolute inset-0 animate-cloudslow opacity-10 mix-blend-soft-light bg-[url('/noise.png')]"></div>

      {/* floating blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-500/40 blur-[180px] rounded-full animate-float1"></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-500/30 blur-[200px] rounded-full animate-float2"></div>

      <style jsx>{`
        @keyframes cloudmove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-cloudslow {
          animation: cloudmove 55s linear infinite;
        }

        @keyframes float1 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(50px, 80px); }
          100% { transform: translate(0, 0); }
        }
        .animate-float1 {
          animation: float1 18s ease-in-out infinite;
        }

        @keyframes float2 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-60px, -40px); }
          100% { transform: translate(0, 0); }
        }
        .animate-float2 {
          animation: float2 22s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}