import type { Song } from "../../../types/Song.ts";
import type { Playlist } from "../../../types/Playlist.ts";
import AllSongsPage from "./AllSongsPage/AllSongsPage.tsx";
import FavoritesPage from "./FavoritesPage/FavoritesPage.tsx";
import useStyles from "./PageContentStyles";
import PlaylistsPage from "./PlaylistsPage/PlaylistsPage.tsx";
import PlaylistPageParam from "./PlaylistPageParam/PlaylistPageParam.tsx";

interface Props {
    currentPage: string;
    songs: Song[];
    currentPlaylistId?: string;
    favorites?: string[];
    playlists?: Playlist[];
    setFavorites: (favorites: string[]) => void;
    setPlaylists: (playlists: Playlist[]) => void;
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
    createPlaylist: (name: string) => Promise<void>;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const PageContent = (props: Props) => {
    const { classes } = useStyles();

    const changePage = () => {
        switch (props.currentPage) {
            case 'songs':
                return <AllSongsPage songs={props.songs} favorites={props.favorites || []} setFavorites={props.setFavorites} addToFav={props.addToFav} removeFromFav={props.removeFromFav} updatePlaylist={props.updatePlaylist} playlists={props.playlists || []} />;
            case 'playlists':
                if (props.currentPlaylistId) {
                    return (<PlaylistPageParam songs={props.songs} playlists={props.playlists || []} currentPlaylistId={props.currentPlaylistId} updatePlaylist={props.updatePlaylist} addToFav={props.addToFav} removeFromFav={props.removeFromFav} />);
                } else {
                    return (<PlaylistsPage songs={props.songs} playlists={props.playlists || []} setPlaylists={props.setPlaylists} currentPlaylistId={props.currentPlaylistId} createPlaylist={props.createPlaylist} updatePlaylist={props.updatePlaylist} />
                    );
                }
            case 'favorites':
                return (<FavoritesPage songs={props.songs} favorites={props.favorites || []} setFavorites={props.setFavorites} addToFav={props.addToFav} removeFromFav={props.removeFromFav} updatePlaylist={props.updatePlaylist} playlists={props.playlists || []} />);
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