import type { Song } from "../../../../../types/Song.ts";
import useStyles from "./SongContainerStyles.ts";
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState, useEffect } from "react";
import AddToPlaylist from "../AddToPlaylist/AddToPlaylist.tsx";
import type { Playlist } from "../../../../../types/Playlist.ts";

interface Props {
    song: Song;
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
    playlists: Playlist[];
}

const SongContainer = (props: Props) => {
    const { classes } = useStyles();

    const [isFavorite, setIsFavorite] = useState(props.song.isFavorite);
    const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(false);

    useEffect(() => {
        setIsFavorite(props.song.isFavorite);
    }, [props.song.isFavorite]);

    const toggleFavorite = async () => {
        if (isFavorite) {
            setIsFavorite(false);
            await props.removeFromFav(props.song.id);
        } else {
            setIsFavorite(true);
            await props.addToFav(props.song.id);
        }
    };

    const togglePlaylistMenu = () => {
        setIsPlaylistMenuOpen((prev) => !prev);
    };


    return (
            <div className={classes.songContainer}> 
                <div className={classes.rightSide}>
                    <div onClick={toggleFavorite}>
                        {isFavorite ? (<FavoriteIcon className={classes.coloredIcon} />) : (<FavoriteBorderIcon style={{ cursor: 'pointer'}}/>)}
                </div>
                    <div className={classes.addToPlaylistTriggerContainer} onMouseLeave={() => setIsPlaylistMenuOpen(false)}>
                        <AddIcon className={classes.addIcon} onMouseEnter={togglePlaylistMenu} />
                        <div className={classes.addToPlaylistStylesContainer} style={{ display: isPlaylistMenuOpen ? 'flex' : 'none' }}>
                            <AddToPlaylist playlists={props.playlists} song={props.song} updatePlaylist={props.updatePlaylist} />
                        </div>
                    </div>
                </div>
                <div className={classes.leftSide}>
                    <span>{`${props.song.name} - ${props.song.artist}`}</span>
                    <PlayArrowIcon className={classes.coloredIcon} />
                </div>
            </div>
    )
}

export default SongContainer;