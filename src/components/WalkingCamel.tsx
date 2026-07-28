// WalkingCamel — uses a real camel photo, walks in, then stops.
// scaleX(-1) flips the image so camel faces LEFT (walks right-to-left).
// Walk-in: 2.4s | Leg bob: finishes after walk-in.

const WALK_DURATION = 2.4; // seconds

const WalkingCamel = ({ size = 64 }: { size?: number }) => {
  return (
    <div
      style={{
        display: "inline-block",
        animation: `camelEnter ${WALK_DURATION}s cubic-bezier(0.22, 0.61, 0.36, 1) forwards`,
        opacity: 0,
      }}
    >
      <div style={{ animation: `camelBob 0.42s ease-in-out 6 alternate forwards` }}>
        <img
          src="/camel.png"
          alt="camel"
          draggable={false}
          style={{
            width: size,
            height: "auto",
            display: "block",
            transform: "scaleX(-1)",
            imageRendering: "auto",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
};

export default WalkingCamel;
