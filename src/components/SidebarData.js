import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import BugReportIcon from '@mui/icons-material/BugReport';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SidebarData = [
    {
        icon:<DashboardIcon/>,
        title:'Dashboard',
        link:'/dashboard'
    },
    {
        icon:<DataSaverOffIcon/>,
        title:'Analytics',
        link:'/analytics'
    },
    {
        icon:<ManageAccountsIcon/>,
        title:'My Account',
        link:'/account_details'
    },
    {
        icon:<BugReportIcon/>,
        title:'Report a problem',
        link:'/report'
    },
    {
        icon:<InfoIcon/>,
        title:'About MASTECH',
        link:'/about'
    },
    
]

