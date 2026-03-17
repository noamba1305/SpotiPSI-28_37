import useStyles from "./SidebarStyles.ts";
import  { Home, LibraryMusic, Favorite } from '@mui/icons-material'

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            <div className={classes.barItems}>כל השירים <Home /></div>
            <div className={classes.barItems}>פלייליסטים <LibraryMusic /></div>
            <div className={classes.barItems}>מועדפים <Favorite /></div>
            
        </div>

    )
}

export default Sidebar;