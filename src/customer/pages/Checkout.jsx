import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import AddressForm from '../components/checkout/AddressForm';
import OrderSummary from '../components/checkout/OrderSummary';

const steps = ['Log In', 'Delivery Address', 'Order Summary','Payment'];

export default function Checkout() {


  const [activeStep, setActiveStep] = React.useState(0);

  //ROUTING
  const location = useLocation()
  const querySearch = new URLSearchParams(location.search)

  const step = querySearch.get("step")


 

  const handleNext = () => {

 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (

    <div className='px-10 lg:px-20 pt-8 text-sm'>
 <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step} sx={{ overflowX: 'auto' }} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          
            <Box sx={{ flex: '1 1 auto' }} />
           

          </Box>
          <div>
            {step==2?<AddressForm />:<OrderSummary />}
          </div>
        </React.Fragment>
      )}
    </Box>
    </div>
   
  );
}
