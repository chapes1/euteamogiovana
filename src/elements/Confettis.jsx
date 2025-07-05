import { useReward } from "react-rewards";

export default function Confettis(id) {
  const { reward: confetti, isAnimatingConfetti } = useReward(id, "confetti", {
    elementSize: 15,
    elementCount: 200,
    lifetime: 500,
    fps: 120,
    zIndex: 1,
    spread: 120
  });
  return { confetti, isAnimatingConfetti };
}
