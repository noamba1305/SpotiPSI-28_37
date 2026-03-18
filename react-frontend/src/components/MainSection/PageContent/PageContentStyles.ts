import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    pageContentContainer: {
        display: 'flex',
        flex: '7',
        flexDirection: 'column',
        color: 'white',
        direction: 'rtl',
    }
}));    

export default useStyles;