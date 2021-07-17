import React, { useContext, useEffect, useState } from 'react';
import { Tabs, Input, Form, Button } from 'antd';
import { AppContext } from '../utils/context'; 


const { TabPane } = Tabs;
const { TextArea } = Input;

const tabs = ['teacher', 'specialist', 'parent']

function CommentSection({ comments }) {
    const context = useContext(AppContext)
    const { studentContext } = context
    const { student, setStudent } = studentContext
    const [currentTab, setCurrentTab] = useState('teacher')

    const handleTabChange = (tab) => {  
        setCurrentTab(tabs[tab - 1])
    }
    const handleSubmit = (values) => {
        const { comment } = values
        const obj = {
            text: comment,
        }
        setStudent((prevStudent) => ({
            ...prevStudent,
            comments: {
                ...prevStudent.comments,
                [currentTab]: [...prevStudent.comments[currentTab], obj]
            }
        }))
    }

    useEffect(() => {
        console.log(currentTab)
    }, [currentTab])

    return (
        <>  
            <div style={{width: '45%', marginTop: '2vh'}}>
            <h3>Comments</h3>
            <Tabs defaultActiveKey="1" onChange={handleTabChange}>
                <TabPane tab="Teacher" key="1">
                    {comments.teacher.map((c) => (
                        <p>{c.text}</p>
                    ))}
                </TabPane>
                <TabPane tab="Specialist" key="2">
                    {comments.specialist.map((c) => (
                        <p>{c.text}</p>
                    ))}
                </TabPane>
                <TabPane tab="Parent" key="3">
                    {comments.parent.map((c) => (
                        <p>{c.text}</p>
                    ))}
                </TabPane>
            </Tabs>
            <Form onFinish={handleSubmit}>
                <Form.Item name="comment" style={{marginTop: '10px'}}>
                    <TextArea rows={5} placeholder="Write your comment here"/>
                </Form.Item>
                <Form.Item style={{marginTop: '10px'}}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </>
    );
};

export default CommentSection;