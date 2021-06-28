
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyACuQl1ouB-V-fNyZj7iu93h0QWalCULIU",
      authDomain: "kwitter-75cc5.firebaseapp.com",
      databaseURL: "https://kwitter-75cc5-default-rtdb.firebaseio.com",
      projectId: "kwitter-75cc5",
      storageBucket: "kwitter-75cc5.appspot.com",
      messagingSenderId: "985826327954",
      appId: "1:985826327954:web:f7f04bf79ff2bb7761554b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }





      


      
      
getData();
function addroom(){
room_name =document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

