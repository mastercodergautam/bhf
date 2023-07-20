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
   var username=localStorage.getItem("user_name")
    var room_name=localStorage.getItem("roomname")
function send(){
    
    var message=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:username,
        message:message,
        like:0

    })
    document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
    firebase_message_id = childKey; 
    message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"]
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

} }); }); };
getData()
function updatelike(buttonid){
    console.log("click on the like button of-"+buttonid);
    messageid=buttonid;
    likes=document.getElementById(messageid).value ;
    updatedlikes=Number(likes)+1;
    firebase.database().ref(room_name).child(messageid).update({
        like:updatedlikes
    })
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomname");
    window.location="index.html"
}