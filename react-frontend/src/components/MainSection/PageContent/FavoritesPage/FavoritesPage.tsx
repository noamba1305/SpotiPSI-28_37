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

const FavoritesPage = (props: Props) => {
    const { classes } = useStyles();
    
    const favoriteSongs = props.songs.filter(song => song.isFavorite);

    return (
        <div className={classes.pageContentContainer}>
            <h1>המועדפים שלי</h1>
            <SongsTable songs={favoriteSongs} addToFav={props.addToFav} removeFromFav={props.removeFromFav} updatePlaylist={props.updatePlaylist} playlists={props.playlists} />
        </div>
    )
}

export default FavoritesPage;