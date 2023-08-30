import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { GroupAdd, Logout } from '@mui/icons-material'

export const MainListItems = ({
  tabSelected: { dashboard, addClient },
  handleTabChange,
}) => {
  return (
    <React.Fragment>
      <ListItemButton
        selected={dashboard}
        onClick={() => handleTabChange('dashboard')}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemButton>
      <ListItemButton
        selected={addClient}
        onClick={() => handleTabChange('addClient')}
      >
        <ListItemIcon>
          <GroupAdd />
        </ListItemIcon>
        <ListItemText primary='Add client' />
      </ListItemButton>
    </React.Fragment>
  )
}

export const SecondaryListItems = ({ logout }) => {
  return (
    <React.Fragment>
      <ListSubheader component='div' inset>
        Account options
      </ListSubheader>
      <ListItemButton onClick={logout}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText primary='Log out' />
      </ListItemButton>
    </React.Fragment>
  )
}
