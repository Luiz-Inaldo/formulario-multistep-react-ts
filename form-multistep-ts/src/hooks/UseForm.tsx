import { FormEvent, ReactElement, useState } from "react";

export function UseForm(steps: ReactElement[]) {

    const [currentStep, setCurrentStep] = useState<number>(0);

    const changeStep = (i: number, e?: FormEvent) => {

        if (e) e.preventDefault();
        if (i < 0 || i >= steps.length) return

        setCurrentStep(i);

    }

    return { changeStep,
        currentStep,
        currentComponent: steps[currentStep]
     }
}