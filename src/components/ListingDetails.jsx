import { useLocation } from 'react-router-dom'
import qs from 'qs'
import ListingApi from '../api/ListingApi'

export default function ListingDetails() {
  const location = useLocation()

  let querystring = ''
  if (location.search.length > 0 && location.search[0] === '?') {
    querystring = location.search.substring(1)
  }
  let itemNumber = qs.parse(querystring).id

  async function getListingInfo() {
    // let token = await acquireAccessToken(instance, accounts[0], env.runMode)
    // return axios.get(`${env.RmaUrl}/api/rma/${itemNumber}`, getConfiguration(token)).then(res => {
    //   return res.data
    // })
    var data = ListingApi.getJobListingDetails(itemNumber)
  }

  const { data } = () => ListingApi.getJobListingDetails(itemNumber)
  console.log(data)
  console.log(itemNumber)

  return <>Candidates</>
}
