import React from 'react';
import { Progress } from 'antd';


function ProgressBars({ progress }) {
  return (
    <>
        <div style={{ width: '30%' }}>
            {/* <Progress percent={50} showInfo={false} /> */}
            {progress.map((p) => (
                // <div style={{display: 'flex', justifyContent:'space-between', width: '100%'}}>
                <>
                    <h5>{p.name}</h5>
                    <Progress percent={p.progress} showInfo={false} />
                </>
                // </div>
            ))}
        </div>
    </>
  );
};

export default ProgressBars;