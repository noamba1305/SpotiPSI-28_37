import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    playlistContainer: {
        width: '100%',
        height: '10vh',
        borderBottom: '2px solid #404040',
        marginBottom: '1vh',
        marginTop: '1vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
    }
}));    

export default useStyles;