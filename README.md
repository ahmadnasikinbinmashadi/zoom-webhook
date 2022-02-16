# Sample Zoom Webhook App 

Use of this sample app is subject to our [Terms of Use](https://zoom.us/docs/en-us/zoom_api_license_and_tou.html).

This is a sample app that demonstrates how to automate a part of the Webinar communications workflow using Zoom Webhooks, Zoom API and Sendgrid Email API.

**Prerequisites:**
* [Zoom account](https://zoom.us)
* [Zoom Marketplace Account](https://marketplace.zoom.us/docs/guides)

### Workflow

1. Start a meeting.
2. A "Meeting Ended Event" will be sent to your app's Endpoint Notification URL. 
3. After the meeting ends, you can use for the notification payload from zoom to your app.

### Steps to succesfully run the app locally: 
1. Schedule a Zoom meeting from [Zoom Web Portal](https://zoom.us/meeting#/upcoming).

2. Once the meeting is scheduled, share the join meeting Link with others so that they can join for the meeting.

3. Create a [JWT app](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) in the Zoom App Marketplace. Provide all the information required and your app credentials will be generated. In the features page,add a new [event subscription](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app#features). <br><br>For the **Event notification endpoint URL**, use [ngrok](https://ngrok.com/download) or a similar service to generate a HTTP tunnel. Once you download ngrok, run `./ngrok http 3000.` command in your terminal. Provide the generated url starting with "https" as your Event notification endpoint URL. Under Event Types, click on Webinar and subscribe to the "Webinar Ended" event. Save the subscription and click "Continue". Your JWT app will be activated in your account. From this app, you will need the generated **API Key**, **API Secret** and **Verification Token**. 

[![zoom-subs1.png](https://i.postimg.cc/zD0f4bxZ/zoom-subs1.png)](https://postimg.cc/py5xFTNq)

[![zoom-subs2.png](https://i.postimg.cc/3JTPjnX3/zoom-subs2.png)](https://postimg.cc/dD5HwRNf)

4. Clone this repository by running this git command in your terminal: `git clone https://github.com/ahmadnasikinbinmashadi/zoom-webhook.git`
5. Install all the dependencies by running `npm install` command in your terminal.
6. Create a .env file as .env.example and a gitignore file by running this command in your terminal: `touch .env .gitignore`
7. Open the .env file in your editor and include the following variables and their values in this file:
```
APIKey='Provide Your Zoom API Key Generated in Step 2 Here'
APISecret='Provide Your Zoom API Secret Generated in Step 2 Here'
VerificationToken='Provide Your Zoom App Verification Token Generated in Step 2 Here'
```
8. Add the ".env" file to the ".gitignore" file either by using your editor or by running `echo ".env" >> .gitignore` command in your terminal. This way, you will minimize the risk of exposing your credentials as Git will ignore the .env file.

9. Start the app by running `node app.js` command in your terminal. 

10. That's it! Your app will be up and running on port 3000. While your app is running, start your Scheduled meeting and end it. Once the meeting is ended, your app will recieve a payload from zoom that you can use as you need.  

## Referrence

[ShrijanaCodes github](https://github.com/ShrijanaCodes/SampleWebhookApp)

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.

