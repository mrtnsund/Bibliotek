let bibliotek = [];

function Book(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
};
Book.prototype.info = function () {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
};
let book1 = new Book('Bibelen', 'ukjent', 'too many', 'not read');
let book2 = new Book('fsdafs', 'ukjent', 'too many', 'not read');

bibliotek.push(book1);
bibliotek.push(book2);
bibliotek.push(book2);
bibliotek.push(book2);


let container = document.getElementById("container");
let biblioDiv = document.getElementById("bibliotek");


for (let i = 0; i < bibliotek.length; i++){
    let element = document.createElement('div');
    element.classList.add("bok");
    element.id = i;
    element.innerHTML = bibliotek[i].info();
    biblioDiv.appendChild(element);
}
let checked = false;
let knapp = document.getElementById('leggTil');
knapp.addEventListener('click',  () => {
    let element = document.createElement('div');
    element.id = 'nyBok';

    if (!checked){
    biblioDiv.appendChild(element);
    checked = true;
    } else {
        biblioDiv.removeChild(element);
        checked = false;
    }
});