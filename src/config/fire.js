import firebase from 'firebase';
import 'firebase/storage';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAF8WYlaS_FYxzczKIlVkD7udBoCv_3D6Q",
    authDomain: "moviesearch-8dcdb.firebaseapp.com",
    databaseURL: "https://moviesearch-8dcdb.firebaseio.com",
    projectId: "moviesearch-8dcdb",
    storageBucket: "moviesearch-8dcdb.appspot.com",
    messagingSenderId: "905789405312"
  };
  firebase.initializeApp(config);
  const storage = firebase.storage();

  export{
    storage , firebase as default
  }
