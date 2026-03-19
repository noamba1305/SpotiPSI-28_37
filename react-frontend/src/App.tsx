import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './AppStyles';
import type { Song } from './types/Song.ts';
import createGetRequest from './requests/get.tsx';
import createPostRequest from './requests/post.tsx';
import type { Playlist } from './types/Playlist.ts';
import Error from './finalComponents/Error.tsx';
import Favorites from './finalComponents/Favorites.tsx';
import PlaylistParam from './finalComponents/PlaylistParam.tsx';
import Playlists from './finalComponents/Playlists.tsx';
import Songs from './finalComponents/Songs.tsx';
import { AudioProvider } from './components/AudioPlayer/AudioProvider';


function App() {
  const [songs, setSongsList] = useState<Song[]>([]);
  const [favorites, setFavorites] = useState<string[]>([])
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");


  const loadSongs = useCallback(async () => {
    const { fetchGet } = createGetRequest('/songs', setIsLoading, (data: Song[]) => {
      const updatedSongs = data.map((song) => ({ ...song, isFavorite: song.isFavorite ?? false }));
      setSongsList(updatedSongs);
    }, setError);
    await fetchGet();
  }, []);

  const loadFavorites = async () => {
    const { fetchGet } = createGetRequest('/favorites', setIsLoading, setFavorites, setError);
    await fetchGet();
  }

  const loadPlaylists = async () => {
    const { fetchGet } = createGetRequest('/playlists', setIsLoading, setPlaylists, setError);
    await fetchGet();
  }

  const addToFav = async (songId: string) => {
      const { fetchPost } = createPostRequest(songId, "songId", '/favorites/add', setIsLoading, setFavorites, setError);
      await fetchPost();
  }

  const removeFromFav = async (songId: string) => {
      const { fetchPost } = createPostRequest(songId, "songId", '/favorites/remove', setIsLoading, setFavorites, setError);
      await fetchPost();
  }

  const createPlaylist = async (name: string) => {
      const { fetchPost } = createPostRequest(name, "name", 'playlists', setIsLoading, setPlaylists, setError);
      await fetchPost();
  }

  const updatePlaylist = async (songId: string) => {
      const { fetchPost } = createPostRequest(songId, "songId", 'playlists', setIsLoading, setPlaylists, setError);
      await fetchPost();
  }

  useEffect(() => {
    void loadSongs();
  }, []);



  return (
    <AudioProvider>
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
    </AudioProvider>
  );
}

export default App;