import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/profile'

function getProfile(id) {
   return fetch(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

function getMyCharacters(id) {
   return fetch(`${BASE_URL}/${id}/characters`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

function createBuild(id, buildData) {
   return fetch(`${BASE_URL}/${id}/builds`, {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
      },
      body: JSON.stringify(buildData)
   })
      .then(res => res.json())
}

function addCharacter(id, buildId, character, selectedIdx) {
   return fetch(`${BASE_URL}/${id}/builds/${buildId}/${selectedIdx}`, {
      method: 'PATCH',
      headers: {
         'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
   })
      .then(res => res.json())
}

function getMyBuilds(id) {
   return fetch(`${BASE_URL}/${id}/builds`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

function removeTeamBuild(id){
   return fetch(`${BASE_URL}/${id}/builds`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

export {
   getProfile,
   getMyCharacters,
   createBuild,
   addCharacter,
   getMyBuilds,
   removeTeamBuild
}