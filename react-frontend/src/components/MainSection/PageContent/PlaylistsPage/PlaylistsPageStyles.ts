import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    playlistsPageContainer: {
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl',
    },

    btnAndTitle: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));    

export default useStyles;