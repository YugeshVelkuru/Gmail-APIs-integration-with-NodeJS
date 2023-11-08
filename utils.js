const createConfig = (url, accessToken) => {
        return{
            method:'get',
            url, url,
            headers:{
                Authorization: `Bearer ${accessToken}`,
                'content-type': 'application/json'
            },
        }
    };
    
    module.exports = { createConfig };
