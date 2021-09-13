import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, LinearProgress } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

    },
    progreesdiv: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    progrees: {
        width: "90%",
        marginLeft: 18,
        height: 6,
        backgroundColor: '#2e344e'
    }
}))
export default function Skill({ value,title }) {
    const [val, setVal] = useState(40)
    const classes = useStyles()
    useEffect(() => {
        setTimeout(() => {
            if (val === value) {
                return
            }
            setVal(val => val + 5)
        }, 100)
    }, [val])
    return (
        <div className={classes.root}>
            <Typography variant="h6">{title}</Typography>
            <div className={classes.progreesdiv}>
                <Typography variant="body1">{value}%</Typography>
                <LinearProgress className={classes.progrees} variant="determinate" value={val}></LinearProgress>
            </div>
        </div>
    )


}