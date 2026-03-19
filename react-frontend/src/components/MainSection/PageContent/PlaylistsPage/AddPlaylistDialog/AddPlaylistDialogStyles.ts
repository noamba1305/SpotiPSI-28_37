import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    dialogStyle: {
        direction: 'rtl',
        backgroundColor: '#424242',
        color: 'white',
    },
    addPlaylistButtonStyle: {
        color: '#9B59B6',
    },

    textFieldStyle: {
        '& .MuiInputLabel-root': {
            color: 'gray',
        },
        '& .MuiInputBase-input': {
            color: '#9B59B6',
        }
    }
}));

export default useStyles;