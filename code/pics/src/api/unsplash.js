import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID REk3baC3aG6xJkOJXoEuT55ACcg9lV6qqO3OzIvEBi8'
    }
});