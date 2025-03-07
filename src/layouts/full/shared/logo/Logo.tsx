import { FC, useContext } from 'react';

import { Link } from 'react-router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDark } from 'src/assets/images/logos/byteblog.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/byteblog.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLight } from 'src/assets/images/logos/byteblog.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/byteblog.svg';
import { styled } from '@mui/material';
import config from 'src/context/config';
import { CustomizerContext } from 'src/context/CustomizerContext';
import { Code } from '@mui/icons-material';


const Logo: FC = () => {
  const { isCollapse, isSidebarHover, activeDir, activeMode } = useContext(CustomizerContext);
  const TopbarHeight = config.topbarHeight;

  const LinkStyled = styled(Link)(() => ({
    height: TopbarHeight,
    width: isCollapse == "mini-sidebar" && !isSidebarHover ? '48px' : '220px',
    overflow: 'hidden',
    display: 'block',
  }));

  if (activeDir === 'ltr') {
    return (
      <LinkStyled to="/home/blog" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        {activeMode === 'dark' ? (
          <><h1 className='pl-2'>byteblog</h1></>
        ) : (
          <><h1 className='pl-2'>byteblog</h1></>
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled to="/home/blog" style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      {activeMode === 'dark' ? (
          <> <h1 className='pl-2'>byteblog</h1></>
        ) : (
          <><h1 className='pl-2'>byteblog</h1></>
      )}
    </LinkStyled>
  );
};

export default Logo;
