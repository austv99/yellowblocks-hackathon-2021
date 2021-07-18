import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function CollapseMenu({titles}) {
    return (
        <Collapse>
        {titles.map((n) => (
            <Panel header={n.title}>
                <p>{n.content}</p>
            </Panel>
        ))}
      </Collapse>
    );
};

export default CollapseMenu;
