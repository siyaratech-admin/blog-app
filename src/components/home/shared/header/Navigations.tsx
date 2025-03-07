import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import { Chip } from '@mui/material';

import { NavLink } from 'react-router';

import { useLocation } from 'react-router';

export const NavLinks = [
  {
    title: 'Blog',
    to: '/home/blog',
  },
  {
    title: 'Contact',
    to: '/home/contact',
  },
];

const Navigations = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '15px',
    a: {
      color: theme.palette.text.secondary,
    },

    fontWeight: 500,
    '&.active': {
      backgroundColor: 'rgba(93, 135, 255, 0.15)',
      a: {
        color: theme.palette.primary.main,
      },
    },
  }));

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {NavLinks.map((navlink, i) => (
        <StyledButton
          color="inherit"
          className={pathname === navlink.to ? 'active' : 'not-active'}
          variant="text"
          key={i}
        >
          <NavLink to={navlink.to}>
            {navlink.title}{' '}

          </NavLink>
        </StyledButton>
      ))}
    </>
  );
};

export default Navigations;
