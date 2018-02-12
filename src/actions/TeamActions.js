import Axios from 'axios';
// Shows all teams
const ROOT_URL = 'https://immunisation-api-product.test.ctmers.io';
export const GET_TEAMS = 'GET_TEAMS';

export function getTeams() {
    const endpoint = '/team'
    const url = `${ROOT_URL}${endpoint}`;
    console.log(url);
    const request =  Axios.get(url); //returns a promise

    return {
        type: GET_TEAMS,
        payload: request
    }
}