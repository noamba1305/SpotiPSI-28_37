import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    mainSectionContainer: {
        backgroundColor: '#1D1D1D',
        width: '100vw',
        flex: '8',
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'hidden',
        overflowY: 'auto',
        direction: 'rtl',
        '&::-webkit-scrollbar': {
            width: '10px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'white',
            borderRadius: '10px',  
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#C89FE6',
            borderRadius: '10px',
        },
    }

}));

export default useStyles;
