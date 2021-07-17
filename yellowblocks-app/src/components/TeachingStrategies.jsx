import React, { useState } from 'react';
import { Modal, Button, Collapse, Dropdown, Menu } from 'antd';
import { PlusOutlined, EyeOutlined } from '@ant-design/icons';
import AddTeachForm from './AddTeachForm';


const { Panel } = Collapse;

const type = {
    visual: <div style={{ display: 'flex'}}>
                <EyeOutlined style={{padding: '7px 5px 5px 5px'}}/>
                <h3>Visual Based</h3>
            </div>,
}

function TeachingStrategies({ strategies }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function handleMenuClick(e) {
        console.log('click', e);
      }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
        );
      
    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '2vh',}}>
            <div style={{display: 'flex'}}>
                <h3 style={{fontWeight: 'bold', paddingRight: '10px'}}>Teaching Strategies</h3>
                <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
                <Modal 
                title="Add a new Teaching Strategy" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}
                >
                <AddTeachForm modalState={setIsModalVisible}/>
                </Modal>
            </div>
            <Collapse 
            style={{width: '50%', marginTop: '10px'}}
            expandIconPosition='right'
            >
            {strategies.map((s, idx) => (
                <>
                    <Panel header={type[s.type]} key={idx}>
                        <p>{s.text}</p>
                    </Panel>
                </>
            ))}
            </Collapse>
        </div>
        </>
    );
};

export default TeachingStrategies;