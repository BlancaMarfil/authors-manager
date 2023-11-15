import { initializeApp } from "firebase-admin/app";
import { credential } from "firebase-admin";
import { getDatabase } from 'firebase-admin/database'
import serviceAccount from './resources/serviceAccount.json'

export const firebase = initializeApp({
  credential: credential.cert(JSON.parse(JSON.stringify(serviceAccount))),
  databaseURL: "https://(default).firebasedatabase.app/",
});

export const database = getDatabase(firebase)