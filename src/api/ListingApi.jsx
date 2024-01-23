import { FakeListing } from '../Data/FakeListings'

let instance = null

class ListingApi {
  getJobListings = async () => {
    return FakeListing
  }
  getJobListingDetails = async id => {
    console.log(FakeListing)
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
