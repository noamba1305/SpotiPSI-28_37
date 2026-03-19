import { useState } from "react";
import type { Playlist } from "../../../../types/Playlist";
import type { Song } from "../../../../types/Song";
import useStyles from "./PlaylistsPageStyles"; 
import PlaylistsTable from "./PlaylistsTable/PlaylistsTable";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from "./AddPlaylistDialog/AddPlaylistDialog";



interface Props {
    songs: Song[];
    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    currentPlaylistId?: string;
    createPlaylist: (name: string) => Promise<void>;
    updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const PlaylistsPage = (props: Props) => {
    const { classes } = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className={classes.playlistsPageContainer}>
            <div className={classes.btnAndTitle}>
                <h1>הפלייליסטים שלי</h1>
                <Button variant="outlined" style={{ color: "#9B59B6", borderColor: "#9B59B6", borderRadius: "2rem" }} startIcon={<AddIcon />} onClick={() => setDialogOpen(true)}>צור פלייליסט</Button>
            </div>
            <PlaylistsTable playlists={props.playlists} setPlaylists={props.setPlaylists} currentPlaylistId={props.currentPlaylistId} createPlaylist={props.createPlaylist} updatePlaylist={props.updatePlaylist} />
            <FormDialog open={dialogOpen} onClose={() => setDialogOpen(false)} createPlaylist={props.createPlaylist} />
        </div>
    )
}

export default PlaylistsPage;