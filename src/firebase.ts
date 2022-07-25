import { getAnalytics } from 'firebase/analytics';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { enableMultiTabIndexedDbPersistence, getFirestore } from 'firebase/firestore';
import { getPerformance, initializePerformance } from 'firebase/performance';

/**
 * Load Firebase config in index.html with /__/firebase/init.js. It stubs out
 * window.firebase.initializeApp to grab the config and saves it on the window
 * for use here. This is a workaround for the fact that the Firebase SDK v9 is
 * modular and doesn't support init.js and top-level await is not well supported
 * so loading from init.json caused issues with Safari, Jest, Vite, etc.
 *
 * https://github.com/gdg-x/hoverboard/pull/2368
 */

declare global {
  interface Window {
    firebaseConfig?: FirebaseOptions;
  }
}

// const firebaseConfig = window.firebaseConfig;
const firebaseConfig = {
  apiKey: 'AIzaSyDvqTwzRS74lifH--56J79ln_irSCbPc7c',
  authDomain: 'devfest-sd-22.firebaseapp.com',
  databaseURL: 'https://devfest-sd-22-default-rtdb.firebaseio.com',
  projectId: 'devfest-sd-22',
  storageBucket: 'devfest-sd-22.appspot.com',
  messagingSenderId: '80606563354',
  appId: '1:80606563354:web:51172a0114bb2b111115a3',
  measurementId: 'G-96HT1GMXQ9',
};

if (!firebaseConfig) {
  throw new Error('window.firebaseConfig is not defined');
}

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const performance = getPerformance(firebaseApp);
export const analytics = getAnalytics(firebaseApp);

initializePerformance(firebaseApp);
enableMultiTabIndexedDbPersistence(db);
