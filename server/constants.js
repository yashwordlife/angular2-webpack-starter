var btoa = require('btoa');

var constants = function () {
    var clientId = '@!8F95.E03E.66EE.E9DD!0001!F03C.A687!0008!2BC3.BA8E';
    var clientSecret = 'clientsecret'
    return {
        content_type : 'application/x-www-form-urlencoded',
        token_url : 'https://idp.gluu.allegisindia.org/oxauth/seam/resource/restv1/oxauth/token',
        basic_authorize_credentials : btoa(clientId + ":" + clientSecret),
        scope : 'openid',
        grant_type : 'password'
    }
};

module.exports = constants;