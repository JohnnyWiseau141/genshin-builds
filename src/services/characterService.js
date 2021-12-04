import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/characters'

function getAllCharacters() {
   return fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

function getCharacterDetails(character) {
   return fetch(`${BASE_URL}/${character}`,{})
   .then(res => res.json())
}

function createCharacter(characterData){
   return fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
      },
      body: JSON.stringify(characterData)
   })
   .then(res => res.json())
}

export {
   getAllCharacters,
   getCharacterDetails,
   createCharacter
}