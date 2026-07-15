"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FBF6EC] gap-6">
      {/* Rotating fruit ring */}
      <div className="relative size-24">
        <div className="absolute inset-0 animate-spin-slow">
          {["🍌", "🍓", "🥝", "🍊", "🍅", "🥦"].map((emoji, i) => {
            const angle = (i * 360) / 6;
            return (
              <span
                key={emoji}
                className="absolute text-2xl"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translate(40px) rotate(-${angle}deg) translate(-50%, -50%)`,
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>

        {/* center pulse dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="size-3 rounded-full bg-[#22331F] animate-ping-slow" />
          <span className="absolute size-3 rounded-full bg-[#22331F]" />
        </div>
      </div>

      {/* Bouncing dots text */}
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-medium text-[#4B4536] tracking-wide">
          Fetching fresh picks
        </p>
        <span className="flex gap-0.5">
          <span className="size-1.5 rounded-full bg-[#22331F] animate-bounce [animation-delay:-0.3s]" />
          <span className="size-1.5 rounded-full bg-[#22331F] animate-bounce [animation-delay:-0.15s]" />
          <span className="size-1.5 rounded-full bg-[#22331F] animate-bounce" />
        </span>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(3.5);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;