import React, { useContext, useState, useEffect } from "react";
import { Form, Select, Input, Button, Alert } from "antd";
import { AppContext } from "../utils/context";

const { TextArea } = Input;

function AddTeachForm({ modalState }) {
  const context = useContext(AppContext);
  const description = "";

  const { studentContext } = context;
  const { student, setStudent } = studentContext;
  const handleSubmit = (values) => {
    const { type, text } = values;
    setStudent((prevStudent) => ({
      ...prevStudent,
      strategies: [
        ...prevStudent.strategies,
        {
          type,
          text,
        },
      ],
    }));
    modalState(false);
  };
  const handleChange = (value) => {
    setStrat(value);
  };
  const [strat, setStrat] = useState("visual");
  //   useEffect(() => {
  //     console.log(currentTab)
  // }, [currentTab])
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
  return (
    <>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Strategy" name="type">
          <Select onChange={handleChange}>
            <Select.Option value="visual">👁️ Visual Based</Select.Option>
            <Select.Option value="choice">👐 Give Choices</Select.Option>
            <Select.Option value="alt">💻 Writing Alternatives</Select.Option>
            <Select.Option value="pair">👦👧 Pair Work</Select.Option>
            <Select.Option value="fascination">
              🔥 Teach to Fascinations
            </Select.Option>
          </Select>
        </Form.Item>
        <div
          style={{
            background: "#f6ffed",
            borderRadius: "6px",
            marginBottom: "24px",
            border: "1px solid #b7eb8f",
            padding: "10px",
          }}
        >
          {setDesc(strat)}
        </div>
        <Form.Item label="Comment" name="text">
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item style={{ marginTop: "10px" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default AddTeachForm;
