firebase.auth().onAuthStateChanged(function (user) {

    console.log(user.email);
    console.log(user.displayName);
    username = user.uid;
    console.log(user.uid);
    db.collection("user").doc(user.uid).set({
        email: user.email,
        name: user.displayName
    })
});


// db.collection('user').doc(user.uid).onSnapshot(function (snap) {
//     console.log(snap.data());

//     //Customizes user index page to display the user's name which
//     //Is stored in the database
//     // document.getElementById("username").innerHTML = snap.data().name;

    

//     if (snap.data().nYear == null || snap.data().language == null) {
//         console.log("no year or language inserted");
//         location.replace('../static/dummyProfile.html')
//     }
// });