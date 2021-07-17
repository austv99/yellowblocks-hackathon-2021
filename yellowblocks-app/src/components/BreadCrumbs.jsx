import React from 'react';
import { Breadcrumb } from 'antd';

function Breadcrumbs({ navs }) {
  return (
    <>
        <Breadcrumb>
            {navs.map((n) => (
                <Breadcrumb.Item>{n}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;