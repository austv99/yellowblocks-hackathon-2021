import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import AvatarUser from "../components/AvatarUser";
import Breadcrumbs from "../components/BreadCrumbs";
import { Button, Avatar, Space } from "antd";
import { BookOutlined, BarChartOutlined } from "@ant-design/icons";
import UserDetails from "../components/UserDetails";
import ProgressBars from "../components/ProgressBars";
import TeachingStrategies from "../components/TeachingStrategies";
import CommentSection from "../components/CommentSection";
import { AppContext } from "../utils/context";
import StatsCards from "../components/StatsCards";
import fakekid from "../data/fakekid.jpeg";
const progress = [
  {
    name: "Concentration",
    progress: 38,
  },
  {
    name: "Problem Solving",
    progress: 50,
  },
  {
    name: "Speaking",
    progress: 75,
  },
  {
    name: "Behaviour",
    progress: 45,
  },
  {
    name: "Sociability",
    progress: 30,
  },
];
const strategies = [
  {
    type: "visual",
    text: "Loves working with picture books",
  },
];

const comments = {
  parent: [
    {
      author: "Jenny Smith",
      text: "Joel loves watching Ben 10 so a good way to talk to him at times is to ask him about his favourite characters",
    },
  ],
  teacher: [
    {
      author: "Ms May",
      text: "I find Joel to be working best when the general noise level of the room is not too loud and allows Joel to focus on his own tasks",
    },
  ],
  specialist: [
    {
      author: "Kevin Tran",
      text: "The best way to introduce new information to Joel is to provide it to him in simple words and pictures.",
    },
    {
      author: "Kevin Tran",
      text: "2) I recommend giving Joel extra time for him to complete his homework and assignments ",
    },
  ],
};

const stats = {
  strengths: ["Picks up work easily", "Great working with pictures"],
  weaknesses: [
    "A break every 20 minutes",
    "Encouragement to ask for help",
    "Work with his friend James Wu if possible",
  ],
  interests: ["Loves Ben10", "Likes working with a helper"],
};

function StudentProfile() {
  const navs = ["Student Profile", "Joel Smith"];
  const context = useContext(AppContext);
  const { studentContext } = context;
  const { student, setStudent } = studentContext;

  useEffect(() => {
    if (!student) {
      setStudent((prevStudent) => ({
        ...prevStudent,
        progress,
        strategies,
        comments,
        stats,
      }));
    }
  }, []);

  useEffect(() => {
    console.log(student);
  }, [student]);

  return (
    <>
      {/* <NavBar /> */}
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "2.5vh 10vw 10vh 10vw",
          }}
        >
          <AvatarUser></AvatarUser>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px 10px 20px 10px",
            }}
          >
            <Breadcrumbs navs={navs} />
            <Space>
              <Button>
                <BookOutlined />
                Evaluation Log
              </Button>
              <Link to="/skillsprogress">
                <Button>
                  <BarChartOutlined />
                  Skills Progress
                </Button>
              </Link>
            </Space>
          </div>
          {student && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={fakekid}
                    alt="Profile Picture"
                    style={{
                      width: "10rem",
                      height: "10rem",
                      borderRadius: "50%",
                      marginRight: "32px",
                    }}
                  />
                  <UserDetails name="Joel Smith" year={7} ability="Autism" />
                </div>
                <ProgressBars progress={student.progress} />
              </div>

              <Space size="large" direction="vertical">
                <StatsCards stats={student.stats} />
                <TeachingStrategies strategies={student.strategies} />
                <CommentSection comments={student.comments} />
              </Space>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
