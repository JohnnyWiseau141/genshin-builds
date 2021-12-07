import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/profile'

function getProfile(id){
   return fetch(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
   .then(res => res.json())
}

function getMyCharacters(id){
   return fetch(`${BASE_URL}/${id}/characters`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
   .then(res => res.json())
}

export {
   getProfile,
   getMyCharacters
}