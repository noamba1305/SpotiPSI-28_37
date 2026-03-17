import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    headerContainer: {
        backgroundColor: '#313131',
        width: '100vw',
        flex: '1',
        display: 'flex',
        justifyContent: 'right',
        alignContent: 'center',
        color: '#9A57AF',
    },

    title: {
        paddingRight: '50px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }



}));

export default useStyles;
