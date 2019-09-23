import React from 'react';

import 'bulma';
import { Aside, Div } from './styles';

export default function Sidebar() {
    return (
        <>
            <Aside classNome="menu">
                <Div>
                    <p className="menu-label">
                        <p>General</p>
                    </p>
                    <ul className="menu-list">
                        <li>Dashboard</li>
                        <li>Customers</li>
                    </ul>
                    <p className="menu-label">
                        <p>Administration</p>
                    </p>
                    <ul className="menu-list">
                        <li>Team Settings</li>
                        <li>
                            <ul>
                                <li>Members</li>
                                <li>Plugins</li>
                                <li>Add a member</li>
                            </ul>
                        </li>
                        <li>Invitations</li>
                        <li>Cloud Storage Environment Settings</li>
                        <li>Authentication</li>
                    </ul>
                    <p className="menu-label">
                        <p>Transactions</p>
                    </p>
                    <ul className="menu-list">
                        <li>Payments</li>
                        <li>Transfers</li>
                        <li>Balance</li>
                    </ul>
                </Div>
            </Aside>
        </>
    );
}