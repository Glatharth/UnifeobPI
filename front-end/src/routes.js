import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import login from './pages/login/index';
import adminPanel from './pages/adminPanel/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={login} />
            <Route path="/adminPanel" exact component={adminPanel} />
        </BrowserRouter>
    );
}