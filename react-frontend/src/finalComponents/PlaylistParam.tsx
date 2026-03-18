import type { Song } from '../types/Song.ts';
import useStyles from '../AppStyles.ts';
import Header from '../components/Header/Header.tsx';
import MainSection from '../components/MainSection/MainSection.tsx';
import Player from '../components/Player/Player.tsx';
import { useParams } from 'react-router-dom';
import type { Playlist } from '../types/Playlist.ts';

interface Props {
  songs: Song[];
  setFavorites: (songs: string[]) => void;
  setPlaylists: (songs: Playlist[]) => void;
};

const PlaylistParam = (prop: Props) => {
  const { classes } = useStyles();
  const { playlistId } = useParams(); 
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'/playlists/:playlistId'} param={playlistId} songs={prop.songs} setFavorites={prop.setFavorites} setPlaylists={prop.setPlaylists} />
      <Player />
    </div>
  );
};

export default PlaylistParam;