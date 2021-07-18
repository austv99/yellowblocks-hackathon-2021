import React from "react";
import "../App.css";
import AvatarUser from "../components/AvatarUser";
// import ipd from "../data/ipd.jpeg";
import aut from "../data/aut.png";
import eye from "../data/eye.png";
import fakekid from "../data/fakekid.jpeg";
import fakekid2 from "../data/z.jpeg";
import { Link } from "react-router-dom";

import SideBar from "../components/SideBar";
// import CourseCard from "../components/CourseCard";
import { Space } from "antd";

function HomePage() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar style={{ height: "100vh" }} />
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
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <img
              src={ipd}
              alt=""
              height="50%"
              style={{ borderRadius: "16px" }}
            /> */}
          </div>
          <h1>Welcome back Ms May</h1>

          <Space size="large" direction="vertical">
            <h2>Recently Viewed Profiles</h2>
            <Space size="large">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Link to="/student">
                  <img
                    src={fakekid}
                    alt="Profile Picture"
                    style={{
                      width: "7rem",
                      height: "7rem",
                      borderRadius: "50%",
                      // marginRight: "32px",
                      marginBottom: "12px",
                    }}
                  />
                  <h4>Joel Smith</h4>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={fakekid2}
                  alt="Profile Picture"
                  style={{
                    width: "7rem",
                    height: "7rem",
                    borderRadius: "50%",
                    marginBottom: "12px",
                  }}
                />
                <h4>Zoe Sul</h4>
              </div>
            </Space>
            <h2>Recently Viewed Resources</h2>
            <Space size="large">
              <div
                style={{
                  width: "300px",
                  borderRadius: "8px",
                  height: "175px",
                  backgroundImage: `url('${aut}')`,

                  backgroundSize: "300px 175px",
                }}
              ></div>
              <div
                style={{
                  width: "300px",
                  borderRadius: "8px",
                  height: "175px",
                  backgroundImage: `url('${eye}')`,

                  backgroundSize: "300px 175px",
                }}
              ></div>
            </Space>
          </Space>

          {/* <CourseCard image={aut}></CourseCard> */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
