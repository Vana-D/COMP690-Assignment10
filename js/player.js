/*
    Project: Assignment 10: The Music Player Application v2
    Date: 01/17/24
    Author: Van Do
*/

// HELPER FUNCTION TO RETURN DOM ELEMENTS
const $ = (id) => { return document.getElementById(id)};


let selectValue = albumNames;
let index0 = 0;
let index1 = 0;
let index2 = 0;


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
        this.played = 0;
    }

    play = function() {
        this.played = this.played +1;
        this.played++;
        // DISPLAY FAVORITE BUTTON
        if (this.played = 0) {
            favBtn.classList.add('d-none');
        } else {
            favBtn.classList.remove('d-none');
        };
        
    }
    
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
        
    }   
    
}

const played = playBtn.addEventListener('click', () => {
    // for each select increase count
    if ((selectValue).value == '2') { 
        index0 = index0 + 1;
        album3.play()
        console.log(`Album3 - New Found Glory played ${index0} times.`)
    } else if((selectValue).value == '1') { 
        index1 = index1 + 1;
        album2.play()
        console.log(`Album2 - Blink182 played ${index1} times.`)
    } else if ((selectValue).value == '0')  { 
        index2 = index2 + 1;
        album1.play()
        console.log(`Album1 - Operation Ivy played ${index2} times.`)
    } else {
        console.log('Please make a selection.')
    }
   
    favBtn.addEventListener('click', () => {
        jbox.favoriteAlbum();
        favoriteAlbum.innerHTML = `${jbox.favoriteAlbum()}`;
        console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)
    })
        
});  

let jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy');
const album2 = new Album('Blink 182', 'Dude Ranch');
const album3 = new Album('New Found Glory', 'Sticks and Stones');

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)
jbox.addOptions()







// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()







//  ---------------------------------------------