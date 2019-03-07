import axios from 'axios';

export const getData = () => {
    return axios.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json');
}