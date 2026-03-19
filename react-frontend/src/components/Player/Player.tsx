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
                    <div className={classes.song}>
                        <h3>{currentSong.name}</h3>
                        <h4>{currentSong.artist}</h4>
                        
                    </div>
                    <div className={classes.icons}>
                        <h4 onClick={prevSong} className={classes.rev}><SkipNext /></h4>
                        <h4 onClick={clickPlayPause}>{currentSong.isPlaying ? <Pause /> : <PlayArrow />}</h4>
                        <h4 onClick={songNow}><SkipNext /></h4>
                    </div>
                </>
            )}
        </div>

    )
}

export default Player;
