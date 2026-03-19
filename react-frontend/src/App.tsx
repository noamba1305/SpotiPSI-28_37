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
  const [favorites, setFavorites] = useState<string[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");


  const loadSongs = useCallback(async () => {
    const { fetchGet } = createGetRequest('/songs', setIsLoading, (data: Song[]) => {
      setSongsList(data);
    }, setError);
    await fetchGet();
  }, []);

  const loadFavorites = useCallback(async () => {
    const { fetchGet } = createGetRequest('/favorites', setIsLoading, (data: string[]) => {
      setFavorites(data);
    }, setError);
    await fetchGet();
  }, []);

  const loadPlaylists = useCallback(async () => {
    const { fetchGet } = createGetRequest('/playlists', setIsLoading, (data: Playlist[]) => {
      setPlaylists(data);
    }, setError);
    await fetchGet();
  }, []);

  const addToFav = async (songId: string) => {
      const { fetchPost } = createPostRequest(songId, "songId", '/favorites/add', setIsLoading, setFavorites, setError);
      await fetchPost();
  }

  const removeFromFav = async (songId: string) => {
      const { fetchPost } = createPostRequest(songId, "songId", '/favorites/remove', setIsLoading, setFavorites, setError);
      await fetchPost();
  }

  const createPlaylist = async (name: string) => {
      const { fetchPost } = createPostRequest(name, "name", '/playlists', setIsLoading, () => {}, setError);
      await fetchPost();
      await loadPlaylists();
  }

  const updatePlaylist = async (songId: string, playlistId: string) => {
      const { fetchPost } = createPostRequest(songId, "songId", `/playlists/${playlistId}/add`, setIsLoading, () => {}, setError);
      await fetchPost();
      await loadPlaylists();
  }

  useEffect(() => {
    void loadSongs();
    void loadFavorites();
    void loadPlaylists();
  }, [loadSongs, loadFavorites, loadPlaylists]);

  const songsWithFavorites = songs.map(song => ({
    ...song,
    isFavorite: favorites.includes(song.id) 
  }));

  return (
    <AudioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/songs" replace />} />
          <Route path='/songs' element={<Songs songs={songsWithFavorites} setFavorites={setFavorites} setPlaylists={setPlaylists} addToFav={addToFav} removeFromFav={removeFromFav} createPlaylist={createPlaylist} updatePlaylist={updatePlaylist} playlists={playlists} />} />
          <Route path='/playlists' element={<Playlists songs={songsWithFavorites} setFavorites={setFavorites} setPlaylists={setPlaylists} addToFav={addToFav} removeFromFav={removeFromFav} createPlaylist={createPlaylist} updatePlaylist={updatePlaylist} playlists={playlists} />} />
          <Route path='/playlists/:playlistId' element={<PlaylistParam songs={songsWithFavorites} setFavorites={setFavorites} setPlaylists={setPlaylists} addToFav={addToFav} removeFromFav={removeFromFav} loadPlaylists={loadPlaylists} createPlaylist={createPlaylist} updatePlaylist={updatePlaylist} playlists={playlists} />} />
          <Route path='/favorites' element={<Favorites songs={songsWithFavorites} setFavorites={setFavorites} setPlaylists={setPlaylists} addToFav={addToFav} removeFromFav={removeFromFav} playlists={playlists} createPlaylist={createPlaylist} updatePlaylist={updatePlaylist} />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </AudioProvider>
  );
}

export default App;