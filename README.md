# mailgun-discord-mailbot
## KOR
Mailgun의 메일을 Discord로 송신하는 디스코드용 메일 봇입니다.

### 사용방법
* Discord에서 자신의 서버에 채널을 생성합니다.
* 채널설정에 들어가서 메뉴의 Webhooks를 누른 뒤, Create Webhook을 누릅니다.
* WEBHOOK URL을 복사합니다.
* 메일건 디스코드 메일봇의 소스코드 안에 있는 링크 부분에 집어넣습니다.
* Mailgun에서 이메일 별 라우팅을 선택하면 됩니다.

### 코드
```typescript
  const mailBot = require('mailgun-discord-mailbot');
  mailBot.hook('[여기에 Discord Webhook 주소를 넣어주세요]');
```

### 추천 서비스 (Serverless)
* __Heroku__ - https://heroku.com (매우 간단합니다)
* __Amazon AWS__ - https://aws.amazon.com
* __Redhat OpenShift__ - https://www.openshift.com

## ENG
_I do not speak English well._

It is a mailbot for Discord that sends mail of Mailgun to Discord.

### Using Tutorial
* Discord creates a channel on its own server.
* Enter Channel Setting, click Webhooks in the menu, then click Create Webhook.
* Just __WEBHOOK URL__ COPY!
* Put it in the link section of the this project's source code.
* You can select email-specific routing in Mailgun.

### Code
```typescript
  const mailBot = require('mailgun-discord-mailbot');
  mailBot.hook('[Please Here Discord Webhook Address]');
```

### Recommended (Serverless)
* __Heroku__ - https://heroku.com (Very Easy!)
* __Amazon AWS__ - https://aws.amazon.com
* __Redhat OpenShift__ - https://www.openshift.com