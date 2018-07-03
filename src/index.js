'use strict';

exports.handler = (event) => {
    console.log('Lambda triggered by ' + JSON.stringify(event));
    return 'Success';
};
