import React from 'react';

// import { Container } from './styles';
import Header from '../../components/masterpage/adminPanel/Header/index';
import Sidebar from '../../components/masterpage/adminPanel/Sidebar/index';
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

