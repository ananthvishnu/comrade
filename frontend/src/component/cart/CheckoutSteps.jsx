import React from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import "./CheckoutSteps.css";
import BottomTab from "../../more/BottomTab";
import Foot from "../../Foot";


const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <LocalShippingOutlinedIcon />,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <LibraryAddCheckOutlinedIcon />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalanceOutlinedIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <>

      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "#155250c2" : "#000",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    
      <BottomTab />
     
    </>
  );
};

export default CheckoutSteps;