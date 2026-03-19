import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    SidebarItemContainer: {
        marginTop: '5px',
        marginBottom: '5px',
        marginRight: '10px',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'right',
        display: 'flex',
        gap: '10px',
    '&:hover': {
        backgroundColor: '#2D2032',
        cursor: 'pointer',
    }},

    activeItem: {
        backgroundColor: 'purple',
    }
}));    

export default useStyles;