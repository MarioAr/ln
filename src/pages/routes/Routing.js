import React from 'react';
import RouterItem from './RouterItem';
import { Switch, Redirect } from 'react-router-dom';
import Routes from './routes';

export default function Routing()  {
    
    return (
        <Switch>
            {
                Routes.map(item =>
                    // console.log(item)
                    <RouterItem exact path={item.path} key={item.path} Component={item.component} />
                 )
            }
            <Redirect to={"/error"} />
        </Switch>
    );    
}