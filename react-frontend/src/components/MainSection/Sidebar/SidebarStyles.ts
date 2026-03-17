import  { makeStyles } from '@mui/material'

const useStyles = makeStyles({
    bar: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
    },

    barItems: {
    '&:hover': {
        backroundColor: 'purple',
    }}
});

export default useStyles;