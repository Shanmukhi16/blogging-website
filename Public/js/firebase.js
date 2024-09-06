let firebaseConfig = {
    //you can get the following details through firbase console
    apiKey: "your api key",
    authDomain: "your authDomain",
    projectId: "your projectId",
    storageBucket: "your storage bucket",
    messagingSenderId: "your messagingsenderId",
    appId: "your appId"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
