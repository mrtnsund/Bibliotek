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
let book1 = new Book('Bibelen', 'ukjent', 'too many', true);
bibliotek.push(book1);
let container = document.getElementById("container");
let biblioDiv = document.getElementById("bibliotek");


let i = 0;
function display(){
for (i; i < bibliotek.length; i++){
    let element = document.createElement('div');
    element.classList.add("bok");
    element.id = i;
    element.innerHTML = bibliotek[i].info();

    var checkbox = document.createElement('input'); 
    checkbox.type = "checkbox"; 

    if (element.read){
        checkbox.checked = true;
    }
    var label = document.createElement('Label'); 
    label.innerHTML = "Lest";
    checkbox.appendChild(label);
    element.appendChild(checkbox);
    biblioDiv.appendChild(element);
}};

let leggTilKnapp = document.getElementById("knapp");
leggTilKnapp.addEventListener('click', () => {
    let tittel = document.getElementById('tittel').value;
    let forfatter = document.getElementById('forfatter').value;
    let antallSider = document.getElementById('sider').value;
    let newBook = new Book(tittel, forfatter, antallSider, false);
    bibliotek.push(newBook);
    display();
});

display();

