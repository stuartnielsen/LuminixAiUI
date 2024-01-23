import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input, TextField, Stack } from '@mui/material'

export default function NewListingDialog({ open, setOpen }) {
  const submitNewListing = () => {
    setOpen(false)
  }
  return (
    <>
      <Dialog open={open} fullScreen>
        <DialogTitle>New Job Listing</DialogTitle>
        <DialogContent>
          <Stack style={{ width: '400px' }}>
            <TextField label='Job Title' variant='standard' />
            <TextField label='Description' variant='standard' multiline />
            <TextField label='Requirements' variant='standard' />
            <TextField label='Salary' variant='standard' />
            <TextField label='Candidate Intake' variant='standard' />
            <TextField label='Goals for the role' variant='standard' />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => submitNewListing()}>Submit</Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
