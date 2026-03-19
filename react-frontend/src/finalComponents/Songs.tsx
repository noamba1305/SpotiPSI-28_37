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
  playlists: Playlist[];
  createPlaylist: (name: string) => Promise<void>;
  updatePlaylist: (songId: string, playlistId: string) => Promise<void>;
};

const Songs = (prop: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'songs'} songs={prop.songs} setFavorites={prop.setFavorites} setPlaylists={prop.setPlaylists} addToFav={prop.addToFav} removeFromFav={prop.removeFromFav} playlists={prop.playlists} createPlaylist={prop.createPlaylist} updatePlaylist={prop.updatePlaylist} />
      <Player />
    </div>
  );
};

export default Songs;