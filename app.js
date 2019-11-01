let bibliotek = [];

function Book(title, author, pages, read){
    
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
};
Book.prototype.info = function () {
    return this.title + " by " + this.author + ", " + this.pages + " pages.";
};


let biblioDiv = document.getElementById("boker");

let i = 0;
function display(){
    for (i; i < bibliotek.length; i++){
        let element = document.createElement('div');
        element.classList.add("bok");
        element.id=i;
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
            if(bibliotek[element.id].read === false){
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
            display();
        });

        element.appendChild(tittel);
        element.appendChild(forfatter);
        element.appendChild(sidetall);
        element.appendChild(erLest);
        element.appendChild(fjern);
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