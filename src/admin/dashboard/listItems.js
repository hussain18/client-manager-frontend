import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { GroupAdd, Logout } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const MainListItems = ({ tabSelected: { dashboard, addClient } }) => {
  return (
    <React.Fragment>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton selected={dashboard}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItemButton>
      </Link>
      <Link
        to={'/create_client'}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ListItemButton selected={addClient}>
          <ListItemIcon>
            <GroupAdd />
          </ListItemIcon>
          <ListItemText primary='Add client' />
        </ListItemButton>
      </Link>
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
