import type { Playlist } from "../../../../../types/Playlist.ts";
import PlaylistContainer from "./PlaylistContainer/PlaylistContainer.tsx";
import useStyles from "./PlaylistsTableStyles.ts";

interface Props {
    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    currentPlaylistId?: string;
}

const SongsTable = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.playlistsTableContainer}>
            <div>
                {props.playlists.map((playlist) => (
                    <PlaylistContainer key={playlist.id} playlist={playlist} /> 
                ))}
            </div>
        </div>
    )
}

export default SongsTable;