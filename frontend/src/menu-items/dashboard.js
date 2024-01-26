// assets
import { DashboardOutlined, HomeOutlined } from '@ant-design/icons';

import WebIcon from '@mui/icons-material/Web';

// icons
const icons = {
  DashboardOutlined,
  HomeOutlined,
  WebIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'projects',
      title: 'Projects',
      type: 'item',
      url: '/',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'Main Site',
      title: 'Main Site',
      type: 'item',
      url: 'https://breisoft.com',
      icon: icons.WebIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
