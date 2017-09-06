Setup: 

- https://snowball.digital/Blog/Capturing-Pictures-in-React-Native

- https://facebook.github.io/react-native/docs/getting-started.html

- https://www.npmjs.com/package/react-native-camera-roll-picker


Google Cloud Vision API:

:- using @google-cloud/vision Package in Node.js: 

	- https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/README.md

	- https://cloud.google.com/vision/docs/reference/libraries

:- using superagent Package in Node.js: 

	- https://stackoverflow.com/a/45162635

Example: 

POST : https://vision.googleapis.com/v1/images:annotate?key={YOUR_API_KEY}

- with Json Request: Example: 
------------------------------------------------------------------------------------
{
  "requests": [
    {
      "features": [
        {
          "maxResults": 2,
          "type": "LABEL_DETECTION"
        }
      ],
      "image": {
        "source": {
          "imageUri": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"
        }
      }
    }
  ]
}
-------------------------------------------------------------------------------------


Release apk:

- https://stackoverflow.com/questions/35283959/build-and-install-unsigned-apk-on-device-without-the-development-server

- https://facebook.github.io/react-native/docs/signed-apk-android.html

