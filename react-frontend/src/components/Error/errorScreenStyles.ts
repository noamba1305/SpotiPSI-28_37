import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    errorScreenContainer: {
        width: '100vw',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: '350%'
    },

    image: {
        width: '75%',
        height: '50%'
    }

}));

export default useStyles;