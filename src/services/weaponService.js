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

function createWeapon(weaponData){
   return fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${tokenService.getToken()}`,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(weaponData)
   })
   .then(res => res.json())
}

export {
   getAllWeapons,
   getWeaponDetails,
   createWeapon
}