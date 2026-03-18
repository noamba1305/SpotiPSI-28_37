import type { Song } from "../../../../types/Song";
import useStyles from "../PageContentStyles";
import SongContainer from "../SongContainer/SongContainer";

interface Props {
    songs: Song[];
}

const AllSongsPage = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.pageContentContainer}>
            <h1>רשימת השירים</h1>
            <div>
                {props.songs.map((song) => (
                    <SongContainer key={song.id} song={song} /> 
                ))}
            </div>
        </div>
    )
}

export default AllSongsPage;