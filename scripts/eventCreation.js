firebase.auth().onAuthStateChanged(function (user) {
    console.log("current user", firebase.auth().currentUser.uid);
    console.log("current user name", user.displayName);
    console.log("current user email", user.email);
    

});

document
    .getElementById("form_eventCreation")
    .addEventListener("submit", processForm);

function processForm(e) {

    console.log("Button clicked");

    e.preventDefault();

    firebase.auth().onAuthStateChanged(function (user) {
        var inv = db.collection("invitation");
        var curUser = firebase.auth().currentUser;
        var subject = document.getElementById("subject").value;
        var nyear = document.getElementById("year").value;
        var language = document.getElementById("language").value;
        var message = document.getElementById("message").value;

        const func = async () => {
            var timeID = "invitation" + firebase.firestore.Timestamp.now().toMillis();
            console.log("Milli: ", timeID);

            // create a new event
            inv.doc(timeID).set({
                subject: subject,
                name: curUser.displayName,
                year: nyear,
                language: language,
                message: message,
                docID: timeID,
                timeStamp: firebase.firestore.Timestamp.now()
            }).then(function () {
                window.location.assign("notification.html?" + timeID);
                console.log("created an event with", subject);
            });
        };
        func();

    });


};