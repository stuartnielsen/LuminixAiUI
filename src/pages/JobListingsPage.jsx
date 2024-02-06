import { DataGrid } from '@mui/x-data-grid'
import { FakeListing } from '../Data/FakeListings'
import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import NewListingDialog from '../components/NewListingDialog'
import { useNavigate } from 'react-router-dom'

const columns = [
  { headerName: 'Title', field: 'title', flex: 2 },
  { headerName: 'Description', field: 'description', flex: 2 },
  { headerName: 'Expiration', field: 'expirationDate', flex: 2 },
  {
    headerName: 'Applicants',
    field: 'applicants',
    flex: 1,
    renderCell: applicants => <>{applicants.value.length}</>
  }
]

export default function JobListingPage() {
  const navigate = useNavigate()
  const [listingDialogOpen, setListingDialogOpen] = useState(false)
  const [listingDetails, setListingDetails] = useState()
  const theme = useTheme()

  console.log(FakeListing[1])
  return (
    <div style={{ ...theme.theme.main.paper, height: '1000px', margin: '24px' }}>
      <Button
        onClick={() => setListingDialogOpen(true)}
        variant='outlined'
        style={{ ...theme.theme.main.button, marginBottom: '24px' }}>
        Add New Listing
      </Button>
      <DataGrid columns={columns} rows={FakeListing} pageSize={100} onRowClick={row => navigate(`Listing?id=${row.id}`)} />
      {/* <DataGrid columns={columns} rows={FakeListing} pageSize={100} onRowClick={row => setListingDetails(row.row)} /> */}
      <NewListingDialog open={listingDialogOpen} setOpen={setListingDialogOpen} />
    </div>
  )
}
