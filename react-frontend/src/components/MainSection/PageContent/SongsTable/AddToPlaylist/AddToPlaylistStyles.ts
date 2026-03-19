import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    addToPlaylistStylesContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#383838',
        color: 'white',
        border: '1px solid #404040',
        minWidth: '12rem',
    }
}));    

export default useStyles;