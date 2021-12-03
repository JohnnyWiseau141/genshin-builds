import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/profile'

function showProfileDetails(id){
   return fetch(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
   .then(res => res.json())
}

export {
   showProfileDetails,
}