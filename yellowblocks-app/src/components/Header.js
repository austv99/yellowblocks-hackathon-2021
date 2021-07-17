import React from 'react';
import { PageHeader } from 'antd';

function Header({ title }) {
    return (
      <>
          <PageHeader title={title}/>
      </>
    );
  };

export default Header;