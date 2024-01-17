/*
    Project: Assignment 10: The Music Player Application v2
    Date: 01/17/24
    Author: Van Do
*/

// HELPER FUNCTION TO RETURN DOM ELEMENTS
const $ = (id) => { return document.getElementById(id)};

let fav = document.createElement('p');
class Jukebox {
    constructor(albums) {
        this._albums = []
    }
    addAlbum = function(album) {
        this._albums.push(album);   
    }
    // APPEND OPTIONS TO DROPDOWN LIST
    addOptions = function(album) {
        for (const [index, album] of this._albums.entries()) {
            let option = document.createElement('option');
            albumNames.appendChild(option);
            option.value = index;
            option.innerHTML = (`"${album.title}" - Artist: ${album.artist}`)
            console.log(index, album);
        }
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this._albums.length; i++) {
            if (this._albums[i].played > max) {
                max = this._albums[i].played
                fav = this._albums[i]
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
        this.played += 1
        // ADD EVENT LISTENER TO PLAY BUTTON
        playBtn.addEventListener('click', () => {
            albumListValue = albumList.value;
            fav.innerHTML = `${jbox.favoriteAlbum()}`;
        });
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`

    }
}

let jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy');
const album2 = new Album('Blink 182', 'Dude Ranch');
const album3 = new Album('New Found Glory', 'Sticks and Stones');

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)
jbox.addOptions()

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)


// favoriteAlbum.appendChild(fav);
// fav.innerHTML = `${jbox.favoriteAlbum()}`;


//  ---------------------------------------------







