import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Box, Button, Pagination } from '@mui/material'
import Title from '../components/Title'

const rows = [
  {
    first_name: 'John',
    last_name: 'Doe',
    telephone_number: '123-456-7890',
    email_address: 'john.doe@example.com',
    street: '123 Main Street',
    city: 'Sampleville',
    country: 'United States',
    postal_code: '12345',
  },
  {
    first_name: 'Jane',
    last_name: 'Smith',
    telephone_number: '987-654-3210',
    email_address: 'jane.smith@example.com',
    street: '456 Elm Avenue',
    city: 'Townsville',
    country: 'Canada',
    postal_code: '67890',
  },
  {
    first_name: 'Michael',
    last_name: 'Johnson',
    telephone_number: '555-123-4567',
    email_address: 'michael.johnson@example.com',
    street: '789 Oak Road',
    city: 'Villageburg',
    country: 'Australia',
    postal_code: '54321',
  },
  {
    first_name: 'John',
    last_name: 'Doe',
    telephone_number: '123-456-7890',
    email_address: 'john.doe@example.com',
    street: '123 Main Street',
    city: 'Sampleville',
    country: 'United States',
    postal_code: '12345',
  },
  {
    first_name: 'Jane',
    last_name: 'Smith',
    telephone_number: '987-654-3210',
    email_address: 'jane.smith@example.com',
    street: '456 Elm Avenue',
    city: 'Townsville',
    country: 'Canada',
    postal_code: '67890',
  },
  {
    first_name: 'Michael',
    last_name: 'Johnson',
    telephone_number: '555-123-4567',
    email_address: 'michael.johnson@example.com',
    street: '789 Oak Road',
    city: 'Villageburg',
    country: 'Australia',
    postal_code: '54321',
  },
]

export function ClientsView() {
  const [currentPage, setCurrentPage] = React.useState(1)

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }

  return (
    <React.Fragment>
      <Title>Clients List</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email_address}</TableCell>
              <TableCell>{row.telephone_number}</TableCell>
              <TableCell>{`${row.street}, ${row.city}, ${row.country}, ${row.postal_code}`}</TableCell>
              <TableCell align='right'>
                <Button>See more</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          margin: 1,
          marginTop: 4,
        }}
      >
        <Pagination
          count={10}
          size='small'
          sx={{ justifyContent: 'end', display: 'flex' }}
          onChange={handlePageChange}
        />
      </Box>
    </React.Fragment>
  )
}
