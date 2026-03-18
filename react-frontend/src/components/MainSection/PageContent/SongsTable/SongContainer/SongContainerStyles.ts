import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    songContainer: {
        width: '100%',
        height: '5vh',
        borderBottom: '2px solid #404040',
        marginBottom: '1vh',
        marginTop: '1vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1vw',
    },

    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1vw',
    },

    coloredIcon: {
        color: '#9B59B6',
    }
}));    

export default useStyles;