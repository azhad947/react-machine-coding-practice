import { useState } from "react";

type Step = { id: number; title: string }

const Stepper = ({ steps }: { steps: Step[] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="stepper-container">
      {steps.map((step) => (
        <div key={step.id} className="stepper-box">
          <div className={`step-id ${currentStep > step.id ? 'active' : ""}`}>{step.id}</div>
          <div className="step-title">{step.title}</div>
        </div>
      ))}
      <div>
        {steps[currentStep - 1].title}
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep <= 1}>
          Back
        </button>
        <button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep >= steps.length}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Stepper
