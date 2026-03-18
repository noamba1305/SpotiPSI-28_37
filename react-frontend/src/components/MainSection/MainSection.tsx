import { useNavigate } from "react-router-dom";
import "./MainSectionStyles"
import Sidebar from "./Sidebar/Sidebar";
import PageContent from "./PageContent/PageContent.tsx";
import useStyles from "./MainSectionStyles";
import type { Song } from "../../types/Song.ts";

interface Props {
    currentPage: string;
    currentPlaylistId?: string;
    favorites?: string[];
    playlists?: Playlist[];
    param?: string; 
    songs: Song[];
    setFavorites: (favorites: string[]) => void;
    setPlaylists: (playlists: Playlist[]) => void;
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
            <PageContent currentPage={props.currentPage} songs={props.songs} />
        </div>
    )
}

export default MainSection;