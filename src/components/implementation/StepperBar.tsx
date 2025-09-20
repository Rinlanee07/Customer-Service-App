import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react'

interface StepperBarProps {
  canclick?: boolean;
  update?: boolean;
  query?: ParsedUrlQuery;
}

const steps = [
  { step: 1, title: "Shop Information", path: "/implementation/step/shopinformation" },
  { step: 2, title: "Setup System", path: "/implementation/step/setupsystem" },
  { step: 3, title: "Branch", path: "/implementation/step/branch" },
  { step: 4, title: "Test Application", path: "/implementation/step/testapp" },
  { step: 5, title: "Train", path: "/implementation/step/train" },
  { step: 6, title: "Deliver", path: "/implementation/step/deliver" },
];

const stepsUpdate = [
  { step: 1, title: "Shop Information", path: "/implementation/updatestep/shopinformation" },
  { step: 2, title: "Setup System", path: "/implementation/updatestep/setupsystem" },
  { step: 3, title: "Branch", path: "/implementation/updatestep/branch" },
  { step: 4, title: "Test Application", path: "/implementation/updatestep/testapp" },
  { step: 5, title: "Train", path: "/implementation/updatestep/train" },
  { step: 6, title: "Deliver", path: "/implementation/updatestep/deliver" },
];



const StepperBar = ({ canclick, update, query }: StepperBarProps) => {
  const router = useRouter();
  const currentStep = update ? stepsUpdate.findIndex(step => step.path === router.pathname.replace(/\[id\]/, '').replace(/\/$/, '')) + 1 : steps.findIndex(step => step.path === router.pathname) + 1;

  return (
    <div className="flex flex-col md:flex-row justify-start overflow-x-auto">
      {update ? (
        <>
          {stepsUpdate.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === step.step ? "active" : ""} ${(step.step < currentStep) && "complete"}`}
            >
              {canclick && query ? (
                <Link className="step" href={{ pathname: step.path, query: query }} >
                  {step.step < currentStep ? (
                    <CheckIcon size={24} />
                  ) : (
                    step.step
                  )}
                </Link>
              ) : (
                <div className="step" >
                  {step.step < currentStep ? (
                    <CheckIcon size={24} />
                  ) : (
                    step.step
                  )}
                </div>
              )}
              <p className="text-gray-500">{step.title}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === step.step ? "active" : ""} ${(step.step < currentStep) && "complete"}`}
            >
              {canclick ? (
                <Link className="step" href={step.path}>
                  {step.step < currentStep ? (
                    <CheckIcon size={24} />
                  ) : (
                    step.step
                  )}
                </Link>
              ) : (
                <div className="step" >
                  {step.step < currentStep ? (
                    <CheckIcon size={24} />
                  ) : (
                    step.step
                  )}
                </div>
              )}
              <p className="text-gray-500">{step.title}</p>
            </div>
          ))}
        </>
      )
      }
    </div >
  )
}

export default StepperBar