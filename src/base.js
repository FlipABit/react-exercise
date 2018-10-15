import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOqalzB5BJY8YNgfVmkxCUwOpW8A3cP08",
    authDomain: "catch-of-the-day-bmm.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bmm.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;