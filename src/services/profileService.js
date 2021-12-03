import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/profile'

function showProfileDetails(user){
   return fetch(`${BASE_URL}/${user._id}`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
}

export {
   showProfileDetails,
}