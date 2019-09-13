import React from 'react';

import 'bulma';
import iconPassword from './../../assets/form/lock-open.svg';

// import { Container } from './styles';

export default function login() {
    return (
    <>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container ">
                    <div className="columns is-centered">
                        <div className="column is-3-desktop">
                            <form action="" method="post" className="box">
                                <div className="login is-two-fifths">
                                    <div className="field">
                                        <div className="control has-icons-left">
                                             <input className="input" type="email" placeholder="email"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="password" placeholder="Password">
                                                <span className="icon is-small is-left">
                                                    <img src={iconPassword}  alt="password"/>
                                                </span>
                                            </input>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <div className="control has-icons-left">
                                            <div className="buttons has-addons is-centered">
                                                <a className="button is-link is-outlined">Login</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

