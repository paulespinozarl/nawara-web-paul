import { createContext, useContext } from "react";

const CanvasContext = createContext<{
  context: CanvasRenderingContext2D | undefined;
}>({
  context: undefined,
});

const useCanvasContext = () => {
  return useContext(CanvasContext);
};

export { CanvasContext, useCanvasContext };
