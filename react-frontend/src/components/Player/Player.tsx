import "./PlayerStyles.ts";
import useStyles from "./PlayerStyles.ts";

const Player = () => {
    const { classes } = useStyles();
    return (
        <div className={`${classes.playerContainer}`}>
            
        </div>

    )
}

export default Player;