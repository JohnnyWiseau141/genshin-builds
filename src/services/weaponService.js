import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/weapons'

function getAllWeapons() {
   return fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
   })
      .then(res => res.json())
}

function getWeaponDetails(weapon) {
  return fetch(`${BASE_URL}/${weapon}`)
  .then(res => res.json())
}

export {
   getAllWeapons,
   getWeaponDetails
}