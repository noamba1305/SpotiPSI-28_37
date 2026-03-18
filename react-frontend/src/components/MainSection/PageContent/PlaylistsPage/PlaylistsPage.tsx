import type { Playlist } from "../../../../types/Playlist";
import type { Song } from "../../../../types/Song";
import useStyles from "../PageContentStyles"; 
import PlaylistsTable from "./PlaylistsTable/PlaylistsTable";

interface Props {
    songs: Song[];
    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    currentPlaylistId?: string;
}

const PlaylistsPage = (props: Props) => {
    const { classes } = useStyles();


    return (
        <div className={classes.pageContentContainer}>
            <h1>הפלייליסטים שלי</h1>
            <PlaylistsTable playlists={props.playlists} setPlaylists={props.setPlaylists} currentPlaylistId={props.currentPlaylistId} />
        </div>
    )
}

export default PlaylistsPage;