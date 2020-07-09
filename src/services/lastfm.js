const API_KEY = '91fc9891954018529a4e46110c65adef';
const url = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=' + API_KEY + '&format=json'

async function getTopArtists() {
    let topArtists = null;
    await fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((jsonText) => {
            topArtists = JSON.parse(jsonText);
        }).catch((error) => {
            alert('error: ' + error);
        });
    return topArtists;
}

export default {
    getTopArtists
};