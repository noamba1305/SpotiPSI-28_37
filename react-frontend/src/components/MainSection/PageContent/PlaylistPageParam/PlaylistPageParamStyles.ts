import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    playlistsPageParamContainer: {
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
    },

    titleAndGoBackBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    }
}));    

export default useStyles;