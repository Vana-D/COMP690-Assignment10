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
            option.value = index;
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
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

const jbox = new Jukebox();
const album1 = new Album('Operation Ivy', 'Energy');
const album2 = new Album('Blink 182', 'Dude Ranch');
const album3 = new Album('New Found Glory', 'Sticks and Stones');

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);
jbox.addOptions();

let albums = jbox.albums;
console.log(albums);

playBtn.addEventListener('click', (e) => {
    e.preventDefault();  
    favBtn.classList.remove('d-none');
    for ( Object.value in albums) {
      return `${jbox.albums[Object.value].play()}`
    }
})

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

favBtn.addEventListener("click", () => {
    favoriteAlbum.innerHTML =  (`Your favorite album is: ${jbox.favoriteAlbum()}`)
})
