import { useRef, useState, useEffect } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onReady = () => setReady(true);
    v.addEventListener("canplay", onReady);

    return () => v.removeEventListener("canplay", onReady);
  }, []);

  const tasks = [
    { title: "Implement HTTP request parser", priority: "P0" },
    { title: "Solve binary search problems", priority: "P1" },
    { title: "Read Go scheduler article", priority: "P2" },
  ];

  return (
    <div className="relative  h-screen w-screen overflow-hidden bg-[#070709] text-[#e2e2ee]">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-60" : "opacity-0"
        }`}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Grid overlay */}
      <div
        className="pointer-events-none -[#4141cf] absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.025) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* App title */}
      <div className="absolute  top-12 left-12 z-10">
        <h1
          className="italic"
          style={{
            fontFamily: "Instrument Serif",
            fontSize: "clamp(2.4rem,7vw,5rem)",
            letterSpacing: "-1px",
          }}
        >
          RYOKU
        </h1>
      </div>

      {/* Focus Tasks */}
      <div className="absolute border  bottom-12 left-12 z-10 w-[320px] space-y-1">
        <div className="text-[10px] tracking-[4px] text-[#cbcbe1] font-mono">
          TODAY'S FOCUS
        </div>

        {tasks.map((task, i) => (
          <div
            key={i}
            className=" border-[#1a1a26] bg-[#0d0d12] p-4 rounded-md hover:border-[#242438] transition"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm">{task.title}</span>

              <span
                className={`
                text-[10px] font-mono tracking-[2px]
                ${task.priority === "P0" && "text-[#f87171]"}
                ${task.priority === "P1" && "text-[#fbbf24]"}
                ${task.priority === "P2" && "text-[#60a5fa]"}
                `}
              >
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
