import React from 'react';

import { Section } from './styles';

export default function section() {
    return (
    <>
        <Section className="section" id='content'>
            <div className="container">
                <h1 className="title">Section</h1>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </Section>
    </>
    );
}
