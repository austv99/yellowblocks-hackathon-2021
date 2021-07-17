import React from 'react';


function UserDetails({ name, year, ability }) {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <h5 style={{fontWeight: 'bold'}}>Name</h5>
        <h3>{name}</h3>
        <h5 style={{fontWeight: 'bold'}}>Year</h5>
        <h3>{year}</h3>
        <h5 style={{fontWeight: 'bold'}}>Disability</h5>
        <h3>{ability}</h3>
        </div>
    </>
  );
};

export default UserDetails;