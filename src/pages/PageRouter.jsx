import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobListingPage from './JobListingsPage'
import PageHeader from '../components/PageHeader'
import ApplicantInfoPage from './ApplicantInfopage'
import ListingOverview from './ListingOverview'
import LoginPage from './LoginPage'

export default function PageRouter() {
  // is there a case to have routing? if we just go to a component based navigation,
  //we can pass the data from one component to the next without having to make API calls.
  //this would make association much easier, assuming we are storing all the data within the listing object.
  //If we are not storing the data this way, it will be easier to use a router solution that way we can simply query the data we want to display
  //the only routes that we should need are the base, a specific listing, and a login/logout
  return (
    <>
      <PageHeader />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' exact element={<LoginPage />} /> */}
          <Route path='/' exact element={<JobListingPage />} />
          <Route path='/Listing' exact element={<ListingOverview />} />
          <Route path='/Applicant' exact element={<ApplicantInfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
