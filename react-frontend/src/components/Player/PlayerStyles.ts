import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
   playerContainer: {
        backgroundColor: '#313131',
        width: '100vw',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

    song: {

        
    },

    rev: {
        display: 'flex',
        alignItems: 'center',
        transformOrigin: 'center',
        transform: 'rotate(180deg)'
    },

    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',

        '& h4': {
            margin: 0
        },
    },

}));

export default useStyles;
