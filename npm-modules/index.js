const { format } = require('date-fns');
const { v4: uiid } = require('uuid');

console.log(format(new Date(), 'dd-MM-yyy\tHH:mm:ss'));
console.log(uiid());
