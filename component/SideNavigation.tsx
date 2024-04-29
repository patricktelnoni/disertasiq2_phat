import * as React from 'react';
import { 
  Menu, 
  Box, 
  NativeBaseProvider, 
  Pressable, 
  HamburgerIcon 
} from 'native-base';

const Example = () =>{
  return (
    <NativeBaseProvider>
        <Box w="90%" alignItems="center">
          <Menu w="190" trigger={triggerProps => {
            return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                    <HamburgerIcon />
                  </Pressable>;
          }}>
            <Menu.Item>Arial</Menu.Item>
            <Menu.Item>Nunito Sans</Menu.Item>
            <Menu.Item>Roboto</Menu.Item>
            <Menu.Item>Poppins</Menu.Item>
            <Menu.Item>SF Pro</Menu.Item>
            <Menu.Item>Helvetica</Menu.Item>
            <Menu.Item>Cookie</Menu.Item>
          </Menu>
        </Box>
    </NativeBaseProvider>
  );
}

export default Example;
