import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDvqTwzRS74lifH--56J79ln_irSCbPc7c',
  authDomain: 'devfest-sd-22.firebaseapp.com',
  databaseURL: 'https://devfest-sd-22-default-rtdb.firebaseio.com',
  projectId: 'devfest-sd-22',
  storageBucket: 'devfest-sd-22.appspot.com',
  messagingSenderId: '80606563354',
  appId: '1:80606563354:web:51172a0114bb2b111115a3',
  measurementId: 'G-96HT1GMXQ9',
});
export const db = getFirestore(firebaseApp);
