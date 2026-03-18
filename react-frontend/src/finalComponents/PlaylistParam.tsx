import type { Song } from '../types/Song.ts';
import useStyles from '../AppStyles.ts';
import Header from '../components/Header/Header.tsx';
import MainSection from '../components/MainSection/MainSection.tsx';
import Player from '../components/Player/Player.tsx';
import { BrowserRouter as useParams } from 'react-router-dom';

interface Props {
  songs: Song[];
  setFavorites: (songs: Song[]) => void;
  setPlaylist: (songs: Song[]) => void;
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