import type { Song } from "../../../../types/Song";
import useStyles from "../PageContentStyles"; 
import SongsTable from "../SongsTable/SongsTable";

interface Props {
    songs: Song[];
    favorites: string[];
    setFavorites: (favorites: string[]) => void;
}

const FavoritesPage = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.pageContentContainer}>
            <h1>המועדפים שלי</h1>
            <SongsTable songs={props.songs.filter(song => props.favorites.includes(song.id))} />
        </div>
    )
}

export default FavoritesPage;