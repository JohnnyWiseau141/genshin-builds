import * as tokenService from '../services/tokenService'
const BASE_URL = 'https://api.genshin.dev/'

function getAllCharacters() {
   return fetch(`${BASE_URL}/characters`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

export {
   getAllCharacters
}