import useStyles from "./AddToPlaylistStyles.ts";
import type { Song } from "../../../../../types/Song.ts";
import type { Playlist } from "../../../../../types/Playlist.ts";
import PlaylistListItem from "./PlaylistListItem/PlaylistListItem.tsx";

interface Props {
    playlists: Playlist[];
    song: Song;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const AddToPlaylist = (props: Props) => {
    const { classes } = useStyles();
    
    const availablePlaylists = props.playlists.filter(
        (playlist) => !playlist.songIds.includes(props.song.id)
    );

    return (
        <div className={classes.addToPlaylistStylesContainer}>
            <div>
                {availablePlaylists.map((playlist) => (
                    <PlaylistListItem key={playlist.id} playlist={playlist} song={props.song} updatePlaylist={props.updatePlaylist} />
                ))}
            </div>
        </div>
    )
}

export default AddToPlaylist;