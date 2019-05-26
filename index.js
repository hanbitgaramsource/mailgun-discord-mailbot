// 상세한 버전은 알아서 적힐 것 (node_modules)
const express = require('express');
const parser = require('body-parser');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const app = express();
const app_port = process.env.PORT || 3000;
const params = new URLSearchParams();

// 이 상수 안에 Discord의 WebHook 주소를 입력하면 됩니다.
const MAILBOT_URL = '';

// 파서 설정
app.use(parser.urlencoded({extended: false}));

// json 배열로 변환
app.use(parser.json());

// Template 생성
function template(from, title, content){
    let templates = '';
    templates += '메일 발송자 : '+from+'\n';
    templates += '메일 제목 : '+title+'\n';
    templates += '```\n'+content+'\n```';
    return templates;
}

if(MAILBOT_URL==null || MAILBOT_URL==undefined){
    console.log('Hook Link에 대한 상수가 지정되지 않았습니다.');
    process.abort();
}

app.post('/', function(request, response){
        response.send('');

        // 변수명에 하이픈은 들어갈 수 없으므로 강제로 변경함.
        const { "body-plain": bodyplain } = request.body;

        // 메일 Template 데이터 생성
        let mail_data = template(request.body.from, request.body.subject, bodyplain);

        // 폼에 들어갈 내용 지정
        params.append('username', '[보낸 사람] '+request.body.from);
        params.append('content', mail_data);

        // 메일 데이터를 콘솔에 띄움.
        console.log(mail_data);

        // Hook으로 전송
        fetch(MAILBOT_URL, {method: 'POST', body: params});
})

// 애플리케이션 Listen
app.listen(app_port);