import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

let data;

onValue(ref(db), snapshot => {
    data = snapshot.val()
});

export function getData(table) {
    return data[table];
}

