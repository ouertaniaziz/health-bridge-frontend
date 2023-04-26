import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiCalendar,
  FiUsers,
  FiFileText,
} from 'react-icons/fi';
import { FaCapsules } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from './feature/signIn';
import { useDispatch } from 'react-redux';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}
const LinkItemsDoctor: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, route: '/doctor/home' },
  { name: 'Appointments', icon: FiCalendar, route: '/doctor/appointments' },
  { name: 'Patients', icon: FiUsers, route: '/doctor/patients' },
  { name: 'Prescriptions', icon: FiFileText, route: '/doctor/prescriptions' },
  { name: 'Settings', icon: FiSettings, route: '/doctor/settings' },
];

const LinkItemsPatient: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, route: '/patient' },
  // { name: 'Profile', icon: FiTrendingUp, route: '/patient/profile' },
  { name: 'Account', icon: FiCompass, route: '/patient/account' },
  // { name: 'Favourites', icon: FiStar, route: '' },
  { name: 'Appoiments', icon: FiCompass, route: '/patient/appoiments' },

  {
    name: 'Prescription',
    icon: FaCapsules,
    route: '/patient/Prescription',
  },
];

const LinkItemsPharmacist: Array<LinkItemProps> = [
  { name: 'Profile', icon: FiHome, route: '/pharmacist' },
  { name: 'dashbord', icon: FiTrendingUp, route: '/pharmacist/dashbord' },
  { name: 'Medication', icon: FiCompass, route: '/pharmacist/medication' },
  { name: 'Prescription', icon: FiStar, route: '/pharmacist/prescription' },
  { name: 'Settings', icon: FiSettings, route: '' },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useSelector(state => state.auth.user);

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} role={state.role} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} state={state} />
      <Box p="4">{children}</Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <img
            src={require('./../healthLogo.png')}
            alt="logo"
            className="imagelogo"
          />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'flex' }} onClick={onClose} />
      </Flex>
      {rest.role === 'doctor'
        ? LinkItemsDoctor.map(link => (
            <NavItem key={link.name} icon={link.icon} route={link.route}>
              {link.name}
            </NavItem>
          ))
        : rest.role === 'patient'
        ? LinkItemsPatient.map(link => (
            <NavItem key={link.name} icon={link.icon} route={link.route}>
              {link.name}
            </NavItem>
          ))
        : rest.role === 'pharmacist'
        ? LinkItemsPharmacist.map(link => (
            <NavItem key={link.name} icon={link.icon} route={link.route}>
              {link.name}
            </NavItem>
          ))
        : null}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  route: ReactText;
}
const NavItem = ({ icon, children, route, ...rest }: NavItemProps) => {
  return (
    <Link
      href={route}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      {...rest}
    >
      <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <img
          src={require('./../healthLogo.png')}
          alt="logo"
          className="imagelogo"
        />
      </Text>

      <HStack>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://ik.imagekit.io/r5nhyj1e1/Doctor-PNG-Image.png?updatedAt=1682301245002'
                  }
                />
                <VStack alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">{rest.state.username}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {rest.state.role}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  dispatch(logout());
                  window.location.reload();
                  navigate('/home');
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
