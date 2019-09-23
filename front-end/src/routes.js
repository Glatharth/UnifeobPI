import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import login from './pages/login/index';
import adminPanel from './pages/adminPanel/index';
import patients from "./pages/adminPanel/patients";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={login} />
            <Route path="/adminPanel" exact component={adminPanel} />
            <Route path="/adminPanel/patients" exact component={patients} />
        </BrowserRouter>
    );
}