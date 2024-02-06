import axios from 'axios'
import { FakeListing } from '../Data/FakeListings'

let instance = null
let url = 'http://localhost:8080'

class ListingApi {
  newRequisition = async form => {
    console.log(form)
    return await axios.post(`${url}/add-job`, form, { timeout: 30000 }).then(result => result)
  }
  getJobListings = async () => {
    return FakeListing
  }
  getJobListingDetails = async id => {
    // console.log(FakeListing)
    return FakeListing[id]
  }
  getCandidateSummary = async () => {}
}

const getInstance = () => {
  if (instance == null) {
    instance = new ListingApi()
  }
  return instance
}
export default getInstance()

/* 
Get all listings
get specific listing info
post new listing
edit listing?
Get candidate info??
*/
