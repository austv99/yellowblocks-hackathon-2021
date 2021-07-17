import React, { useContext, useState, useEffect } from 'react';
import { Form, Select, Input, Button, Alert, Rate } from 'antd';
import { AppContext } from '../utils/context'; 


const { TextArea } = Input;

function AddEvalForm({ modalState }) {
    const [concRating, setConcRating] = useState(0)
    const [probRating, setProbRating] = useState(0);
    const [speakRating, setSpeakRating] = useState(0);
    const [behaveRating, setBehaveRating] = useState(0);
    const [socRating, setSocRating] = useState(0);
    const context = useContext(AppContext)
    const { studentContext } = context
    const { student, setStudent } = studentContext
    const handleSubmit = (values) => {
        const {concRating, concComment,
            probRating, probComment,
            speakRating, speakComment,
            behaveRating, behaveComment,
            socRating, socComment,
            overallComment} = values
        setStudent((prevStudent) => ({
            ...prevStudent,
            evals: [...prevStudent.evals, {
                concRating, concComment,
                probRating, probComment,
                speakRating, speakComment,
                behaveRating, behaveComment,
                socRating, socComment,
                overallComment,
            }]
        }))
        modalState(false)
    }

    return (
        <>
        <Form onFinish={handleSubmit}>
            <h style={{fontWeight: 'bold'}}>Concentration</h>
            <Form.Item name="concRating">
                <Rate onChange={(value) => {
                            setConcRating(value)}} value={concRating} />
            </Form.Item>
            <Form.Item label="Comment" name="concComment">
                <TextArea/>
            </Form.Item>
            <h style={{fontWeight: 'bold'}}>Problem Solving</h>
            <Form.Item name="probRating">
                <Rate onChange={(value) => {
                            setProbRating(value)}} value={probRating} />
            </Form.Item>
            <Form.Item label="Comment" name="probComment">
                <TextArea/>
            </Form.Item>
            <h style={{fontWeight: 'bold'}}>Speaking</h>
            <Form.Item name="speakRating">
                <Rate onChange={(value) => {
                            setSpeakRating(value)}} value={speakRating} />
            </Form.Item>
            <Form.Item label="Comment" name="speakComment">
                <TextArea/>
            </Form.Item>
            <h style={{fontWeight: 'bold'}}>Behaviour</h>
            <Form.Item name="behaveRating">
                <Rate onChange={(value) => {
                            setBehaveRating(value)}} value={behaveRating} />
            </Form.Item>
            <Form.Item label="Comment" name="behaveComment">
                <TextArea/>
            </Form.Item>
            <h style={{fontWeight: 'bold'}}>Sociability</h>
            <Form.Item name="socRating">
                <Rate onChange={(value) => {
                            setSocRating(value)}} value={socRating} />
            </Form.Item>
            <Form.Item label="Comment" name="socComment">
                <TextArea/>
            </Form.Item>
            <Form.Item label="Overall Comment" name="overallComment">
                <TextArea/>
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

export default AddEvalForm;