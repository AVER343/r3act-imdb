import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCj-xbVPYaK_oJ1jZuW6T2DueZ_QGlGPYw",
    authDomain: "movies-react-d5156.firebaseapp.com",
    databaseURL: "https://movies-react-d5156.firebaseio.com",
    projectId: "movies-react-d5156",
    storageBucket: "movies-react-d5156.appspot.com",
    messagingSenderId: "239822949321",
    appId: "1:239822949321:web:2fa3365cb9b915d079f618",
    measurementId: "G-FC75SQSTWH"
  };
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        photoURL:userAuth.photoURL,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
// export const addFavouriteMovie = 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;