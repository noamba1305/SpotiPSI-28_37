import "./PlayerStyles.ts";
import useStyles from "./PlayerStyles.ts";
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import SkipNext from '@mui/icons-material/SkipNext';
import { useAudio } from "../AudioPlayer/AudioProvider.tsx";

const Player = () => {

    const { classes } = useStyles();
    const { currentSong, clickPlayPause, songNow, prevSong } = useAudio();


    
    return (
        <div className={`${classes.playerContainer}`}>
            {currentSong === undefined ? (
                <h3>נגן שירים</h3>
            ) : ( 
                <>
                    <h3 onClick={prevSong}><SkipNext /></h3>
                    <div>
                        <h2>{currentSong.name}</h2>
                        <h3>{currentSong.artist}</h3>
                        <h3 onClick={clickPlayPause}>{currentSong.isPlaying ? <Pause /> : <PlayArrow />}</h3>
                    </div>
                    <h3 onClick={songNow}><SkipNext /></h3>
                </>
            )}
        </div>

    )
}

export default Player;
