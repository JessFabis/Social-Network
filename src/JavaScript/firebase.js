  // Initialize Firebase
  var app_fireBase= {};
  (function (){
    var config = {
        apiKey: "AIzaSyDtx_GXUXDalpCmPGu0-jiGCX36HhWC-pE",
        authDomain: "picfood-a0a5a.firebaseapp.com",
        databaseURL: "https://picfood-a0a5a.firebaseio.com",
        projectId: "picfood-a0a5a",
        storageBucket: "picfood-a0a5a.appspot.com",
        messagingSenderId: "735993043164"
      };
      firebase.initializeApp(config);
      app_fireBase=firebase;
})()