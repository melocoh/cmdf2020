$("#button_submit").click(function(e){
    e.preventDefault();
    console.log("in handler: clicked!");

});

document
.getElementById("button_submit")
.addEventListener("click", processForm);

function processForm(e) {

    console.log("Button clicked");
    
    e.preventDefault();

    

    var inv = db.collection("invitation");
    // var user = firebase.auth().currenUser.uid;
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
            // userName: user,
            year: nyear,
            language: language,
            message: message,
            docID: timeID,
            timeStamp: firebase.firestore.Timestamp.now()
        }).then(function(){
            window.location.assign("dummyNextPage.html?" + timeID);
            console.log("created an event with", subject);
        });
    };
    func();
};





