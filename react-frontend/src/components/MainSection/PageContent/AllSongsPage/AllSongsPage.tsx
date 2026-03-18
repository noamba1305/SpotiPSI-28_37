import type { Song } from "../../../../types/Song";
import useStyles from "../PageContentStyles"; 
import SongsTable from "../SongsTable/SongsTable";

interface Props {
    songs: Song[];
}

const AllSongsPage = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.pageContentContainer}>
            <h1>רשימת השירים</h1>
            <SongsTable songs={props.songs} />
        </div>
    )
}

export default AllSongsPage;