import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 6,
    },
    mt: {
        marginTop: 2
    },
    paginate: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 4
    }
}))


export default useStyles;