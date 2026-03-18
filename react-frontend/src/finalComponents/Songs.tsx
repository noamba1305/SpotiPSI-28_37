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
};

const Songs = (prop: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'songs'} songs={prop.songs} setFavorites={prop.setFavorites} setPlaylists={prop.setPlaylists} />
      <Player />
    </div>
  );
};

export default Songs;