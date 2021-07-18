import React, { useContext, useEffect } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Breadcrumbs from '../components/BreadCrumbs';
import { Button } from 'antd';
import { BookOutlined } from '@ant-design/icons'
import UserDetails from '../components/UserDetails';
import ProgressBars from '../components/ProgressBars';
import TeachingStrategies from '../components/TeachingStrategies';
import CommentSection from '../components/CommentSection';
import { AppContext } from '../utils/context'; 
import StatsCards from '../components/StatsCards';

const progress = [
    {
        name: 'Concentration',
        progress: 50,
    },
    {
        name: 'Problem Solving',
        progress: 50,
    },
    {
        name: 'Speaking',
        progress: 75,
    },
]
const strategies = [
    {
        type: 'visual',
        text: 'Lorem ipsum',
    },
    {
        type: 'visual',
        text: 'test',
    }
]

const comments = {
    parent: [
        {
            text: 'Parent Lorem Ipsum',
        }
    ],
    teacher: [
        {
            text: 'Teacher Lorem Ipsum',
        }
    ],
    specialist: [
        {
            text: 'Specialist Lorem Ipsum',
        }
    ],
}

const stats = {
    strengths: ['Strengths LoremIpsum'],
    weaknesses: ['Weaknesses LoremIpsum'],
    interests: ['Interests LoremIpsum'],
}




function StudentProfile () {
    const navs = ['Student Profile', 'Joel Smith']
    const context = useContext(AppContext)
    const { studentContext } = context
    const { student, setStudent } = studentContext

    useEffect(() => {
        if (!student) {
            setStudent((prevStudent) => ({
                ...prevStudent,
                progress,
                strategies,
                comments,
                stats,
            }))
        }
    },[])

    useEffect(() => {
        console.log(student)
    }, [student])


    return (
        <>
            <NavBar />
            <div style={{display: 'flex'}}>
                <SideBar />
                <div style= {{display: 'flex', flexDirection: 'column', width: '100%', padding: '5vh 10vw 10vh 10vw'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px 10px 20px 10px'}}>
                        <Breadcrumbs navs={navs} />
                        <Button>
                            <BookOutlined />
                            Evaluation Log
                        </Button>
                    </div>
                    {student && (
                        <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px'}}>
                            <div style={{ display: 'flex'}}>
                                <img src="/avatar.png" alt="Profile Picture" style={{width: '10rem', height: '10rem', paddingRight: '10px'}}/>
                                <UserDetails name="Joel Smith" year={7} ability="Autism" />
                            </div>
                            <ProgressBars progress={student.progress}/>
                        </div>
                        <StatsCards stats={student.stats}/>
                        <TeachingStrategies strategies={student.strategies}/>
                        <CommentSection comments={student.comments}/>
                        </>
                    )}
                </div>
            </div>
        </>
    );

}

export default StudentProfile;