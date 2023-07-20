
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAFEJGDwobN4462xOQ_WhRKgeVW-mcdxs4",
      authDomain: "kwitter-32462.firebaseapp.com",
      databaseURL: "https://kwitter-32462-default-rtdb.firebaseio.com",
      projectId: "kwitter-32462",
      storageBucket: "kwitter-32462.appspot.com",
      messagingSenderId: "1060891493710",
      appId: "1:1060891493710:web:099248b772728e8b444a1f"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="welcome "+username+"!";
     function addroom(){
      roomname=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroom"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html"
     }
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();
function redirecttoroomname(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html"
}