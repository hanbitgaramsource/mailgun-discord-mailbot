// node_modules Dependency
const express = require('express');
const parser = require('body-parser');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

// Express bind to app
const app = express();
const app_port = process.env.PORT || 3000;
const params = new URLSearchParams();

// DISCORD WEBHOOK LINK
var MAILBOT_URL = '';

// Parser setting
app.use(parser.urlencoded({extended: false}));

// json array convert
app.use(parser.json());

// Template create
function template(from, title, content){
    let templates = '';
    templates += 'Mail Sender : '+from+'\n';
    templates += 'Mail Title : '+title+'\n';
    templates += '```\n'+content+'\n```';
    return templates;
}

app.post('/', function(request, response){
        MAILBOT_URL = exports.URL;

        response.send('');

        // 변수명에 하이픈은 들어갈 수 없으므로 강제로 변경함.
        const { "body-plain": bodyplain } = request.body;

        // Mail Template Data Create
        let mail_data = template(request.body.from, request.body.subject, bodyplain);

        // Hook data append
        params.append('username', '[Mail Sender] '+request.body.from);
        params.append('content', mail_data);

        // Mail data show to console
        console.log(mail_data);

        // Hook Send!
        fetch(MAILBOT_URL, {method: 'POST', body: params});
})

// Application Listen
app.listen(app_port);