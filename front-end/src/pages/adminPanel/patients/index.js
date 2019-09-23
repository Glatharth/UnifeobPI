import React from 'react';

// import { Container } from './styles';
import Header from "../../../components/adminpanel/masterpage/Header";
import Sidebar from "../../../components/adminpanel/masterpage/Sidebar";
import Section from "../../../components/section";
import ListPeoples from "../../../components/adminpanel/listPeoples";

export default function patients() {
    return (
    <>
        <Header />
        <Sidebar />
        <Section content={<ListPeoples />} />
    </>
    );
}