import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import './AppStyles';
import useStyles from './AppStyles.ts';
import Header from './components/Header/Header.tsx';
import MainSection from './components/MainSection/MainSection.tsx';
import Player from './components/Player/Player.tsx';
import ErrorScreen from './components/Error/ErrorScreen.tsx';
import type { Song } from './types/Song.ts';

const Error: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <ErrorScreen />
    </div>
  );
};

const Songs = ({ songs }: { songs: Song[] }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'songs'} songs={songs} />
      <Player />
    </div>
  );
};

const Playlists = ({ songs }: { songs: Song[] }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'playlists'} songs={songs} />
      <Player />
    </div>
  );
};

const PlaylistParam: React.FC<{ songs: Song[] }> = ({ songs }) => {
  const { classes } = useStyles();
  const { playlistId } = useParams(); 
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'playlists'} param={playlistId} songs={songs} />
      <Player />
    </div>
  );
};

const Favorites: React.FC<{ songs: Song[] }> = ({ songs }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'favorites'} songs={songs} />
      <Player />
    </div>
  );
};

function App() {
  const [songs, setSongsList] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchSongs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5001/api/songs');
      const data = await response.json();
      setSongsList(data);
    } catch (error) {
      setError("something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/songs" replace />} />
        <Route path='/songs' element={<Songs songs={songs} />} />
        <Route path='/playlists' element={<Playlists songs={songs} />} />
        <Route path='/playlists/:playlistId' element={<PlaylistParam songs={songs} />} />
        <Route path='/favorites' element={<Favorites songs={songs} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;