import { useReward } from "react-rewards";

export default function Emojis(id) {
  const { reward: emojis, isAnimatingEmojis } = useReward(id, "emoji", {
    emoji: ["Euteamo", "💖", "💗", "💓"],
    elementCount: 150,
    fps: 120,
    zIndex: 1,
    spread: 120,
    lifetime: 300
  });
  return { emojis, isAnimatingEmojis };
}
