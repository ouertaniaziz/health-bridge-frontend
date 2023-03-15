import React from 'react';
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../frontOffice/feature/signIn';
import { useDispatch } from 'react-redux';

//open pull request
const ActiveUserComponents = () => {
  const state = useSelector(state => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(state);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Avatar
          size={'sm'}
          src={'https://avatars.dicebear.com/api/male/username.svg'}
        />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar
            size={'2xl'}
            src={'https://avatars.dicebear.com/api/male/username.svg'}
          />
        </Center>
        <br />
        <Center>
          <p>{state.username}</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(logout());
            window.location.reload();
            navigate('/home');
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ActiveUserComponents;
