import { useReward } from "react-rewards";

export default function Balloons(id) {
  const { reward: balloons, isAnimatingBalloons } = useReward(id, "balloons", {
    spread: 120,
    elementSize: 30,
    elementCount: 50,
    fps: 60,
    startVelocity: 5,
    zIndex: 1,
  });
  return { balloons, isAnimatingBalloons };
}
