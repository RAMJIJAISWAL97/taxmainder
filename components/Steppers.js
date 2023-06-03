import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "JUST AFTER DELIVERY",
    description: `In this situation, it would be a mother's helper – as the mother would be at home. A mother's helper will generally have the same responsibility of a nanny; which can include but are not limited to childcare, light housekeeping, meal preparation, helping mother in breast feeding, laundry etc.`,
  },
  {
    label: "WORKING COUPLE",
    description:
      "Kids can be very demanding of attention, which can create a big problem to you, if both of you're working or have to go away on a business trip or need to go outside for couple of hours. nanny at your home, then you need not worry about your kids. It will help you to give your attention to your job or other works, because you know your children are under a trained and watchful eye.",
  },
  {
    label: "SINGLE PARENT",
    description: `To provide care for your little champ is one of the most important jobs for any single parent to accomplish. Single parent have so much to do for his/her child that it feels like there is never a break for them. Nannies can calm this feeling, acting like an extension of the mother when parent can't be there.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel><h3>{step.label}</h3></StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {index === steps.length - 1 ? null : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                  )}
                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? null : "Continue"}
                  </Button> */}
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Read Again!!!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
