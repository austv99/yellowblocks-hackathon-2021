import React from 'react';
import { Rate } from 'antd';

function Evaluation() {
    return (
      <>
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h style={{fontWeight: 'bold'}}>Concentration</h>
                <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={2}/></div>
            </div>
            <p>Gets distracted fairly often, however has been able to concentrate on simple tasks.</p>
          </div>
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h style={{fontWeight: 'bold'}}>Problem Solving</h>
                <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={4}/></div>
            </div>
            <p>When focused, has very good problem solving. Really enjoys puzzles.</p>
          </div>
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h style={{fontWeight: 'bold'}}>Speaking</h>
                <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={3}/></div>
            </div>
            <p>Good although can stutter at times.</p>
          </div>
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h style={{fontWeight: 'bold'}}>Behaviour</h>
                <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={5}/></div>
            </div>
            <p>Very well behaved and mannered.</p>
          </div>
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h style={{fontWeight: 'bold'}}>Sociability</h>
                <div style={{padding: '0px 10px 10px 30px'}}><Rate disabled defaultValue={2}/></div>
            </div>
            <p>Struggles slightly with making friends.</p>
          </div>
      </>
    );
  };

export default Evaluation;