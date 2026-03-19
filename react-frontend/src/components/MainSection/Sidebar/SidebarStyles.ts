import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    bar: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        textAlign: 'right',
        color: '#B3B3B3',
        borderLeft: '3px solid #232323',
    }
}));    

export default useStyles;