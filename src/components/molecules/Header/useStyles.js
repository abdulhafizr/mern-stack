import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    brand: {
        textDecoration: 'none',
        color: '#fff'
    }
}))

export default useStyles;