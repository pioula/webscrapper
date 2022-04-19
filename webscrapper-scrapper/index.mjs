import express from 'express';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbCjSI_L_GBlYtFgss6c5AQK1p_gCMAe4",
  authDomain: "webscrapper-71830.firebaseapp.com",
  databaseURL: "https://webscrapper-71830-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webscrapper-71830",
  storageBucket: "webscrapper-71830.appspot.com",
  messagingSenderId: "886237649633",
  appId: "1:886237649633:web:465003065668cc670cb5a0"
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
    //let list = result.reduce((prev, cur) => prev + `<div>${cur.page}</div>`, '');
    res.status(200).send(process.env.API_KEY);
    res.end();
});

app.listen(port);