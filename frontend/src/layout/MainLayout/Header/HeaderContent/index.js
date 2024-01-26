import { Box, IconButton, Link, useMediaQuery, Tabs, Tab } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>{!matchesXs && <Search />}</Box>
      <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <Tabs value={0} centered>
          <Tab label="Site Viewer" />
          <Tab label="README" />
          <Tab label="Code Explorer" />
        </Tabs>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          component={Link}
          href="https://github.com/breisoft/"
          target="_blank"
          disableRipple
          color="secondary"
          title="github profile"
          sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
        >
          <GithubOutlined />
        </IconButton>
        <Notification />
        {!matchesXs && <Profile />}
        {matchesXs && <MobileSection />}
      </Box>
    </Box>
  );
};

export default HeaderContent;
