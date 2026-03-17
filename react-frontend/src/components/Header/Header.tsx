import useStyles from "./HeaderStyles";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Header = () => {
    const { classes } = useStyles();

    return (
        <div className={`${classes.headerContainer}`}>
            <div className={`${classes.title}`}>
                <h2>SpotiPSI</h2>
                <MusicNoteIcon fontSize="large" />
            </div>
        </div>

    )
}

export default Header;
