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

        let tittel = document.createElement('div');
        let forfatter = document.createElement('div');
        let sidetall = document.createElement('div');
        let erLest = document.createElement('div');

        tittel.classList.add("tittelBok");
        forfatter.classList.add("forfatterBok")
        sidetall.classList.add("sideantallBok");
        erLest.classList.add("erLest");
        erLest.id = i;

        tittel.innerHTML = bibliotek[i].title;
        forfatter.innerHTML = bibliotek[i].author;
        sidetall.innerHTML = bibliotek[i].pages;

        function erlestFunksjon() {
            if(bibliotek[i].read === true){
                erLest.style.backgroundColor = "rgba(60, 179, 113, 0.4)";
                return "Er lest";
            } else {
                erLest.style.backgroundColor = "rgba(255,0,0,0.4)";
                return "Er ikke lest"
            }
        }
        erLest.innerHTML = erlestFunksjon();
        

        element.appendChild(tittel);
        element.appendChild(forfatter);
        element.appendChild(sidetall);
        element.appendChild(erLest);

        biblioDiv.appendChild(element);
    }
};

let leggTilKnapp = document.getElementById("leggtilKnapp");
leggTilKnapp.addEventListener('click', () => {
    let tittel = document.getElementById('tittel').value;
    let forfatter = document.getElementById('forfatter').value;
    let antallSider = document.getElementById('sider').value;
    let newBook = new Book(tittel, forfatter, antallSider, true);
    bibliotek.push(newBook);
    display();
});

function endreLest(id){
    if (bibliotek[id].read === true){
        bibliotek[id].read = false;
        console.log(bibliotek[id].info())
    } else {
        bibliotek[id].read = true;
        console.log(bibliotek[id].info())

    }
}
display();