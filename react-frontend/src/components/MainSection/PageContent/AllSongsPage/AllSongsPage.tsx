import type { Song } from "../../../../types/Song";
import useStyles from "../PageContentStyles"; 
import SongsTable from "../SongsTable/SongsTable";
import type { Playlist } from "../../../../types/Playlist";

interface Props {
    songs: Song[];
    favorites: string[]; 
    setFavorites: (favorites: string[]) => void;
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
    playlists: Playlist[];
}

const AllSongsPage = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.pageContentContainer}>
            <h1>רשימת השירים</h1>
            <SongsTable songs={props.songs} addToFav={props.addToFav} removeFromFav={props.removeFromFav} updatePlaylist={props.updatePlaylist} playlists={props.playlists} />
        </div>
    )
}

export default AllSongsPage;