import {connect} from 'react-redux'
import Login from './Login'
import {loginSuccess, loginFailed} from './LoginAction'

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginSuccess: () => dispatch(loginSuccess()),
        loginFailed: () => dispatch(loginFailed())
    }
}

export default connect(null, mapDispatchToProps)(Login);