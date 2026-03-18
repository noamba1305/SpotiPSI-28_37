import { useNavigate } from "react-router-dom";
import type { Playlist } from "../../../../../../types/Playlist";
import useStyles from "./PlaylistContainerStyles";

interface Props {
    playlist: Playlist;
}

const PlaylistContainer = (props: Props) => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const setCurrentPlaylistPage = (page: string) => {
        navigate(`/playlists/${page}`); 
    };

    return (
            <div className={classes.playlistContainer} onClick={() => setCurrentPlaylistPage(props.playlist.id)}> 
                <h2>{props.playlist.name}</h2>
                <p>{props.playlist.songIds.length} שירים</p>
            </div>
    )
}

export default PlaylistContainer;