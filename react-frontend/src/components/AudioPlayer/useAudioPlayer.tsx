import { useState } from 'react';
import type { Song } from '../../types/Song.ts';

const useAddAudio = () => {

    const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [queue, setQueue] = useState<Song[]>([]);

    const clickPlayPause = () => {
        setCurrentSong(prev => prev ? {...prev, isPlaying: !prev.isPlaying} : prev);
        console.log(currentSong);
    };

    //כשזמן השיר נגמר או כשלחצו על נקסט
    const songNow = () => {
        if (queue.length === 0) {
            return;
        }
        if (queue.length -1  == currentIndex) {
            clickPlayPause();
        }
        else {
            setCurrentSong(prev => prev ? {...prev, isPlaying: false} : prev);
            console.log(currentSong);
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setCurrentSong({...queue[nextIndex], isPlaying: true});
            console.log(currentSong);
        };
    };

    const prevSong = () => {
        if (currentIndex === 0) {
            clickPlayPause();
        }
        else {
            setCurrentSong(prev => prev ? {...prev, isPlaying: false}: prev);
            console.log(currentSong);
            const nextIndex = currentIndex - 1;
            setCurrentIndex(nextIndex);
            setCurrentSong({...queue[nextIndex], isPlaying: true});
            console.log(currentSong);
        }
    };

    //הרשימה מתעדכנת לפי הרשימה הרלוונטית פלייליסטים / מועדפים / כל השירים
    const onPlay = (songs: Song[], id: string) => {
        console.log(queue);
        if (queue.length !== 0){
            setCurrentSong(prev => prev ? {...prev, isPlaying: false} : prev);
            console.log(currentSong);
        };
        setQueue(songs);
        const index = songs.findIndex(song => song.id === id);
        setCurrentIndex(index);
        setCurrentSong({ ...songs[index], isPlaying: true});
        console.log(currentSong);
    };

    return { currentSong, currentIndex, queue, clickPlayPause, songNow, prevSong, onPlay }
}

export default useAddAudio;