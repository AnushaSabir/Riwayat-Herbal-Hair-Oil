// Walk-in duration: 2.4s | Leg cycle: 0.42s | Iterations to cover walk-in: ~6
// After 6 iterations legs freeze via animationFillMode: forwards

const WALK_DURATION = 2.4; // seconds
const LEG_CYCLE    = 0.42; // seconds per swing
const LEG_ITERS    = Math.ceil(WALK_DURATION / LEG_CYCLE); // 6

const WalkingCamel = ({ size = 48 }: { size?: number }) => {
  const legAnimA = {
    animation: `legSwingA ${LEG_CYCLE}s ease-in-out ${LEG_ITERS} alternate`,
    animationFillMode: "forwards" as const,
  };
  const legAnimB = {
    animation: `legSwingB ${LEG_CYCLE}s ease-in-out ${LEG_ITERS} alternate`,
    animationFillMode: "forwards" as const,
  };
  const bobAnim = {
    animation: `camelBob ${LEG_CYCLE}s ease-in-out ${LEG_ITERS} alternate`,
    animationFillMode: "forwards" as const,
  };

  return (
    <div
      style={{
        display: "inline-block",
        animation: `camelEnter ${WALK_DURATION}s cubic-bezier(0.22, 0.61, 0.36, 1) forwards`,
        opacity: 0,
      }}
    >
      {/* Body bobs while walking, then freezes */}
      <div style={bobAnim}>
        <svg
          viewBox="0 0 140 100"
          width={size}
          height={Math.round(size * 0.72)}
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* ── Tail ── */}
          <path
            d="M112 52 Q124 44 120 58 Q116 64 122 68"
            stroke="#C19A6B" strokeWidth="3.5"
            fill="none" strokeLinecap="round"
          />

          {/* ── Legs (Back/Right Side - darker for depth) ── */}
          {/* Front-right leg */}
          <g style={{ transformOrigin: "61px 78px", ...legAnimB }}>
            <rect x="57" y="78" width="8" height="26" rx="4" fill="#A07850" />
            <ellipse cx="61" cy="105" rx="5" ry="3" fill="#3E2723" />
          </g>
          {/* Back-right leg */}
          <g style={{ transformOrigin: "99px 78px", ...legAnimA }}>
            <rect x="95" y="78" width="8" height="26" rx="4" fill="#A07850" />
            <ellipse cx="99" cy="105" rx="5" ry="3" fill="#3E2723" />
          </g>

          {/* ── Body ── */}
          <ellipse cx="72" cy="58" rx="40" ry="24" fill="#C19A6B" />

          {/* ── Hump ── */}
          <ellipse cx="78" cy="34" rx="18" ry="16" fill="#C19A6B" />

          {/* ── Neck ── */}
          <path d="M44 50 Q40 36 30 30" stroke="#C19A6B" strokeWidth="13"
            strokeLinecap="round" fill="none" />

          {/* ── Head ── */}
          <ellipse cx="23" cy="27" rx="15" ry="10" fill="#C19A6B" />

          {/* ── Snout ── */}
          <ellipse cx="9" cy="30" rx="8" ry="6" fill="#D4B48C" /> {/* Lighter snout */}

          {/* ── Nostril ── */}
          <circle cx="5" cy="32" r="1.8" fill="#3E2723" />

          {/* ── Eye ── */}
          <circle cx="18" cy="22" r="3" fill="white" />
          <circle cx="18" cy="22" r="1.8" fill="#3E2723" />
          <circle cx="17" cy="21" r="0.7" fill="white" />

          {/* ── Ear ── */}
          <ellipse cx="32" cy="18" rx="3.5" ry="6" fill="#C19A6B" transform="rotate(-10,32,18)" />

          {/* ── Eyelash ── */}
          <path d="M16 19 Q18 16 21 18" stroke="#3E2723" strokeWidth="1" fill="none" strokeLinecap="round" />

          {/* ═══════════ LEGS (Front/Left Side - lighter) ═══════════ */}
          
          {/* Front-left leg */}
          <g style={{ transformOrigin: "49px 78px", ...legAnimA }}>
            <rect x="45" y="78" width="8" height="26" rx="4" fill="#C19A6B" />
            <ellipse cx="49" cy="105" rx="5" ry="3" fill="#3E2723" />
          </g>

          {/* Back-left leg */}
          <g style={{ transformOrigin: "85px 78px", ...legAnimB }}>
            <rect x="81" y="78" width="8" height="26" rx="4" fill="#C19A6B" />
            <ellipse cx="85" cy="105" rx="5" ry="3" fill="#3E2723" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WalkingCamel;
