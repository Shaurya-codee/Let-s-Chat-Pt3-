const firebaseConfig = {
      apiKey: "AIzaSyD5c6mfTRpTyyiCmXubu3cV0kvwhYvgz64",
      authDomain: "kwitter-dd509.firebaseapp.com",
      databaseURL: "https://kwitter-dd509-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd509",
      storageBucket: "kwitter-dd509.appspot.com",
      messagingSenderId: "583306247726",
      appId: "1:583306247726:web:6c524ac1ad9f81ee0c29bf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,message:msg,like:0})
    document.getElementById("msg").value="";
}
