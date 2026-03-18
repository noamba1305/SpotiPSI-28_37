import type { Song } from "../../../../types/Song";
import SongContainer from "./SongContainer/SongContainer";
import useStyles from "./SongsTableStyles";

interface Props {
    songs: Song[];
}

const SongsTable = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songsTableContainer}>
            <div>
                {props.songs.map((song) => (
                    <SongContainer key={song.id} song={song} /> 
                ))}
            </div>
        </div>
    )
}

export default SongsTable;