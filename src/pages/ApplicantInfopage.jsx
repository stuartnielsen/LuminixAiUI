import { Card } from '@mui/material'
import { Stack } from '@mui/system'

export default function ApplicantInfoPage() {
  return (
    <>
      <Stack direction={'row'}>
        <Card sx={{ width: '30%' }}>
          <h3>Pros</h3>
        </Card>
        <Card sx={{ width: '30%', margin: '0% 3%' }}>
          <h3>Cons</h3>
        </Card>
        <Card sx={{ width: '30%' }}>
          <h3>Summary</h3>
        </Card>
      </Stack>
    </>
  )
}
