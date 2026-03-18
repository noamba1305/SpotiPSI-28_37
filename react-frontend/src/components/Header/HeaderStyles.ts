import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    headerContainer: {
        backgroundColor: '#313131',
        width: '100vw',
        flex: '0.5',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        color: '#9A57AF',
    },

    title: {
        paddingRight: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }



}));

export default useStyles;
