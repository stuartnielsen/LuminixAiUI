import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobListing from './JobListings'
import PageHeader from '../components/PageHeader'
import ListingDetails from '../components/ListingDetails'
import App from '../App'

export default function PageRouter() {
  return (
    <>
      <PageHeader />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<App />} />
          {/* <Route path='/' exact element={<JobListing />} /> */}
          <Route path='/Listing' exact element={<ListingDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
