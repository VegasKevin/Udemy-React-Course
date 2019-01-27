import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9b4567840f5c66fdb9a8a2a3204ace8b43e41e2f61fc88517b2bc53c55b4c0c7'
        }
});

