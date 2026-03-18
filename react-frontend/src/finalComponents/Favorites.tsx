import type { Song } from '../types/Song.ts';
import useStyles from '../AppStyles.ts';
import Header from '../components/Header/Header.tsx';
import MainSection from '../components/MainSection/MainSection.tsx';
import Player from '../components/Player/Player.tsx';

interface Props {
  songs: Song[];
  setFavorites: (songs: Song[]) => void;
  setPlaylist: (songs: Song[]) => void;
};

const Favorites = (prop: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'favorites'} songs={prop.songs} setFavorites={prop.setFavorites} setPlaylists={prop.setPlaylists} />
      <Player />
    </div>
  );
};

export default Favorites;