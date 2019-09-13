import React from 'react';

import 'bulma';
import { Container, SiteTitle } from './styles';

export default function Header() {
    return (
    <>
        <Container className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <SiteTitle>
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, modern CSS framework based on Flexbox"/>
                    </a>
                </SiteTitle>
                
                <a role="button" className="navbar-burger" href="/" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </Container>
    </>
    );
}
