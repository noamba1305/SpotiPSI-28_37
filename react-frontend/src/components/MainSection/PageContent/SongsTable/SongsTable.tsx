import type { Song } from "../../../../types/Song";
import SongContainer from "./SongContainer/SongContainer";
import useStyles from "./SongsTableStyles";
import type { Playlist } from "../../../../types/Playlist";

interface Props {
    songs: Song[];
    favorites?: string[];
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
    playlists: Playlist[];
}

const SongsTable = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songsTableContainer}>
            <div>
                {props.songs.map((song) => (
                    <SongContainer key={song.id} song={song} addToFav={props.addToFav} removeFromFav={props.removeFromFav} updatePlaylist={props.updatePlaylist} playlists={props.playlists} />
                ))}
            </div>
        </div>
    )
}

export default SongsTable;