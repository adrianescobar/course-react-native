import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer ZwKLeeeqs0MMjT-u_ak5brNKNvTdIXv_adeQ5J90MAlt8_mgySFtc_859E0yvpNKbn_mqm8vzLx83AGoritK-F2-4ZkSPJ366WTPqNOhlq0BBhFZnnennKjn9P-YXnYx'
    }
});