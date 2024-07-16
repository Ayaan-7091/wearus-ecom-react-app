import {  Button, Card, CardContent, Typography, styled } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Achievement(){

    const navigate = useNavigate()

    const TriangleImg = styled("img")({
        right:0,
        bottom:0,
        height:170,
        position:"absolute"
    })

    const TrophyImg = styled("img")({
        right:36,
        bottom:20,
        height:98,
        position:"absolute"
    })

    return(
       <div  className="border-2 rounded-2xl shadow-sm relative">
        <CardContent>
            <Typography variant="h6" sx={{letterSpacing:".25px",fontWeight:"bold",fontFamily:""}}>WEARUS</Typography>
            <Typography variant="body2">Congratulations</Typography>
            <Typography variant="h5" sx={{my:3.1}}>1.3k</Typography>
            <Button size="small" variant="contained" onClick={()=>navigate('/')}>View Site</Button>

            <TriangleImg src=""></TriangleImg>
            <TrophyImg src="https://static.vecteezy.com/system/resources/previews/009/315/016/original/winner-trophy-in-flat-style-free-png.png"/>
        </CardContent>
       </div>
    )
}