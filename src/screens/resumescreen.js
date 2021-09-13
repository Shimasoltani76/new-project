import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import Title from "../components/title"
import { getTranslate } from '../localization/index'
import Skill from "../components/skill"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"
import Mystepper from "../components/mystepper"
const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh"
    },
    skillGrid: {
        paddingTop: 60,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20
    },
    skillGrid:{
        paddingTop:60,
        paddingBottom:60,
        paddingRight:30,
        paddingLeft:30,
        [theme.breakpoints.down("xs")]:{
          paddingRight:5,
        paddingLeft:5,
        }
      },
      skillGridSecond:{
          marginLeft:10
      }
}))
export default function ResumeScreen() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid alignItem="flex-start" container className={classes.root}>
            <Grid item container xs={12} className={classes.skillGrid}>
                <Title title={translate.myskill} />
                <Grid container direction="row" >
                    <Grid item xs={12} md={6}  >
                        <Skill title={translate.javaScript} value={60} />
                        <Skill title={translate.html} value={75} />
                        <Skill title={translate.node} value={90} />
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <Skill title={translate.reactjs} value={100} />
                        <Skill title={translate.php} value={80} />
                        <Skill title={translate.reactnative} value={95} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container xs={12} className={classes.skillGrid}>
                <Title title={translate.resume} />
                <Grid container direction="row" alignItems="center" justify="flex-start">
                    <BusinessCenterIcon style={{ color: "#fff", fontSize: 40 }} />
                    <Typography className={classes.skillGridSecond} variant="h4">{translate.workingexperience}</Typography>
                    <Grid container style={{marginTop:15,marginBottom:15}}>
                        <Mystepper steps={translate.workingSteps}/>
                    </Grid>
              
                </Grid>
                <Grid container direction="row" alignItems="center" justify="flex-start">
                    <LocalLibraryIcon style={{ color: "#fff", fontSize: 40 }} />
                    <Typography className={classes.skillGridSecond} variant="h4">{translate.educationalqualifications}</Typography>
                    <Grid container style={{marginTop:15,marginBottom:15}}>
                        <Mystepper steps={translate.educationalSteps} />
                    </Grid>
              
                </Grid>
            </Grid>
        </Grid>

    )
}