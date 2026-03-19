import { createContext, useContext } from "react";
import useAddAudio from "./useAudioPlayer";

const AudioContext = createContext<any>(null);

export const AudioProvider = ({ children }: any) => {
    const audio = useAddAudio();

    return (
        <AudioContext.Provider value={audio}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);