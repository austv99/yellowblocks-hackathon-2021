import { Space } from "antd";
import teacher from "../data/teacher.jpeg";

const AvatarUser = () => {
  return (
    <Space
      direction="horizontal"
      style={{
        justifyContent: "flex-end",
        marginBottom: "12px",
      }}
    >
      <img
        src={teacher}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
      <div>Ms May</div>
    </Space>
  );
};

export default AvatarUser;
