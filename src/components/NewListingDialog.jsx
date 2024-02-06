import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input, TextField, Stack } from '@mui/material'
import { useState } from 'react'
import ListingApi from '../api/ListingApi'

const DEFAULT_REQUISITION_FORM = {
  title: '',
  description: '',
  requirements: '',
  requistionNumber: '',
  departmentName: '',
  departmentNumber: '',
  hiringManager: '',
  departmentHead: ''
}

export default function NewListingDialog({ open, setOpen }) {
  const [requisistionForm, setRequisitionForm] = useState(DEFAULT_REQUISITION_FORM)
  const submitNewListing = () => {
    ListingApi.newRequisition(requisistionForm)
    setOpen(false)
  }
  // console.log(requisistionForm)
  return (
    <>
      <Dialog open={open} fullScreen>
        <DialogTitle>New Job Listing</DialogTitle>
        <DialogContent>
          <Stack style={{ width: '400px' }}>
            <TextField
              label='Job Title'
              variant='standard'
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, title: event.target.value }))
              }}
            />
            <TextField
              label='Description'
              variant='standard'
              multiline
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, description: event.target.value }))
              }}
            />
            <TextField
              label='Requirements'
              variant='standard'
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, requirements: event.target.value }))
              }}
            />
            <TextField
              label='Requisistion Number'
              variant='standard'
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, requistionNumber: event.target.value }))
              }}
            />
            <TextField
              label='Department Name'
              variant='standard'
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, departmentName: event.target.value }))
              }}
            />
            <TextField
              label='Department Number'
              variant='standard'
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, departmentNumber: event.target.value }))
              }}
            />
            <TextField
              label='Hiring Manager'
              variant='standard'
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, hiringManager: event.target.value }))
              }}
            />
            <TextField
              label='Department Head'
              variant='standard'
              onChange={event => {
                setRequisitionForm(reqForm => ({ ...reqForm, departmentHead: event.target.value }))
              }}
            />
            {/* <TextField label='Salary' variant='standard' />
            <TextField label='Candidate Intake' variant='standard' />
            <TextField label='Goals for the role' variant='standard' /> */}
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
