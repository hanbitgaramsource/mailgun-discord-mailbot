'use strict'

const mail_bot = require('./bin/start');

exports.hook = function(URL){
    mail_bot.URL = URL;
    console.log(URL);
}