# Gmail-APIs-integration-with-NodeJS

A Node.js application that checks for new emails in a Gmail account, 

sends replies to emails with no prior replies, 

and adds a label to and moves the email to that label.


## Table of Contents

# Prerequisites

- Node.js and npm installed on your local machine.
- 
- A Google Cloud project with the Gmail API enabled.
- 
- OAuth2 credentials created for your project.
- 
- Basic knowledge of Gmail API, OAuth2 authentication, and Node.js.

# getting-started
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/YugeshVelkuru/Gmail-APIs-integration-with-NodeJS.git

2. Navigate to the project:
 ```bash
   cd Gmail-APIs-integration-with-NodeJS

3. install dependencies:
```bash
   npm install

4. Configure your OAuth2 credentials and Gmail API settings. You can do this by editing the configuration in constants.js or using environment variables.

5. Start application
```bash
   node app.js
   
# usage

To check for new emails and perform the automation tasks,

send an HTTP GET request to the specified route. By default, this route is /check-emails.

You can change this route in your app.js if needed.

Example request:

```bash
curl http://localhost:3000/check-emails
- [Configuration](#configuration)

# Configuration
You need to configure the application with your OAuth2 credentials, Gmail API settings, and any other configuration required.

 You can do this by editing the constants.js file or by setting environment variables.

module.exports = {
  CLIENT_ID: 'YOUR_CLIENT_ID',
  CLIENT_SECRET: 'YOUR_CLIENT_SECRET',
  REDIRECT_URI: 'YOUR_REDIRECT_URI',
  GMAIL_EMAIL: 'YOUR_GMAIL_EMAIL',
  GMAIL_PASSWORD: 'YOUR_GMAIL_PASSWORD',
  
};

# contributer: Yugesh Velkuru





