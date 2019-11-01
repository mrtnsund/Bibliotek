var firebaseConfig = {
    apiKey: "AIzaSyBJ1MshxX3RLdEgHvPiXz7WiXvWZSpCgXM",
    authDomain: "bibliotek-27ae5.firebaseapp.com",
    databaseURL: "https://bibliotek-27ae5.firebaseio.com",
    projectId: "bibliotek-27ae5",
    storageBucket: "bibliotek-27ae5.appspot.com",
    messagingSenderId: "716961840563",
    appId: "1:716961840563:web:1ffbb9e5d47ef926df5fc6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
Book.prototype.info = function () {
    return this.title + " by " + this.author + ", " + this.pages + " pages.";
};

let bibliotek = [];
getData();
let biblioDiv = document.getElementById("boker");

function getData() {
    firebase.database().ref('Boker/').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            bibliotek.push(new Book(childData.tittel, childData.forfatter, childData.sideantall, childData.read))
        })
    })
}
function removeData(element){
    var slettItem = firebase.database().ref('Boker/' + element.id);
    slettItem.remove();
}

let i = 0;
function display() {
    for (i; i < bibliotek.length; i++) {
        let element = document.createElement('div');
        element.classList.add("bok");
        element.id = i;
        let tittel = document.createElement('div');
        let forfatter = document.createElement('div');
        let sidetall = document.createElement('div');
        let erLest = document.createElement('div');
        let fjern = document.createElement('div');
        erLest.style.backgroundColor = "rgba(255,0,0,0.4)";
        erLest.innerHTML = "Er ikke lest";

        tittel.classList.add("tittelBok");
        forfatter.classList.add("forfatterBok")
        sidetall.classList.add("sideantallBok");
        erLest.classList.add("erLest");
        fjern.classList.add("fjern");

        tittel.innerHTML = bibliotek[i].title;
        forfatter.innerHTML = bibliotek[i].author;
        sidetall.innerHTML = bibliotek[i].pages;
        fjern.innerHTML = "Fjern";

        
        erLest.addEventListener('click', () => {
            if (bibliotek[element.id].read === false) {
                bibliotek[element.id].read = true;
                erLest.style.backgroundColor = "rgba(255,0,0,0.4)";
                erLest.innerHTML = "Er ikke lest";
            } else {
                bibliotek[element.id].read = false;
                erLest.style.backgroundColor = "rgba(60, 179, 113, 0.4)";
                erLest.innerHTML = "Er lest";
            }
            display();
        });
        fjern.addEventListener('click', () => {
            bibliotek[element.id] = undefined;
            biblioDiv.removeChild(element);
            removeData(element);
            display();
        });

        element.appendChild(tittel);
        element.appendChild(forfatter);
        element.appendChild(sidetall);
        element.appendChild(erLest);
        element.appendChild(fjern);
        function writeData() {
            firebase.database().ref('Boker/' + i).set({
                tittel: bibliotek[i].title,
                forfatter: bibliotek[i].author,
                sideantall: bibliotek[i].pages,
                read: bibliotek[i].read
            });
        }

        writeData();
        biblioDiv.appendChild(element);
    }
};

let leggTilKnapp = document.getElementById("leggtilKnapp");
leggTilKnapp.addEventListener('click', () => {
    let tittel = document.getElementById('tittel').value;
    let forfatter = document.getElementById('forfatter').value;
    let antallSider = document.getElementById('sider').value;
    let newBook = new Book(tittel, forfatter, antallSider, false);
    bibliotek.push(newBook);
    display();
});

display();
