// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAnalytics } from 'firebase/analytics'

import { getFirestore, collection, getDocs } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCTDFd0SAO9oAkzhwG5sR5FJMWZHTVAtbY',

  authDomain: 'chathub-d709a.firebaseapp.com',

  projectId: 'chathub-d709a',

  storageBucket: 'chathub-d709a.appspot.com',

  messagingSenderId: '223745415158',

  appId: '1:223745415158:web:0f7e170e4d95e0cfdb59d7',

  measurementId: 'G-ZWMPGREBN7'
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const analytics = getAnalytics(app)

export const firestore = getFirestore(app)

export const auth = getAuth(app)
