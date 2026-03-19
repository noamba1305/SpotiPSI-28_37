import type { Playlist } from "../../../../types/Playlist";
import type { Song } from "../../../../types/Song";
import useStyles from "../PlaylistPageParam/PlaylistPageParamStyles";
import SongsTable from "../SongsTable/SongsTable";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


interface Props {
    songs: Song[];
    playlists: Playlist[];
    currentPlaylistId?: string;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
}

const PlaylistsPageParam = (props: Props) => {
    const { classes } = useStyles();
   
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/playlists');
    }


    const selectedPlaylist = (props.playlists || []).find((playlist) => playlist.id === props.currentPlaylistId);
    if (!selectedPlaylist) {
        return <h1>Couldn't find playlist! </h1>;
    }
    const playlistSongs = props.songs.filter((song) => selectedPlaylist.songIds.includes(song.id));

    return (
        <div className={classes.playlistsPageParamContainer}>
            <div className={classes.btnAndTitle}>
                <h1>{selectedPlaylist.name}</h1>
                <ArrowBackIcon fontSize="large" onClick={goBack} style={{cursor: 'pointer'}} />
            </div>

            <SongsTable songs={playlistSongs} addToFav={props.addToFav} removeFromFav={props.removeFromFav} updatePlaylist={props.updatePlaylist} playlists={props.playlists || []} />
        </div>
    );
}

export default PlaylistsPageParam;