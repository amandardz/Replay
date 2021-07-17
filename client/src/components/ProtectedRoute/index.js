import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { loggedIn } = useContext(AuthContext);

    return (
        <Route {...rest} render={
            (props) => {
                if(loggedIn) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to={{
                        pathname: "/login",
                        state: {
                            from: props.location
                        }
                    }}/>
                }
            }
        }/>
    )
}

export default ProtectedRoute;