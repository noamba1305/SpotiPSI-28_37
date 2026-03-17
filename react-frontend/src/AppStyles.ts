import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    appContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1D1D1D',
        margin: '0',
        padding: '0',
    }

}));

export default useStyles;
