import type { Song } from "../../../../types/Song";
import SongContainer from "./SongContainer/SongContainer";
import useStyles from "./SongsTableStyles";
import { useAudio } from "../../../AudioPlayer/AudioProvider";

interface Props {
    songs: Song[];
}


const SongsTable = (props: Props) => {

    const { classes } = useStyles();
    const { onPlay } = useAudio();

    return (
        <div className={classes.songsTableContainer}>
            <div>
                {props.songs.map((song) => (
                    <SongContainer key={song.id} song={song} onPlay={onPlay} songs={props.songs}/> 
                ))}
            </div>
        </div>
    )
}

export default SongsTable;