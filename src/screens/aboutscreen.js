import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Button } from "@material-ui/core"
import Title from "../components/title"
import { getTranslate } from '../localization/index'
import MainImage from "../assets/images/download.jpg"
import Service from "../components/service"
import PhoneIcon from "@material-ui/icons/PhoneAndroid"
import CodeIcon from "@material-ui/icons/Code"
import WebIcon from "@material-ui/icons/Web"
const useStyles = makeStyles(theme => ({

    root: {
        minHeight: "100vh"
    },
    titleGrid: {
        paddingTop: 60,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20

    },
    phoneicon: {
        color: theme.palette.primary.main,
        fontSize: 46

    },
    
    mainImage: {
        width: "100%",
        height: '100%',


    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        imageGrid: {
            position: "relative",

            "&::after": {
                content: "''",
                position: "absolute",
                right: 0,
                top: "outo",
                height: "55%",
                bottom: 0,
                width: 15,
                background: "rgba(3, 127, 255, 0.6)",
            },
            "&::before": {
                content: "''",
                position: "absolute",
                left: 0,
                top: 0,
                height: "55%",
                width: 15,
                background: "rgba(3, 127, 255, 0.6)",
            },

        },

    },
    aboutTextGrid: {
        paddingLeft: 30,
        paddingRight: 30,
        [theme.breakpoints.down("xs")]: {
            padding: 0,
            marginTop: 20,
            marginBottom: 15
        }
    }
}))
export default function Screen() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid alignItem="flex-start" container className={classes.root}>
            <Grid item container xs={12} className={classes.titleGrid}>
                <Title title={translate.aboutme} />

                <Grid container direction="row" >
                    <Grid item xs={12} md={6} className={classes.imageGrid}>
                        <img className={classes.mainImage} src={MainImage} alt={translate.name} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutTextGrid} >
                        <Typography variant="h3">{translate.hi}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}
                        </Typography>
                        <Typography variant="body1" style={{ marginTop: 10 }}>
                            {translate.desc}
                        </Typography>
                        <Typography variant="body1">
                            <b style={{ display: 'inline-block', width: 95 }}>{translate.fullname}</b>
                            {' : '}
                            {translate.name}
                        </Typography>
                        <Typography variant="body1">
                            <b style={{ display: 'inline-block', width: 95 }}>{translate.age}</b>
                            {' : '}
                            24
                        </Typography>
                        <Typography variant="body1">
                            <b style={{ display: 'inline-block', width: 95 }}>{translate.nationalty}</b>
                            {' : '}
                            {translate.iranian}
                        </Typography>
                        <Typography variant="body1">
                            <b style={{ display: 'inline-block', width: 95 }}>{translate.languages}</b>
                            {' : '}
                            {translate.persian}
                        </Typography>
             
                        <Typography variant="body1">
                            <b style={{ display: 'inline-block', width: 95 }}>{translate.phone}</b>
                            {' : '}
                            (+98)9128934085
                        </Typography>
                        <div style={{ display: "flex", marginTop: 20 }}>
                            <Button variant="contained" color="primary">{translate.download}</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container xs={12} className={classes.titleGrid}>
                <Title title={translate.services} />

                <Grid container direction="row" >

<Service icon ={   <PhoneIcon className={classes.phoneicon} />} title={translate.titlephone}  desc={translate.descphone} />
<Service icon ={   <CodeIcon className={classes.phoneicon} />} title={translate.webdevelopment} desc={translate.titledevelopment} />
<Service icon ={   <WebIcon className={classes.phoneicon} />} title={translate.webdesign}   desc={translate.descdesign} />

                </Grid>
            </Grid>
        </Grid>
        
    )
}