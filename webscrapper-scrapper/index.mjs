import express from 'express';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);


const app = express();
const port = 3001;

let result;

app.use((req, res, next) => {
    onValue(ref(db, 'pages'), snapshot => {
        result = snapshot.val();
        next();
    });
})

app.use((req, res) => {
    let list = result.reduce((prev, cur) => prev + `<div>${cur.page}</div>`, '');
    res.status(200).send(list);
    res.end();
});

app.listen(port);