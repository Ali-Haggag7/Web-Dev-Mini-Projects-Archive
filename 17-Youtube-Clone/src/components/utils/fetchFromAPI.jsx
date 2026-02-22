import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'x-rapidapi-key': 'dbe29f7affmsh1536db6cebe0673p1a399fjsn7a3407bcb406',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    },
}

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}