import { ReactElement, useState } from "react";

const useMultiform = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => setCurrentStepIndex(prev => (steps.length - 1) <= prev ? prev : prev + 1);

  const back = () => setCurrentStepIndex(prev => prev <= 0 ? prev : prev -1);

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
  }
}

export default useMultiform;