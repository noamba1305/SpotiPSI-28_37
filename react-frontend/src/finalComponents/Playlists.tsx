import type { Song } from '../types/Song.ts';
import useStyles from '../AppStyles.ts';
import Header from '../components/Header/Header.tsx';
import MainSection from '../components/MainSection/MainSection.tsx';
import Player from '../components/Player/Player.tsx';
import type { Playlist } from '../types/Playlist.ts';

interface Props {
  songs: Song[];
  setFavorites: (songs: string[]) => void;
  setPlaylists: (songs: Playlist[]) => void;
  addToFav: (songId: string) => Promise<void>;
  removeFromFav: (songId: string) => Promise<void>;
};

const Playlists = (prop: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'playlists'} songs={prop.songs} setFavorites={prop.setFavorites} setPlaylists={prop.setPlaylists} addToFav={prop.addToFav} removeFromFav={prop.removeFromFav} />
      <Player />
    </div>
  );
};

export default Playlists;