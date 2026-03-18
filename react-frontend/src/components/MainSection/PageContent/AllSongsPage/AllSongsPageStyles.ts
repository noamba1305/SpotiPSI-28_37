import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    pageContentContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        overflowY: 'auto',
        overflowX: 'hidden',
    }
}));    

export default useStyles;