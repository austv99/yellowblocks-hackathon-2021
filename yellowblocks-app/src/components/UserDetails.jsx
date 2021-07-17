import React from "react";

function UserDetails({ name, year, ability }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5 style={{ color: "#595959" }}>Name</h5>
        <h3>{name}</h3>
        <h5 style={{ color: "#595959" }}>Year</h5>
        <h3>{year}</h3>
        <h5 style={{ color: "#595959" }}>Disability</h5>
        <h3>{ability}</h3>
      </div>
    </>
  );
}

export default UserDetails;
