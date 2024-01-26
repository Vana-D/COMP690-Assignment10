/*
    Project: Assignment 10: The Music Player Application v2
    Date: 01/17/24
    Author: Van Do
*/

// HELPER FUNCTION TO RETURN DOM ELEMENTS
const $ = (id) => { return document.getElementById(id)};

class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album) 
    }
    // APPEND OPTIONS TO DROPDOWN LIST
    addOptions = function(album) {
        for (const [index, album] of this.albums.entries()) {
            let option = document.createElement('option');
            albumNames.appendChild(option);
            option.value = album.artist;
            option.innerHTML = (`"${album.title}" - Artist: ${album.artist}`)
        }
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (albums[i].played > max) {
                max = albums[i].played
                fav = albums[i]
            }
        }
        return fav.display()
    }
}
class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1; 
        console.log('"' + this.title + '" by: ' + this.artist + ' has played ' + this.played + ' times.')
    }
    display = function() {
        return `${this.artist}: "${this.title}". The album has been played ${this.played} times.`
    }
}

const jBox = new Jukebox();
const album1 = new Album('Operation Ivy', 'Energy');
const album2 = new Album('Blink 182', 'Dude Ranch');
const album3 = new Album('New Found Glory', 'Sticks and Stones');

jBox.addAlbum(album1);
jBox.addAlbum(album2);
jBox.addAlbum(album3);
jBox.addOptions();

let albums = jBox.albums;

playBtn.addEventListener('click', (e) => {
    e.preventDefault();  
    favBtn.classList.remove('d-none');
    let index = albumNames.selectedIndex;
    // let value = e.target.value;
    if (index === 0){
        album1.play();
    } else if (index === 1){
        album2.play();
    } else if (index === 2){
        album3.play();
    } else {
        console.log("An error has occurred.");
    }
});

favBtn.addEventListener("click", () => {
    favoriteAlbum.innerHTML =  (`Your favorite album is: ${jBox.favoriteAlbum()}`);
    console.log(albums);
});
