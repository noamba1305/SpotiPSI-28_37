import type { Song } from "../../../types/Song.ts";
import type { Playlist } from "../../../types/Playlist.ts";
import AllSongsPage from "./AllSongsPage/AllSongsPage.tsx";
import FavoritesPage from "./FavoritesPage/FavoritesPage.tsx";
import useStyles from "./PageContentStyles"; 
import PlaylistsPage from "./PlaylistsPage/PlaylistsPage.tsx";

interface Props {
    currentPage: string;
    songs: Song[];
    currentPlaylistId?: string;
    favorites?: string[];
    playlists?: Playlist[];
    setFavorites: (favorites: string[]) => void;
    setPlaylists: (playlists: Playlist[]) => void;
}

const PageContent = (props: Props) => {
    const { classes } = useStyles();

    const changePage = () => {
        switch (props.currentPage) {
            case 'songs':
                return <AllSongsPage songs={props.songs} favorites={props.favorites || []} setFavorites={props.setFavorites} />
                ; 
            case 'playlists':
                return (<PlaylistsPage songs={props.songs} playlists={props.playlists || []} setPlaylists={props.setPlaylists} currentPlaylistId={props.currentPlaylistId} />
                ); 
            case 'favorites':
                return (<FavoritesPage songs={props.songs} favorites={props.favorites || []} setFavorites={props.setFavorites} />
                ); 
            default:
                return <h1>Couldn't find page!</h1>;
        }
    };

    return (
        <div className={classes.pageContentContainer}>
            {changePage()}
        </div>
    )
}

export default PageContent;