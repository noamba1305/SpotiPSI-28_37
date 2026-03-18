import type { Song } from "../../../../types/Song";
import useStyles from "../PageContentStyles"; 
import SongsTable from "../SongsTable/SongsTable";

interface Props {
    songs: Song[];
    favorites: string[];
    setFavorites: (favorites: string[]) => void;
    addToFav: (songId: string) => Promise<void>;
    removeFromFav: (songId: string) => Promise<void>;
}

const FavoritesPage = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.pageContentContainer}>
            <h1>המועדפים שלי</h1>
            <SongsTable songs={props.songs.filter(song => song.isFavorite)} addToFav={props.addToFav} removeFromFav={props.removeFromFav} />
        </div>
    )
}

export default FavoritesPage;