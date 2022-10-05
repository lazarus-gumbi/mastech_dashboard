import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const SidebarData = [
    {
        icon: <DashboardIcon />,
        title: 'Dashboard',
        link: '/home/dashboard'
    },
    {
        icon: <DataSaverOffIcon />,
        title: 'Analytics',
        link: '/home/analytics'
    },
    {
        icon: <ManageAccountsIcon />,
        title: 'My Account',
        link: '/home/account_details'
    },
    {
        icon: <SupportAgentIcon />,
        title: 'Request Support',
        link: '/home/report'
    },
    {
        icon: <InfoIcon />,
        title: 'About MASTECH',
        link: '/home/about'
    },

]

