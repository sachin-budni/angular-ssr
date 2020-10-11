import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server/main`).app;

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(universal);
