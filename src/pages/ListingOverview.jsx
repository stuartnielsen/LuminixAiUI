import { DataGrid } from '@mui/x-data-grid'
import ListingDetails from '../components/ListingDetails'
import { Button } from '@mui/material'
import Upload from 'rc-upload'
import { useState } from 'react'
import { FakeApplicants } from '../Data/FakeApplicants'
// import { useUploadFile } from 'react-firebase-hooks/storage'
// import { getStorage, ref } from 'firebase/storage'

const columns = [
  { headerName: 'Name', field: 'fullName', flex: 2 },
  { headerName: 'Rating', field: 'score', flex: 2 },
  { headerName: 'Submition Date', field: 'id', flex: 2 }
  // {
  //   headerName: 'Progress',
  //   field: 'applicants',
  //   flex: 1,
  //   renderCell: applicants => <>{applicants.value.length}</>
  // }
]

// const storage = getStorage('firebaseApp')
const uploadAddress = `http://localhost:8080/create-user`

export default function ListingOverview() {
  // const [uploadFile, uploading, snapshot, error] = useUploadFile()
  // const [selectedFile, setSelectedFile] = useState()
  // const Ref = ref(storage, 'file.pdf')

  // const upload = async () => {
  //   if (selectedFile) {
  //     const result = await uploadFile(Ref, selectedFile)
  //     console.log(result)
  //   }
  // }
  let data = FakeApplicants ? FakeApplicants.filter(e => e.Jobid === '1') : []
  console.log(data)
  return (
    <>
      <Button variant='contained'>Back</Button>
      <Upload
        name='file'
        method='POST'
        action={uploadAddress}
        multiple
        directory={false}
        accept='.txt,.pdf'
        onSuccess={() => console.log('Upload Successful')}
        onError={() => console.log('Could not upload file')}>
        <Button variant='contained'>New Applicant</Button>
      </Upload>

      {/* <p>
        {selectedFile && <span>selected file:{selectedFile.name}</span>}
        <input
          type='file'
          onChange={e => {
            const file = e.target.files ? e.target.files[0] : undefined
            setSelectedFile(file)
          }}
        />
        <button onClick={upload}>upload File</button>
      </p> */}
      <ListingDetails />
      <DataGrid rows={data ? data : []} columns={columns} style={{ height: '500px' }} />
    </>
  )
}
