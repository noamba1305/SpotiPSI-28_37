import type { Song } from "../../../../types/Song";
import SongContainer from "./SongContainer/SongContainer";
import useStyles from "./SongsTableStyles";

interface Props {
    songs: Song[];
    favorites?: string[];
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
}

const SongsTable = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songsTableContainer}>
            <div>
                {props.songs.map((song) => (
                    <SongContainer key={song.id} song={song} addToFav={props.addToFav} removeFromFav={props.removeFromFav} /> 
                ))}
            </div>
        </div>
    )
}

export default SongsTable;