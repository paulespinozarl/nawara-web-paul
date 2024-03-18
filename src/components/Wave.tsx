import { FC } from "react";
import { useCanvasContext, useResponsiveSize } from "../hooks";
import WaveObj from "../utils/wave";

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;
  const waves = {
    frontWave: new WaveObj([0.0211, 0.028, 0.015], "rgb(23, 154, 158, 0.1)"),
    backWave: new WaveObj([0.0122, 0.018, 0.005], "rgb(39, 158, 164, 0.1)"),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

export { Wave };
