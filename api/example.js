'use strict'
const axios = require('axios');

exports.example = async (loanGuid, username, password) => {

    //const AUTH_TOKEN = await token.createMyAccToken(username, password);
    return await axios.get(
        `https://my.${config.domain}/some/example/${loanGuid}`,
        {
            validateStatus: function (status) {
                if (status !== 200) {
                    console.log(`STATUS(${status}): https://my.${config.domain}/some/example/${loanGuid}`);
                }
                return status >= 200 && status < 300;
            },
            headers: { Cookie: `${AUTH_TOKEN.headers['set-cookie'][1].slice(0, 58)}` },
        }).catch(function (error) {
        console.log(error.response.data.error);
        return error.response;
    });
}