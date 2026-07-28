import camelImg from "@/assets/camel.png";

const WALK_DURATION = 2.4; // seconds
const LEG_CYCLE = 0.42; // seconds per swing
const LEG_ITERS = Math.ceil(WALK_DURATION / LEG_CYCLE); // 6

const WalkingCamel = ({ size = 48 }: { size?: number }) => {
  const bobAnim = {
    animation: `camelBob ${LEG_CYCLE}s ease-in-out ${LEG_ITERS} alternate`,
    animationFillMode: "forwards" as const,
  };

  return (
    <div
      style={{
        display: "inline-block",
        animation: `camelEnterLtr ${WALK_DURATION}s cubic-bezier(0.22, 0.61, 0.36, 1) forwards`,
        opacity: 0,
      }}
    >
      <div style={bobAnim}>
        <img
          src={camelImg}
          alt="Walking Camel"
          style={{
            width: size * 1.5, // The image is a bit wider than our SVG so adjusting aspect ratio scale
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default WalkingCamel;
