let firebaseConfig = {
    apiKey: "AIzaSyD0wO4x1fTAYfYQsDqWYNEXygj5m8GGv4Y",
    authDomain: "blogging-website-56e03.firebaseapp.com",
    projectId: "blogging-website-56e03",
    storageBucket: "blogging-website-56e03.appspot.com",
    messagingSenderId: "56923943899",
    appId: "1:56923943899:web:7ce2d65681dcf738916dfe"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();