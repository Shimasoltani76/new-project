import { createTheme } from '@material-ui/core/styles'
import palette from "./palette"
import { getDirection } from "../localization/index"
// import { getFont } from "../localization"
let theme=createTheme()
 theme = createTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize:getDirection()==='rtl' ? 50:52,
            lineHeight: "4rem",
            color:"#fff",
            // fontFamily:getFont(),
            [theme.breakpoints.down("xs")] : {
                fontSize: getDirection()==='rtl'? 40:42,

            }
        },
        h2: {
            fontWeight: 700,
            fontSize: getDirection()==='rtl' ? 38:40,
            lineHeight: "3.2857rem",
            color:"#fff"
            // fontFamily:getFont()
        },
        h3: { color:"#fff",
            fontWeight: 600,
            fontSize: getDirection()==='rtl' ? 30:32,
            lineHeight: "2.7rem",
            // fontFamily:getFont()
            textAlign:"left"
        },
        h4: {
            fontWeight: 600,
            fontSize: getDirection()==='rtl' ? 26:28,
            lineHeight: "2.43rem",
            // fontFamily:getFont()
            color:"#fff"
        },

        h5: {
            fontWeight: 600,
            fontSize: getDirection()==='rtl' ? 21:23,
            lineHeight: "2.14rem",
            // fontFamily:getFont(),
            color:"#fff"
        },

        h6: {
            fontWeight: 600,
            fontSize: getDirection()==='rtl' ? 16:18,
            lineHeight: "1.857rem",
            // fontFamily:getFont(),
            color:"#fff"
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: getDirection()==='rtl' ? 18:20,
            lineHeight: "2rem",
            // fontFamily:getFont(),
            marginTop: 15
        },
        body1: {
            color: "#a4acc4",
            fontSize:getDirection()==='rtl' ? 16:18,
            lineHeight: "1.8rem",
            // fontFamily:getFont(),
            marginTop: 15,
            textAlign:getDirection()==='rtl' ? 'justify':"left",
        },
        body2: {
            color: "#a4acc4",
            fontSize: getDirection()==='rtl'? 12:14,
            lineHeight: "1.8rem",
            // fontFamily:getFont(),
            fontWeight: 600,
            letterSpacing:1,
            textAlign: getDirection() === "rtl" ? "justify" : "left"
        },
        button: {
            color: "#FFF",
            fontSize: getDirection() === "rtl" ? 12 : 14,
            // fontFamily:getFont(),
            lineHeight: "1.8rem",
            fontWeight: 400,
            letterSpacing: 2
        }


    }

})
export default theme