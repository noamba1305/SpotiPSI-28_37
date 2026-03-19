import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    playlistListItemContainer: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.2rem',

        ":hover": {
            backgroundColor: '#484848',
            cursor: 'pointer',
        }
    }
}));    

export default useStyles;