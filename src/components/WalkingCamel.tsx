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
        // Bob up-down while entering, freeze after
        // We layer a bob on the image itself
      }}
    >
      <img
        src="/camel.png"
        alt="camel"
        draggable={false}
        style={{
          width: size,
          height: "auto",
          display: "block",
          transform: "scaleX(-1)",
          animation: `camelBob 0.42s ease-in-out 6 alternate forwards`,
          imageRendering: "auto",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default WalkingCamel;
