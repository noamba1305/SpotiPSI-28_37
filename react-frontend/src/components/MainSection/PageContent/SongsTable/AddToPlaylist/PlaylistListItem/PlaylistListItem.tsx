import useStyles from "./PlaylistListItemStyles.ts";
import type { Song } from "../../../../../../types/Song.ts";
import type { Playlist } from "../../../../../../types/Playlist.ts";

interface Props {
    playlist: Playlist;
    song: Song;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const PlaylistListItem = (props: Props) => {
    const { classes } = useStyles();

    const pressed = () => {
        props.updatePlaylist(props.song.id, props.playlist.id);
    };

    return (
        <div className={classes.playlistListItemContainer} onClick={pressed}>
            <span>{props.playlist.name}</span>
        </div>
    )
}

export default PlaylistListItem;