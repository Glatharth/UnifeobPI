import React from 'react';

// import { Container } from './styles';
import Header from '../../components/adminpanel/masterpage/Header/index';
import Sidebar from '../../components/adminpanel/masterpage/Sidebar/index';
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

