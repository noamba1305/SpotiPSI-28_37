import type { Song } from "../../../../../types/Song.ts";
import useStyles from "./SongContainerStyles.ts";
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from "react";

interface Props {
    song: Song;
}

const SongContainer = (props: Props) => {
    const { classes } = useStyles();

    const [isFavorite, setIsFavorite] = useState(props.song.isFavorite);

    const toggleFavorite = () => {
        if (isFavorite) {
            setIsFavorite(false);
            // להוסיף קוד מחיקה לשרת
        } else {
            setIsFavorite(true);
            // להוסיף קוד בקשה לשרת
        }
    };

    const initFavoriteLogo = () => {
        if (isFavorite) {
            return <FavoriteIcon className={classes.coloredIcon} onClick={() => {toggleFavorite()}} />
        } else {
            return <FavoriteBorderIcon onClick={() => {toggleFavorite()}} />
        }
    };


    return (
            <div className={classes.songContainer}> 
                <div className={classes.rightSide}>
                    <div onClick={initFavoriteLogo}>{initFavoriteLogo()}</div>
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