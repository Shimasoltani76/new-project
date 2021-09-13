import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
    root: {

        position: "relative",
        marginBottom: 60,
        height: 72,
width:"100%"
    }, 
    title: {
        textAlign: "left",
        "&::after": {
            content: "''",
            position: "absolute",
            left: 0,
            top: "auto",
            bottom: 0,
            height: "10px",
            borderRadius: "100px",
        width: "35px",
        background:"#037fff",
    },
    "&::before":{
        
    content: "''",
    position: "absolute",
    left: 0,
    top: "auto",
    bottom: 0,
    height: "10px",
borderRadius: "100px",
width: "100px",
background:"rgba(3, 127, 255, 0.3)",
    }
},
subtitle:{
    fontSize:"4.5rem",
    position:"absolute",
    left:15,
    top:"100%",
    lineHeight:"1rem",
    fontWeight:900,
color:'rgba(25,29,43,0.4)',
display:'inline-block',
zIndex:-1,
transform:'translateY(-40%)'

}

}))

export default function Title({title}) {
    const classes = useStyles()
    return (
        <div className={classes.root}  >
            <Typography className={classes.title} variant="h2">
           {title}</Typography>
            <span className={classes.subtitle }>{title}</span>

        </div>
    )
}