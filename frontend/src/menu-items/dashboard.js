// assets
import { DashboardOutlined, HomeOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  HomeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'Main Site',
      title: 'Main Site',
      type: 'item',
      url: 'https://breisoft.com',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
