import React, { useState, useEffect, useContext } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Breadcrumbs from '../components/BreadCrumbs';
import Header from '../components/Header';
// import Collapse from '../components/Collapse';
import Evaluation from '../components/Evaluation';
import AddEvalForm from '../components/AddEvaForm';
import { Modal, Button, Collapse, Rate } from 'antd';
import { AppContext } from '../utils/context'; 

const navs = ['Student Profile', 'Joel Smith', 'Evaluation Log']
const title = 'Monthly Evaluation Log'
const augList = {title: 'August 2021', content: <Evaluation/>}
const julList = {title: 'July 2021', content: <Evaluation/>}
const junList = {title: 'June 2021', content: <Evaluation/>}
const collapseT = [augList, julList, junList]

const { Panel } = Collapse;

const evalsH = [
    {
        date: 'June 2021',
        concRating: 2,
        concComment: 'Gets distracted fairly often, however has been able to concentrate on simple tasks.',
        probRating: 4,
        probComment: 'When focused, has very good problem solving. Really enjoys puzzles',
        speakRating: 3,
        speakComment: 'Good although can stutter at times.',
        behaveRating: 5,
        behaveComment: 'Very well behaved and mannered.',
        socRating: 2,
        socComment: 'Struggles slightly with making friends.',
        overallComment: 'Slow but steady improvement.',
    },
    {
        date: 'July 2021',
        concRating: 2,
        concComment: 'Gets distracted fairly often, however has been able to concentrate on simple tasks.',
        probRating: 4,
        probComment: 'When focused, has very good problem solving. Really enjoys puzzles',
        speakRating: 3,
        speakComment: 'Good although can stutter at times.',
        behaveRating: 5,
        behaveComment: 'Very well behaved and mannered.',
        socRating: 2,
        socComment: 'Struggles slightly with making friends.',
        overallComment: 'Slow but steady improvement.',
    },
    {
        date: 'August 2021',
        concRating: 2,
        concComment: 'Gets distracted fairly often, however has been able to concentrate on simple tasks.',
        probRating: 4,
        probComment: 'When focused, has very good problem solving. Really enjoys puzzles',
        speakRating: 3,
        speakComment: 'Good although can stutter at times.',
        behaveRating: 5,
        behaveComment: 'Very well behaved and mannered.',
        socRating: 2,
        socComment: 'Struggles slightly with making friends.',
        overallComment: 'Slow but steady improvement.',
    }
]

function EvaluationLogs () {
    const context = useContext(AppContext)
    const { evalContext } = context
    const { evals, setEvals } = evalContext

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

    useEffect(() => {
        if (!evals) {
            setEvals(evalsH)
        }
    },[])

    return (
        <>
        <NavBar />
        <div style={{display: 'flex'}}>
        <SideBar />
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', padding: '10px 10px 10px 10px'}}>
                <Breadcrumbs navs={navs} />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '-20px', padding: '10px 10px 10px 10px'}}>
                <Header title={title}/>
                <div style={{paddingRight: '30px'}}>
                <Button type="primary" onClick={showModal}>
                    Add New Evaluation
                </Button>
                    <Modal 
                        title="Add New Evaluation" 
                        visible={isModalVisible} 
                        onOk={handleOk} 
                        onCancel={handleCancel}
                        footer={null}
                    >
                    <AddEvalForm modalState={setIsModalVisible}/>
                    </Modal>
                </div>
            </div>
            <div style={{padding: '10px 10px 10px 10px'}}>
            <Collapse>
            {evals && evals.map((n) => (
                <Panel header={n.date}>
                    <div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h style={{fontWeight: 'bold'}}>Concentration</h>
                        <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={n.concRating}/></div>
                    </div>
                    <p>{n.concComment}</p>
                    </div>
                    <div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h style={{fontWeight: 'bold'}}>Problem Solving</h>
                        <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={n.probRating}/></div>
                    </div>
                    <p>{n.probComment}</p>
                    </div>
                    <div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h style={{fontWeight: 'bold'}}>Speaking</h>
                        <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={n.speakRating}/></div>
                    </div>
                    <p>{n.speakComment}</p>
                    </div>
                    <div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h style={{fontWeight: 'bold'}}>Behaviour</h>
                        <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={n.behaveRating}/></div>
                    </div>
                    <p>{n.behaveComment}</p>
                    </div>
                    <div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h style={{fontWeight: 'bold'}}>Sociability</h>
                        <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={n.socRating}/></div>
                    </div>
                    <p>{n.socComment}</p>
                    </div>
                </Panel>
            ))}
            </Collapse>
            </div>
        </div>
        </div>
        </>
    );

}

export default EvaluationLogs;