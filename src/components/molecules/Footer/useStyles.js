import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    side_menu: {
        display: 'flex',
        justifyContent: 'space-around',
        minWidth: 160,
    },
    link: {
        color: '#fff'
    },
    brand: {
        textDecoration: 'none',
        color: '#fff'
    }
}))

export default useStyles;