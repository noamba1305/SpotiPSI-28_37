import { useNavigate } from "react-router-dom";
import "./MainSectionStyles"
import Sidebar from "./Sidebar/Sidebar";
import PageContent from "./PageContent/PageContent.tsx";
import useStyles from "./MainSectionStyles";
import type { Song } from "../../types/Song.ts";
import type { Playlist } from "../../types/Playlist.ts";

interface Props {
    currentPage: string;
    currentPlaylistId?: string;
    favorites?: string[];
    playlists?: Playlist[];
    param?: string; 
    songs: Song[];
    setFavorites: (favorites: string[]) => void;
    setPlaylists: (playlists: Playlist[]) => void;
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
}

const MainSection = (props: Props) => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const setCurrentPage = (page: string) => {
        navigate(`/${page}`); 
    };

    return (
<div className={classes.mainSectionContainer}>
            <Sidebar currentPage={props.currentPage} setCurrentPage={setCurrentPage} />
            <PageContent 
                currentPage={props.currentPage} 
                songs={props.songs} 
                currentPlaylistId={props.currentPlaylistId}
                favorites={props.favorites}
                setFavorites={props.setFavorites}
                playlists={props.playlists}
                setPlaylists={props.setPlaylists}
                addToFav={props.addToFav}
                removeFromFav={props.removeFromFav}
            />
        </div>
    )
}

export default MainSection;