// db.collection("event").get().then(function(querySnapshot) {
// querySnapshot.forEach(function(doc) {
db.collection("invitation").orderBy("timeStamp", "desc").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        $('<div/>', {
            appendTo: '#eventId',
            id: doc.id,
            addClass: 'card defaultBackground col-12',
        });
        $('<div/>', {
            id: doc.id + 'card',
            appendTo: '#' + doc.id,
            addClass: 'card-body ml-5 pt-2 pb-2',
        });
        $('<h5/>', {
            appendTo: '#' + doc.id + 'card',
            addClass: 'card-title yellowColor font-weight-bold mb-0',
            text: doc.data().subject
        })
        $('<div/>', {
            id: doc.id + 'secondDiv',
            appendTo: '#' + doc.id + 'card',
            addClass: 'row'
        })
        $('<i/>', {
            appendTo: '#' + doc.id + 'secondDiv',
            addClass: 'fas fa-user yellowColor col-2 pt-1',
        })
        $('<p/>', {
            appendTo: '#' + doc.id + 'secondDiv',
            addClass: 'card-text text-secondary font-weight-bold font-italic col-10 mb-2',
            text: doc.data().name + " sent you a request"
        })
        $('<hr/>', {
            appendTo: '#' + doc.id + 'card',
            addClass: 'm-0 mb-2'
        })
        $('<div/>', {
                id: doc.id + 'thirdDiv',
                appendTo: '#' + doc.id + 'card',
                addClass: 'row'
            }),
            $('<i/>', {
                appendTo: '#' + doc.id + 'thirdDiv',
                addClass: 'far fa-check-circle col-1 text-white pr-0 pt-1',
            })
        $('<p/>', {
            appendTo: '#' + doc.id + 'thirdDiv',
            addClass: 'card-text whiteFont mb-0 pl-3 col-11 pl-0',
            text: doc.data().year + " years in Canada"
        })
        $('<i/>', {
            appendTo: '#' + doc.id + 'thirdDiv',
            addClass: 'far fa-check-circle col-1 text-white pr-0 pt-1',
        })
        $('<p/>', {
            appendTo: '#' + doc.id + 'thirdDiv',
            addClass: 'card-text whiteFont mb-0 pl-3 col-11 pl-0',
            text: "Speaks " + doc.data().language
        })
        $('<i/>', {
            appendTo: '#' + doc.id + 'thirdDiv',
            addClass: 'far fa-check-circle col-1 text-white pr-0 pt-1',
        })
        $('<p/>', {
            appendTo: '#' + doc.id + 'thirdDiv',
            addClass: 'card-text whiteFont mb-0 pl-3 col-11 pl-0',
            text: doc.data().message
        })
        // $('<i/>',{
        //   appendTo:'#'+doc.id+'thirdDiv',
        //   addClass:'far fa-check-circle col-1 text-white pr-0 pt-1',
        // })
        // $('<p/>',{
        //   appendTo:'#'+doc.id+'thirdDiv',
        //   addClass:'card-text whiteFont font-weight-bold mb-0 pl-3 col-11 pl-0',
        //   text:`Looking for ${doc.data().number-1}`
        // })
        // $('<i/>',{
        //   appendTo:'#'+doc.id+'thirdDiv',
        //   addClass:'far fa-check-circle col-1 text-white pr-0 pt-1',
        // })
        // $('<p/>',{
        //   appendTo:'#'+doc.id+'thirdDiv',
        //   addClass:'card-text whiteFont font-weight-bold mb-0 pl-3 col-11 pl-0',
        //   text:doc.data().date+" , "+doc.data().time
        // })
    });
});