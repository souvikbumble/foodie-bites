import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  Box,
  makeStyles,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import Notification from '../layout/MainLayout/Header/NotificationSection.js';
import Profile from '../layout/MainLayout/Header/ProfileSection.js';
import Sidedrawer from './Sidedrawer.js';
import CartSection from '../layout/MainLayout/Header/CartSection.js';

import Avatar from '@mui/material/Avatar';

const headersData = (path) => [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Meals',
    href: '/allmeals',
  },
];

const useStyles = makeStyles({
  header: (props) => ({
    backgroundColor: 'transparent',
    position: props.pathname === '/' ? 'absolute' : 'static',
    display: props.pathname === '/login' ? 'none' : 'block',
    top: 0,
    left: 0,
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingRight: '79px',
    paddingLeft: '98px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
    backgroundColor: '#fcc82b'
  }),
  logo: {
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 600,
    color: 'black',
    textAlign: 'left',
    fontSize: '1.4rem',
  },
  menuButton: {
    fontWeight: 'bold',
    size: '18px',
    marginLeft: '20px',
    textTransform: 'capitalize',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    // color:'#FCC82B',
  },
  drawerContainer: {
    padding: '5px 0px',
    width: '280px',
  },
  logButtons: {
    display: 'flex',
  },
  signinButton: {
    borderRadius: '20px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  loginButton: {
    fontWeight: 'bold',
    marginLeft: '20px',
    borderRadius: '20px',
    backgroundColor: 'white',
    textTransform: 'capitalize',
  },
  spacerLogo: {
    visibility: 'hidden',
    width: 'calc(100vw - 206px)',
    border: '1px solid red',
    marginRight: '-25px',
  },
  personIcon: {
    marginRight: '6px',
  },
});

export default function Navbar() {
  const auth = useSelector((state) => state.authReducer);
  const location = useLocation();

  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    logButtons,
  } = useStyles(location);

  const [state, setState] = useState({
    mobileView: true,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
        <div className={logButtons}>
          <div>
            <Profile />
            <CartSection />
            {/* {auth.authenticated && <Notification />} */}
          </div>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',

          width: '100vw',
          marginRight: 0,
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            {/* <Avatar src={'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'} /> */}
            <Avatar src={'https://doc-00-3c-docs.googleusercontent.com/docs/securesc/dqg6ae47v9qd0aqveg2n51j7ec8nf9pr/9e6hpmlmmdqq0pvv43nlm2gv0o7b19kb/1694802600000/10600387297820325428/10600387297820325428/1aTX0_2goiXoUjlN1shqvXornK6EPgbdb?ax=AA75yW4Xx1LEiHawnMTe0tw3LAWuZ1K0BC-s_XRMTegpfwy0ncHS_qLR6EbcJwVPKEqNl9ZS8epTW9EtjEtlvUn727J_d-GBBvMSu3yRl5aHpRquQL9f1SahoFmTbRZgVbRlkHaxKCG4ytTOg7JI5jRB1NDxwptPnrqvhRsMVpJXZU4rihrGZXo6atlSLHQKp6JhaEJMIr8tzwKByEEjTe9OPzaytOdmnN1i9uB1O9TMhAcmPEo7Um219nYSV9PMeluO6uGXWW-lMm4Kk-AqFdy3Z5y9w9D0-4jZmGopoPb8YfCn9mjBYx3odwrbOx7iUpFKc4yRSJ1bzSyxAc-RPEU_OPiTmAIVBr-wzUtovwBIJRRrIRs7HeAHoXGN6JzTl9MQx5UL6g1OgcBOo2LY5ARw1jL7c2E8K83swyKhb3nKzxXATn8cBRcMUc2rOpSUULwoaJwjWBwk3nRDsY_y97vzCCbda-rW2R0rCOzYD0tKxaAfauagl6XNVf4xUDjw_IbaCpSapgEqR6oTPqak2ekSR6p2xWK5ryk4LiDMY4GByDP3u33fNNnvN0rQ0gZ9J-xyLLJluK0eu7hgqB4C2BZ89dTBxEq48IkRaosVcgBajTysuRnN7Bu-T1eyFeRsPKnN3zelTeH9sTBlb2Qde1T91vz5WB5blIZiECFTHysX-aA3UnFSifJKpXgJQRdrO6zbhlsah0AEVDko_t9yADyxDDEpg6ryOZK9vYvM-QLnHc0kNKiN6vKHurIPmxMJ3A9wCvUCFOIPxkOfc0iETxD9BhowFJUQZyyEEeqBqmEztn2MB0eYtAGY4l8zVJWdlcgM8FPcFcZWRNbK2p-4Lggg8Wy8u0JDqmMGuvUtKzQBT4zhdhK47V_RQqX10TygQIxptA&uuid=48246481-7b0a-474e-a078-52f199875cda&authuser=0&nonce=f3gebb45ev6b0&user=10600387297820325428&hash=loctpn370ugc02eq6k9kugmvla0udvn7'} />
            {/* <MenuIcon /> */}
          </IconButton>
          <Drawer
            {...{
              anchor: 'left',
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>
              <Sidedrawer onClose={handleDrawerClose} />
            </div>
          </Drawer>

          <div>{femmecubatorLogo}</div>
        </Box>

        <Box>
          <Profile />
          <CartSection />
          {/* {auth.authenticated && <Notification />} */}
        </Box>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Link
      {...{
        component: RouterLink,
        to: '/',
        color: 'inherit',
        style: { textDecoration: 'none' },
      }}
      className={logo}
    >
      Foodie Bites
    </Link>
  );

  const getMenuButtons = () => {
    const { pathname } = useLocation();

    return headersData(pathname).map(({ label, href }, index) => {
      return (
        <Button
          key={index}
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
          state={{ from: pathname, show: 'login' }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar elevation={0} className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
