import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import  Iconbutton from "@material-ui/core/Iconbutton"
import { Grid, Typography } from "@material-ui/core"
import "./home.css"
import TelegramIcon from "@material-ui/icons/Telegram" 
import LinkedInIcon from "@material-ui/icons/LinkedIn" 
import InstagramIcon from "@material-ui/icons/Instagram" 
import {getTranslate} from "../localization/index"
const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "hidden",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]:{
            display:'block'
        }
    },
    divIcons:{
        marginTop:25,
    },
    iconButtonStyle:{
border:"2px solid #2e344e",
marginRight:8,
marginLeft:8,
lineHeight:"45px",
transition:"0.5s",
"&:hover":{
    color:theme.palette.primary.main,
    borderColor:theme.palette.primary.main,
    transition:"1s"
}
    }
}))
const translate=getTranslate()
export default function HomeScreen() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Grid>
                <Typography variant="h1">{translate.hi}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}  </Typography>
                <Typography variant="subtitle1">
                 {translate.desc}
                </Typography>
           <div className={classes.divIcons}>
           <Iconbutton color="secondary" className={classes.iconButtonStyle}  >
           <TelegramIcon/>
           </Iconbutton>
           <Iconbutton color="secondary"  className={classes.iconButtonStyle} >
          <LinkedInIcon/>
           </Iconbutton>
           <Iconbutton color="secondary"  className={classes.iconButtonStyle}>
          <InstagramIcon/>
           </Iconbutton>
           </div>
            </Grid>
        </div>
    )
}