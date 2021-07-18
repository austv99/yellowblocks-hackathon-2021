import React, { useState } from "react";
import { Modal, Button, Collapse, Dropdown, Menu } from "antd";
import { PlusOutlined, EyeOutlined } from "@ant-design/icons";
import AddTeachForm from "./AddTeachForm";

const { Panel } = Collapse;

const type = {
  visual: (
    <div style={{ display: "flex" }}>
      <EyeOutlined style={{ padding: "7px 5px 5px 5px" }} />
      <h3>Visual Based</h3>
    </div>
  ),
};

const setDesc = (strat) => {
  switch (strat) {
    case "visual":
      return "People on the autism spectrum tend to learn best using visual supports rather than through auditory input. Seeing it, rather than saying it, helps the person retain and process information.";
      break;
    case "choice":
      return "Choice may not only give students a feeling of control in their lives, but an opportunity to learn about themselves as workers and learners. \n Choice may be especially helpful for students with autism who have special needs when it comes to learning environment, lesson materials, and communication. ";
      break;
    case "alt":
      return "Writing can be a major source of tension and struggle for students with autism. Some students cannot write at all and others who can write, may have a difficult time doing so. In order to support a student struggling with writing, a teacher may try to give the child gentle encouragement as he or she attempts to do some writing- a word, a sentence, or a few lines. Teachers might also allow the student to use a computer, word processor, or even an old typewriter for some or for all lessons. For some learners, being able to use a word processor when writing helps them focus on the task at hand (content) instead of on their motor skills (process).";
      break;
    case "pair":
      return "Sometimes students are unsuccessful because they are uncomfortable or feel unsafe or even afraid in their educational environment. Providing an appropriate learning environment can be as central to a student’s success as any teaching strategy or educational tool. ";
      break;
    case "fascination":
      return "Whenever possible, educators should use interests, strengths, skills, areas of expertise, and gifts as tools for teaching. Can a passion for GPS be used to inspire more reading (operations manuals), new math skills (be a “human GPS”-calculate shortest route between two places), or fun social studies questions (“How would the world be different today if Christopher Columbus had GPS?”) .";
      break;
    default:
      break;
  }
};
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
    console.log("click", e);
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
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "2vh" }}
      >
        <div style={{ display: "flex" }}>
          <h3 style={{ fontWeight: "bold", paddingRight: "10px" }}>
            Teaching Strategies
          </h3>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={showModal}
          />
          <Modal
            title="Add a new Teaching Strategy"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <AddTeachForm modalState={setIsModalVisible} />
          </Modal>
        </div>
        <Collapse
          style={{ width: "50%", marginTop: "10px" }}
          expandIconPosition="right"
        >
          {strategies.map((s, idx) => (
            <>
              <Panel header={type[s.type]} key={idx}>
                <p>{s.text}</p>
                <p>{setDesc(s.type)}</p>
                <h4>Comment by Ms May:</h4>
                <p>{s.text}</p>
              </Panel>
            </>
          ))}
        </Collapse>
      </div>
    </>
  );
}

export default TeachingStrategies;
