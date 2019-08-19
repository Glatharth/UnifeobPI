import React from 'react';

import 'bulma';
// import { Container } from './styles';

export default function login() {
    return (
    <>
        <form action="" method="post">
            <div className="login">
                <input class="input is-rounded" type="email" placeholder="email"></input>

                <input class="input is-rounded" type="password" placeholder="password"></input>

                <a class="button is-link is-rounded">Rounded</a>
            </div>
        </form>
    </>
    );
}

