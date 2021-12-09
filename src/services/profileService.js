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

function createBuild(buildData){
   return fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
      },
      body: JSON.stringify(buildData)
    })
    .then(res => res.json())
}

export {
   getProfile,
   getMyCharacters,
   createBuild
}