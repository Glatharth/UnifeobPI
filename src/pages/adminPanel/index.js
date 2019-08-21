import React from 'react';

// import { Container } from './styles';
import Header from './../../components/masterpage/adminPanel/Header';
import Sidebar from './../../components/masterpage/adminPanel/Sidebar';
import Section from './../../components/section';

export default function adminPanel() {
    return (
    <>
        <Header /> 
        <Sidebar />
        <Section />
    </>
    );
}

