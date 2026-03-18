import type { Song } from "../../../types/Song.ts";
import AllSongsPage from "./AllSongsPage/AllSongsPage.tsx";
import useStyles from "./PageContentStyles"; 

interface Props {
    currentPage: string;
    songs: Song[];
}

const PageContent = (props: Props) => {
    const { classes } = useStyles();

    const changePage = () => {
        switch (props.currentPage) {
            case 'songs':
                return <AllSongsPage songs={props.songs}/>; 
            case 'playlists':
                return;
            case 'favorites':
                return; 
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