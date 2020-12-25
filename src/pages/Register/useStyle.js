import {makeStyles} from '@material-ui/core';
import {register_bg } from '../../assets';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        spacing: 0,
        overFlow: 'hidden'
    },
    bg_register: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: `url(${register_bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // filter: 'blur(2px)',
        zIndex: -99
    },
    form_login: {
        background: '#fff',
        padding: 10,
    },
    mb: {
        marginBottom: 4
    },
    m: {
        margin: 10
    }
}))

export default useStyles;