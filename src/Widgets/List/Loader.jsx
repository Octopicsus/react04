import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loader = () => (
  <div style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1000,
  }}>

    <Flex align="center" justify="center" gap="middle">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 68, color: 'black' }} spin />} />
    </Flex>
    
  </div>
);

export default Loader;