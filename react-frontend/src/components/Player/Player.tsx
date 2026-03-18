import "./PlayerStyles.ts";
import useStyles from "./PlayerStyles.ts";

const Player = () => {
    const { classes } = useStyles();
    return (
        <div className={`${classes.playerContainer}`}>
            <h3>נגן השירים</h3>
        </div>

    )
}

export default Player;
