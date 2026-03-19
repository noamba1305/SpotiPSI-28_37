import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    addToPlaylistStylesContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#383838',
        color: 'white',
    }
}));    

export default useStyles;