import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Breadcrumbs from '../components/BreadCrumbs';
import { Button } from 'antd';

function StudentProfile () {
    const navs = ['Student Profile', 'Joel Smith']
    return (
        <>
        <NavBar />
        <div style={{display: 'flex'}}>
        <SideBar />
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px 10px 10px 10px'}}>
            <Breadcrumbs navs={navs} />
            <Button>Evaluation Log</Button>
        </div>
        </div>
        </>
    );

}

export default StudentProfile;