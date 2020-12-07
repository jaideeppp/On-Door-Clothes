import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDBDy2fRDKR2EZmuz4DD--fHm7hE8i4kVg",
    authDomain: "on-door-clothing.firebaseapp.com",
    projectId: "on-door-clothing",
    storageBucket: "on-door-clothing.appspot.com",
    messagingSenderId: "691056613064",
    appId: "1:691056613064:web:859ec3fbfd4579c05737fd",
    measurementId: "G-BQJ4BVEE91"
};

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
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select-account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
