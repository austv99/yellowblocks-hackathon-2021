import React, { useContext, useState, useEffect } from 'react';
import { Form, Select, Input, Button, Alert } from 'antd';
import { AppContext } from '../utils/context'; 


const { TextArea } = Input;


function AddTeachForm({ modalState }) {
    const context = useContext(AppContext)
    const { studentContext } = context
    const { student, setStudent } = studentContext
    const handleSubmit = (values) => {
        const {type, text} = values
        setStudent((prevStudent) => ({
            ...prevStudent,
            strategies: [...prevStudent.strategies, {
                type,
                text,
            }]
        }))
        modalState(false)
    }


    return (
        <>
        <Form onFinish={handleSubmit}>
            <Form.Item label="Select Strategy" name="type">
                <Select>
                    <Select.Option value="visual">Visual Based</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Comment" name="text">
            <TextArea rows={5}/>
            </Form.Item>
            <Form.Item style={{marginTop: '10px'}}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
        </>
    );
};

export default AddTeachForm;