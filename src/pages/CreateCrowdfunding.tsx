import React, { useState } from "react";
import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  makeStyles,
  Button,
  CssBaseline,
} from "@material-ui/core";

import Target from "../components/Crowdfunding/Target";
import Description from "../components/Crowdfunding/Description";
import UploadImage from "../components/Crowdfunding/UploadImage";
import Review from "../components/Crowdfunding/Review";
import Content from "../components/Crowdfunding/Content";
import Return from "../components/Crowdfunding/Return";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 750,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  // content: {
  //   height: "26rem",
  // },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Target", "Description", "Image", "Content", "Return", "Review"];

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return <Target />;
    case 1:
      return <Description />;
    case 2:
      return <UploadImage />;
    case 3:
      return <Content />;
    case 4:
      return <Return />;
    case 5:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const CreateCrowdfunding = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const [] = useState();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Edit Project
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <div >
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div>{getStepContent(activeStep)}</div>
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </div>
          </React.Fragment>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default CreateCrowdfunding;
