import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/news'

function getRecentNews() {
   return (BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

export {
   getRecentNews
}