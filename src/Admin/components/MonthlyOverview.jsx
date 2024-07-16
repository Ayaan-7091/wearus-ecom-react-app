import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { AccountBoxOutlined, TrendingUp } from "@mui/icons-material"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Groups2Icon from '@mui/icons-material/Groups2';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function MonthlyOverview(){

    const salesData = [
        {
            stats:'245k',
            title:'sales',
            color:'#FAD02E',
            icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
        },
        {
            stats:'12.5k',
            title:'customers',
            color:'#0A79DF',
            icon:<Groups2Icon sx={{fontSize:"1.75rem"}}/>
        },
        {
            stats:'1.54k',
            title:'products',
            color:'#FF3031',
            icon:<LocalMallIcon sx={{fontSize:"1.75rem"}}/>
        },
        {
            stats:'1.54k',
            title:'Revenue',
            color:'#019031',
            icon:<CurrencyRupeeIcon sx={{fontSize:"1.75rem"}}/>
        },
    ]

    const renderState=()=>{
        return salesData.map((item,index)=>(
            <Grid item xs={12} sm={3} key={index}>
                <Box sx={{
                    display:"flex",
                    alignItems:"center"
                }}>
                    <Avatar variant="rounded" sx={{
                        mr:3,
                        width:44,
                        height:44,
                        color:"white",
                        background:`${item.color}`
                    }}>
                        {item.icon}
                    </Avatar>

                    <Box sx={{display:"flex",flexDirection:"column"}}>
                        <Typography variant="caption">{item.title}</Typography>
                        <Typography variant="h6">{item.stats}</Typography>

                    </Box>
                </Box>
            </Grid>
        ))
    }
    return(
        <div  className="border-2 rounded-2xl shadow-sm relative">
            <CardHeader
            title="Monthly Overview"
            action={
                <IconButton size="small">
                    <MoreVertIcon/>
                </IconButton>
            }

            subheader={
                <Typography variant="body2">
                    <Box component="span" sx={{fontWeight:600,color:'text.primary'}} >
                        Total 45.8% Growth
                    </Box>
                    this month
                </Typography>
            }
            titleTypographyProps={{
                sx:{
                    mb:2.5,
                    lineHeight:"2rem !important",
                    letterSpacing:".15px !important"
                }
            }}
            />
            <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
                <Grid container spacing={[5,0]}>
                {renderState()}
                </Grid>
            </CardContent>
        </div>
    )
}