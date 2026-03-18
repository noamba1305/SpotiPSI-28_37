import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './AppStyles';
import type { Song } from './types/Song.ts';
import useGetRequest from './requests/get.tsx';
import usePostRequest from './requests/post.tsx';
import Error from './finalComponents/Error.tsx';
import Favorites from './finalComponents/Favorites.tsx';
import PlaylistParam from './finalComponents/PlaylistParam.tsx';
import Playlists from './finalComponents/Playlists.tsx';
import Songs from './finalComponents/Songs.tsx';


function App() {
  const [songs, setSongsList] = useState<Song[]>([]);
  const [favorites, setFavorites] = useState<string[]>([])
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const loadSongs = () => {
    const { fetchGet } = useGetRequest ('/songs', setIsLoading, setSongsList, setError);
    const updatedSongs = songs.map(song => ({...song, isFavorite: false}));
    setSongsList(updatedSongs);
  }

  const loadFavorites = () => {
    const { fetchGet } = useGetRequest ('/favorites', setIsLoading, setFavorites, setError);
  }

  const loadPlaylists = () => {
    const { fetchGet } = useGetRequest ('/playlists', setIsLoading, setPlaylists, setError);
  }

  const addToFav = (songId: string) => {
      const { fetchPost } = usePostRequest (songId, "songId", '/favorites/add', setIsLoading, setFavorites, setError);
  }

  const removeFromFav = (songId: string) => {
      const { fetchPost } = usePostRequest (songId, "songId", '/favorites/remove', setIsLoading, setFavorites, setError);
  }

  const createPlaylist = (name: string) => {
      const { fetchPost } = usePostRequest (name, "name", 'playlists', setIsLoading, setPlaylists, setError);
  }

  const updatePlaylist = (songId: string) => {
      const { fetchPost } = usePostRequest (songId, "songId", 'playlists', setIsLoading, setPlaylists, setError);
  }



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/songs" replace />} />
        <Route path='/songs' element={<Songs songs={songs} setFavorites={setFavorites} setPlaylis={setPlaylist} />} />
        <Route path='/playlists' element={<Playlists songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />} />
        <Route path='/playlists/:playlistId' element={<PlaylistParam songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />} />
        <Route path='/favorites' element={<Favorites songs={songs} setFavorites={setFavorites} setPlaylists={setPlaylists} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;