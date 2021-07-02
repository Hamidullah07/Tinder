import Axios from 'axios';

const instance = Axios.create({
    baseURL : "https://tinder-backend-hami.herokuapp.com"
});

export default instance;