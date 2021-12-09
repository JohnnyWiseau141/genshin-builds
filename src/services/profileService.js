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

function addCharacter(buildId){
   return fetch(`${BASE_URL}/${buildId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
      },
      body: JSON.stringify(buildId)
    })
   //  .then(res => res.json())
   .then(async response => {
      try {
         const data = await response.json()
         console.log('response data?', data)
      } catch(error) {
         console.log('Error Happened Here!')
         console.log(error)
         console.log(response.json)
      }
   })
}

export {
   getProfile,
   getMyCharacters,
   createBuild,
   addCharacter
}