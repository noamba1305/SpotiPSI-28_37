import type { Song } from "../../../../../types/Song.ts";
import useStyles from "./SongContainerStyles.ts";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
    song: Song;
}

const SongContainer = (props: Props) => {
    const { classes } = useStyles();

    return (
            <div className={classes.songContainer}> 
                <div className={classes.rightSide}>
                    <FavoriteBorderIcon />
                    <AddIcon />
                </div>
                <div className={classes.leftSide}>
                    <span>{`${props.song.name} - ${props.song.artist}`}</span>
                    <PlayArrowIcon className={classes.coloredIcon} />
                </div>
            </div>
    )
}

export default SongContainer;