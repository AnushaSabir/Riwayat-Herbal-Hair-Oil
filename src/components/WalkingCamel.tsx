import { useEffect, useRef } from "react";

const WalkingCamel = ({ size = 80 }: { size?: number }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      style={{
        display: "inline-block",
        // Walk in from right side
        animation: "camelEnter 2.4s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        opacity: 0,
      }}
    >
      {/* Body bobs up-down while walking */}
      <div style={{ animation: "camelBob 0.42s ease-in-out infinite alternate" }}>
        <svg
          viewBox="0 0 140 100"
          width={size}
          height={size * 0.72}
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* ── Tail ── */}
          <path
            d="M112 52 Q124 44 120 58 Q116 64 122 68"
            stroke="black" strokeWidth="3.5"
            fill="none" strokeLinecap="round"
          />

          {/* ── Body ── */}
          <ellipse cx="72" cy="58" rx="40" ry="24" fill="black" />

          {/* ── Hump ── */}
          <ellipse cx="78" cy="34" rx="18" ry="16" fill="black" />

          {/* ── Neck ── */}
          <path d="M44 50 Q40 36 30 30" stroke="black" strokeWidth="13"
            strokeLinecap="round" fill="none" />

          {/* ── Head ── */}
          <ellipse cx="23" cy="27" rx="15" ry="10" fill="black" />

          {/* ── Snout ── */}
          <ellipse cx="9" cy="30" rx="8" ry="6" fill="black" />

          {/* ── Nostril ── */}
          <circle cx="5" cy="32" r="1.8" fill="#444" />

          {/* ── Eye ── */}
          <circle cx="18" cy="22" r="3" fill="white" />
          <circle cx="18" cy="22" r="1.8" fill="#222" />
          <circle cx="17" cy="21" r="0.7" fill="white" />

          {/* ── Ear ── */}
          <ellipse cx="32" cy="18" rx="3.5" ry="6" fill="black" transform="rotate(-10,32,18)" />

          {/* ── Eyelash ── */}
          <path d="M16 19 Q18 16 21 18" stroke="black" strokeWidth="1" fill="none" strokeLinecap="round" />

          {/* ═══════════ LEGS ═══════════ */}

          {/* Front-left leg (pair A — swings forward) */}
          <g style={{ transformOrigin: "49px 78px", animation: "legSwingA 0.42s ease-in-out infinite alternate" }}>
            <rect x="45" y="78" width="8" height="26" rx="4" fill="black" />
            {/* Hoof */}
            <ellipse cx="49" cy="105" rx="5" ry="3" fill="#222" />
          </g>

          {/* Front-right leg (pair B — swings backward) */}
          <g style={{ transformOrigin: "61px 78px", animation: "legSwingB 0.42s ease-in-out infinite alternate" }}>
            <rect x="57" y="78" width="8" height="26" rx="4" fill="black" />
            <ellipse cx="61" cy="105" rx="5" ry="3" fill="#222" />
          </g>

          {/* Back-left leg (pair B — opposite to front-left) */}
          <g style={{ transformOrigin: "85px 78px", animation: "legSwingB 0.42s ease-in-out infinite alternate" }}>
            <rect x="81" y="78" width="8" height="26" rx="4" fill="black" />
            <ellipse cx="85" cy="105" rx="5" ry="3" fill="#222" />
          </g>

          {/* Back-right leg (pair A — opposite to front-right) */}
          <g style={{ transformOrigin: "99px 78px", animation: "legSwingA 0.42s ease-in-out infinite alternate" }}>
            <rect x="95" y="78" width="8" height="26" rx="4" fill="black" />
            <ellipse cx="99" cy="105" rx="5" ry="3" fill="#222" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WalkingCamel;
