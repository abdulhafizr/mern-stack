import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    create_body: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20
    },
    iPhoto: {
        marginTop: 6,
        marginBottom: 10,
        border: 'none'
    },
    img_preview: {
        marginTop: 10,
        objectFit: 'cover'
    },
    btn_tambah: {
        marginTop: 10,
        marginBottom: 15,
    }
}))

export default useStyles;