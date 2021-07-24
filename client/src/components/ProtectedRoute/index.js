import React, { useContext, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../utils/API';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { loggedIn, setLoggedIn } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        API.getSession()
          .then(res => {
            if(res.data === 200) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }

            setIsLoading(false);
          })
    }, []);

    return (
        <Route {...rest} render={
            (props) => {
                if(isLoading) {
                    return <div>Loading...</div>
                }

                if(loggedIn) {
                    return <Component {...props}/>
                } else if (!loggedIn) {
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