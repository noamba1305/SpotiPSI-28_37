import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import './AppStyles';
import useStyles from './AppStyles.ts';
import Header from './components/Header/Header.tsx';
import MainSection from './components/MainSection/MainSection.tsx';
import Player from './components/Player/Player.tsx';
import ErrorScreen from './components/Error/ErrorScreen.tsx';
import type { Song } from './types/Song.ts';
import useGetRequest from './requests/get.tsx';
import usePostRequest from './requests/post.tsx';
import type { Playlist } from './types/Playlist.ts';

const Error: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <ErrorScreen />
    </div>
  );
};

const Songs = ({{ songs }: { songs: Song[] }, { setFavorites } : {setFavorites: (songs: Song[]) => void}, { setPlaylists } : {setPlaylists: (songs: Song[]) => void}}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'songs'} songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />
      <Player />
    </div>
  );
};

const Playlists = ({ songs }: { songs: Song[] }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'playlists'} songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />
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
      <MainSection currentPage={'playlists'} param={playlistId} songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />
      <Player />
    </div>
  );
};

const Favorites: React.FC<{ songs: Song[] }> = ({ songs }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <MainSection currentPage={'favorites'} songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />
      <Player />
    </div>
  );
};

function App() {
  const [songs, setSongsList] = useState<Song[]>([]);
  const [favorites, setFavorites] = useState<string[]>([])
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const loadSongs = () => {
    const { fetchGet } = useGetRequest ('/songs', setIsLoading, setSongsList, setError)
  }

  const loadFavorites = () => {
    const { fetchGet } = useGetRequest ('/favorites', setIsLoading, setFavorites, setError)
  }

  const loadPlaylists = () => {
    const { fetchGet } = useGetRequest ('/playlists', setIsLoading, setPlaylists, setError)
  }

  const addToFav = (songId: string) => {
      const { fetchPost } = usePostRequest (songId, "songId", '/favorites/add', setIsLoading, setFavorites, setError)
  }

  const removeFromFav = (songId: string) => {
      const { fetchPost } = usePostRequest (songId, "songId", '/favorites/remove', setIsLoading, setFavorites, setError)
  }

  const createPlaylist = (name: string) => {
      const { fetchPost } = usePostRequest (name, "name", 'playlists', setIsLoading, setPlaylists, setError)
  }

  const updatePlaylist = (songId: string) => {
      const { fetchPost } = usePostRequest (songId, "songId", 'playlists', setIsLoading, setPlaylists, setError)
  }



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/songs" replace />} />
        <Route path='/songs' element={<Songs songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />} />
        <Route path='/playlists' element={<Playlists songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />} />
        <Route path='/playlists/:playlistId' element={<PlaylistParam songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />} />
        <Route path='/favorites' element={<Favorites songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;