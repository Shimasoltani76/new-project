import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import {getTranslate} from "../localization/index"

const useStyles = makeStyles(theme => ({
    root: {
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 20
    },
    main: {
        backgroundColor: "#191d2b",
        zIndex: 1,
        border: "1px solid #2e344e",
        borderTop: "5px solid #2e344e",
        padding: theme.spacing(8),
        transition: "1s",
        "&:hover": {
            borderTopColor: theme.palette.primary.main,
            transition: "1s",
        }
    },
  
    title: {
        marginTop: 15,
        position: "relative",
        paddingBottom:20,
        "&::before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: "auto",
            bottom: 0,
            height: 2,
            width: 50,
            backgroundColor:"#2e344e"
        },
        desc:{
            marginTop:15,
            
        }
    }


}))
export default function Service({title,desc,icon}) {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid item lg={4} md={6} xs={12} className={classes.root}>
            <Grid container className={classes.main} direction="column"
                alignItems="flex-start">
             {icon}
                <Typography variant="h5" className={classes.title}>{title}
                </Typography>
                <Typography variant="body1" className={classes.desc}>
             {desc}
                </Typography>
            </Grid>
        </Grid>
    )



}