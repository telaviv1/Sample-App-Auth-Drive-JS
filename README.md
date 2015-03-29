Sample-App-Auth-Drive-JS
========================
This sample application provides an introduction to working with the Spark OAuth 2.0 process and examples of basic Spark Drive functionalities.

Required setup before running the sample code 
=============================================
1. Clone the software repository (copy its files) to a folder on your web server. 
2. Register the app on the Spark Developers portal at https://spark.autodesk.com/developers.
3. In the API Keys tab of the app registration, enter your app's Callback URL and copy the app key and app secret for later use.
4. Copy scripts/config.example.js to scripts/config.js and set your app's details there:
  *  Copy your app key to the value of the variable CLIENT_ID.
  *  Enter the Base64 value of (app key:app secret) as the value of the variable AUTH_HASH. Base64 encoding can be performed at https://www.base64encode.org/. The app key and secret are encoded as a single string including the colon. For example if app key = "x1" and  app secret = "y2", the base64 encoding of "x1:y2" is "eDE6eTI=".
  *  Enter the URL of the sample's callback.html file in the REDIRECT_URL variable. This must be the same as the redirect URL entered in the app definitions, with a fully qualified URL (for example https://example.com/my-project/callback.html )
  *  Save your changes and run the sample.
