import React, { useState } from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProfileImage from "../assets/images/profile.jpg"
import { getTranslate, changeLanguage, lang } from '../localization/index';
import HomeScreen from "./homescreen"
import AboutScreen from "./aboutscreen"
import ContactScreen from "./contactscreen"
import ResumeScreen from "./resumescreen"
import PortfoliosScreen from "./portfoliosscreen"
import "./index.css"

const translate = getTranslate()
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },


    menuButton: {
        widt: 50,
        height: 50,
        backgroundColor: theme.palette.primary.backgroundColor,
        marginLeft: 0,
        zIndex:1,
        margin: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'},
            borderRadius: 0,
            border: "1px solid #2e344e ",
            top: 20,
            Position: "fixed",
           
        

    },
    // necessary for content to be below app bar
    toDrawer: {
        width: "100%",
        padding: 20,

        borderBottom: "1px solid #2e344e",
        textAlign: "center"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#191d2b",

        borderRight: "1px solid #2e344e"
    },
    bottomDrawer: {
        padding: 8,
        borderTop: "1px solid #2e344e"
    },
    centerDrower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    content: {
        flexGrow: 1,
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        position:'relative'
    },
    profileImage: {
        width: 200,
        height: 200,
        maxWidth: "100%",
        borderRadius: 100,
        border: "7px solid #2e344e",
        verticalAlign: "middle"

    }
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const [page, setPage] = useState(2)
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <div className={classes.toDrawer}>
                <img src={ProfileImage} alt={translate.name} className={classes.profileImage} />
            </div>
            <div className={classes.centerDrower}>
                <List style={{ width: "100%" }}>

                    <ListItem className="listItem" style={{ backgroundColor: page === 0 ? "#037fff" : "transparent",paddingLeft:0,paddingRight:0 }} onClick={() => {setPage(0);setMobileOpen(false)}} button>

                        <ListItemText disableTypography={true}
                            children={<Typography className="ListItemText" style={{ color: page === 0 ? "#FFF" : "#a4acc4" }} variant="body2">{translate.home}</Typography>} />
                             <div className="overlay"/>                    </ListItem>
                    <ListItem className="listItem" style={{ backgroundColor: page === 1 ? "#037fff" : "transparent",paddingLeft:0 ,paddingRight:0}} onClick={() => {setPage(1);setMobileOpen(false)}} button>

                        <ListItemText disableTypography={true}
                            children={<Typography className="ListItemText" style={{ color: page === 1 ? "#FFF" : "#a4acc4" }} variant="body2">{translate.about}</Typography>} />
                             <div className="overlay"/>
                    </ListItem>
                   
                    <ListItem className="listItem" style={{ backgroundColor: page === 2 ? "#037fff" : "transparent",paddingLeft:0 ,paddingRight:0}} onClick={() => {setPage(2);setMobileOpen(false)}} button>

                        <ListItemText disableTypography={true}
                            children={<Typography className="ListItemText" style={{ color: page === 2 ? "#FFF" : "#a4acc4" }} variant="body2">{translate.resume}</Typography>} />
                             <div className="overlay"/>
                    </ListItem>
                    <ListItem className="listItem" style={{ backgroundColor: page === 3 ? "#037fff" : "transparent",paddingLeft:0 ,paddingRight:0}} onClick={() => {setPage(3);setMobileOpen(false)}} button>

                        <ListItemText disableTypography={true}
                            children={<Typography className="ListItemText" style={{ color: page === 3 ? "#FFF" : "#a4acc4" }} variant="body2">{translate.portfolios}</Typography>} />
                             <div className="overlay"/>
                    </ListItem>
                    <ListItem className="listItem" style={{ backgroundColor: page === 4 ? "#037fff" : "transparent",paddingLeft:0,paddingRight:0 }} onClick={() => {setPage(4);setMobileOpen(false)}} button>

                        <ListItemText disableTypography={true}
                            children={<Typography className="ListItemText" style={{ color: page === 4 ? "#FFF" : "#a4acc4" }} variant="body2">{translate.cintact}</Typography>} />
                             <div className="overlay"/>
                    </ListItem>
                </List >
            </div>

            <div className={classes.bottomDrawer}>
                <Button color={lang === "fa" ? "primary" : "secondary"} onClick={() => changeLanguage("fa")}>فارسی</Button>
                {'/'}
                <Button color={lang === "en" ? "primary" : "secondary"} onClick={() => changeLanguage("en")}>English</Button>
            </div>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const getPage = () => {
        switch (page) {
            case 0:
                return <HomeScreen />

            case 1:
                return <AboutScreen />

            case 2:
                return <ResumeScreen />

            case 3:
                return <PortfoliosScreen />

            case 4:
                return <ContactScreen />

            default: <HomeScreen />

        }

    }

    return (
        <div className={classes.root}>
            <CssBaseline />


            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>



            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"

                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <span className="line1"/>  
                <span className="line2"/>  
                <span className="line3"/>  
                <span className="line4"/>  
                {getPage()}
              
            </main>
        </div>
    );
}

export default ResponsiveDrawer;