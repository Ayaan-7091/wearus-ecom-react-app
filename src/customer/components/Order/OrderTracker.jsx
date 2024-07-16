import { Step, StepLabel, Stepper } from "@mui/material";


export default function OrderTracker({activeStep}){

    const steps=[
        'placed',
        'Order Confirmed',
        'Shipped',
        'Out for Delivery',
        'Delivered'
    ]

    return(

        <div className="w-full">
        <Stepper activeStep={activeStep} alternativeLabel sx={{ overflowX: 'auto' }}>

        {steps.map((label)=><Step>
            <StepLabel sx={{fontSize:'44px',}}>{label}</StepLabel>
        </Step>)}
        

        </Stepper>
        </div>
    )
}