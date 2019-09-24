import React from 'react';

// import { Container } from './styles';

export default function section(props) {
    return (
    <>
        <section className="hero is-fullheight-with-navbar">
            <div className="hero-head">
                <p>oi</p>
            </div>
            <div className="hero-body">
                <div className="container">
                    {props.content}
                </div>
            </div>
        </section>
    </>
    );
}