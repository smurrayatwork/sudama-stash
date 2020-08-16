import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import '@spectrum-css/vars/dist/spectrum-global.css';
import '@spectrum-css/vars/dist/spectrum-medium.css';
import '@spectrum-css/vars/dist/spectrum-light.css';
import '@spectrum-css/page/dist/index-vars.css';
import '@spectrum-css/button/dist/index-vars.css';
import '@spectrum-css/table/dist/index-vars.css';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" margin="size-0" gap="size-100">
      { children }
    </Flex>
  );
}

export default Layout;