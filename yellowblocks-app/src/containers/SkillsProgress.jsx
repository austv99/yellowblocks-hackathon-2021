import React from "react";
import "../App.css";
import AvatarUser from "../components/AvatarUser";
import Breadcrumbs from "../components/BreadCrumbs";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SkillsGraph from "../components/SkillsGraph";

function SkillsProgress() {
  const navs = ["Student Profile", "Joel Smith", "Skill Progress"];

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
          >
            <Breadcrumbs navs={navs} />
          </div>
          <SkillsGraph></SkillsGraph>
        </div>
      </div>
    </>
  );
}

export default SkillsProgress;
