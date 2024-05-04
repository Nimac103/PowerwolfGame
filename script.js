'use strict';

const powerwolf = [
    {
      albumTitle: 'Return In Bloodred',
      publicationYear: '2005',
      cover: 'return-in-bloodred',
      songs: ['Mr. Sinister', 'We Came To Take Yor Souls', 'Kiss Of The Cobra King', 'Black Mass Hysteria', 'Demons And Diamonds', 
      'Montecore', 'The Evil Made Me Do It', 'Lucifer In Starlight', 'Son Of The Morning Star'],
    },
    {
      albumTitle: 'Lupus Dei',
      publicationYear: '2007',
      cover: 'lupus-dei',
      songs: ['Lupus Daemonis (Intro)', 'We Take It From The Living', 'Prayer In The Dark', 'Saturday Satan', 'In Blood We Trust', 
      'Behind The Leathermask', "Vampires Don't Die", 'When The Moon Shines Red',' Mother Mary Is A Bird Of Prey', 'Tiger Of Sabrod', 'Lupus Dei'],
    }, 
    {
      albumTitle: 'Bible Of The Beast',
      publicationYear: '2009',
      cover: 'bible-of-the-beast',
      songs: ['Opening: Prelude To Purgatory', 'Raise Your Fist, Evangelist', 'Moscow After Dark', 'Panic In The Pentragram', 'Catholic In The Morning', 
      'Seven Deadly Saints', 'Werewolves Of America', 'We Take The Church By Storm', 'Resurrection By Erection', 'Midnight Messiah', "St. Satan's Day", "Wolves Against The World"],
    },
    {
      albumTitle: 'Blood Of The Saints',
      publicationYear: '2011',
      cover: 'blood-of-the-saints',
      songs: ["Agnus Dei (Intro)", "Sanctified With Dynamite", "We Drink Your Blood", "Murder At Midnight", "All We Need Is Blood", "Dead Boys Don't Cry", 
      "Son Of A Wolf", "Night Of The Werewolves", "Phantom Of The Funeral", "Die, Die, Crucified", "Ira Sancti (When The Saints Are Going Wild)"],
    },
    {
      albumTitle: 'Preachers Of The Night',
      publicationYear: '2013',
      cover: 'preachers-of-the-night',
      songs: ["Amen And Attack", "Secrets Of The Sacristy", "Coleus Sanctus", "Sacred And Wild", "Kreuzfeuer", "Cardinal Sin", "In The Name Of God (Deus Vult)",
      "Nochnoi Dozor", "Lust For Blood", "Extatum Et Oratum", "Last Of The Living Dead"],
    },
    {
      albumTitle: 'Blessed And Possessed',
      publicationYear: '2015',
      cover: 'blessed-and-possessed',
      songs: ["Blessed And Possessed", "Dead Until Dark", "Army Of The Night", "Armata Strigoi", "We Are The Wild", "Higher Than Heaven", "Christ And Combat", 
      "Sanctus Dominus", "Sacramental Sister", "All You Can Bleed", "Let There Be Night"],
    },
    {
      albumTitle: 'Metallum Nostrum',
      publicationYear: '2015',
      cover: 'metallum-nostrum',
      songs: ["Touch Of Evil", "Conquistadores", "Edge Of Thorns", "Power And Glory", "Out In The Fields", "Shot In The Dark", "Gods Of War Arise", "The Evil That Men Do",
      "Headless Cross", "Night Crawler"],
    },
    {
      albumTitle: 'The Sacrament Of Sin',
      publicationYear: '2018',
      cover: 'the-sacrament-of-sin',
      songs: ["Fire And Forgive", "Demons Are A Girl's Best Friend", "Killers With The Cross", "Incense And Iron", "Where The Wild Wolves Have Gone", "Stossgebet",
      "Nightside Of Siberia", "The Sacrament Of Sin", "Venom Of Venus", "Nighttime Rebel", "Fist By Fist (Sacralize Or Strike)"],
    },
    {
      albumTitle: 'Call Of The Wild',
      publicationYear: '2021',
      cover: 'call-of-the-wild',
      songs: ["Faster Than The Flame", "Beast Of Gevaudan", "Dancing With The Dead", "Varcolac", "Alive Or Undead", "Blood For Blood (Faoladh)", "Glaubenskraft", 
      "Call Of The Wild", "Sermon Of Swords", "Undress To Confess", "Reverent Of Rats"],
    },
    {
      albumTitle: 'Interludium',
      publicationYear: '2023',
      cover: 'interludium',
      songs: ["Wolves Of War", "Sainted By The Storm", "No Prayer At Midnight", "My Will Be Done", "Altars On Fire", "Wolfborn", "Stronger Than The Sacrament", 
      "Living On A Nightmare", "Midnight Madonna", "Bete du Gevaudan"],
    },
    {
      albumTitle: 'Wake Up The Wicked',
      publicationYear: '2024',
      cover: 'wake-up-the-wicked',
      songs: ["Bless 'em With the Blade", "Sinners of the Seven Seas", "Kyrie Klitorem", "Heretic Hunters", "1589", "Viva Vulgata", "Wake Up the Wicked", "Joan of Arc", 
      "Thunderpriest", "We Don't Wanna Be No Saints", "Vargamor"]
      
    } 
]

let song = document.querySelector('.song');
const playButton = document.querySelector('.btnPlay'); 
const guessButton = document.querySelector('.btnGuess'); 
let nextButton;
let guess = document.querySelector('.guessInput'); 
let coverImg = document.querySelector('.cover'); 
let message = document.querySelector('.textfield');  
let score = document.querySelector('.score'); 
let tries = document.querySelector('.tries'); 
let highscore = document.querySelector('.highscore');
const allSongs = []; 
let currentGuess, randomSong; 
let currentScore = 0; 
let currentTries = 3;
let currentHighscore = 0; 

song.classList.add('hidden'); 

function showSong(displaySong) {
    document.querySelector('.song').textContent = displaySong; 
}

for (const albums of powerwolf) {
    allSongs.push(albums.songs); 
} 

function getRandomSong(arr) {
    let randomAlbum = Math.floor((Math.random() * (arr.length)));
    randomSong = arr[randomAlbum][Math.floor((Math.random() * (arr[randomAlbum].length)))]; 
    return randomSong; 
}

function findAlbumIndex(songInput) {
  let albumIndex;
  for(let album of powerwolf) { 

    for(let albumSongs in album.songs) {
    /**
    If the current albumSong is part of the songs list of the object entry with the correct albumTitle
     */
      if(album.songs[albumSongs].includes(songInput)) {
          albumIndex = powerwolf.findIndex(title => title.albumTitle === album.albumTitle); 
          console.log(albumIndex);
        }
    }
  }
  return albumIndex; 
}

function setToDefault () {
    message.textContent = 'Which Powerwolf album is this song from? 🐺' 
    song.classList.add('hidden');  
    guess.value = '' 
    coverImg.src = "powerwolf-logo.png"
}

function nextSong () {
    setToDefault(); 
    song.classList.remove('hidden');  
    song.style.color = '#b95a0b';
    randomSong = getRandomSong(allSongs); 
    showSong(randomSong); 
}

function createNextButton () {
    let nextButton = document.createElement('button'); 
    nextButton.textContent = 'Next'
    song.appendChild(nextButton); 
    nextButton.classList.add('btnNext'); 

    nextButton.addEventListener('click', function () {
        nextSong(); 
        this.parentNode.remove(); 
    });
    return nextButton; 
}

playButton.addEventListener('click', function() {
    nextSong(); 
    currentScore = 0;   
    score.textContent = currentScore;
    currentTries = 3;
    tries.textContent = currentTries; 
    playButton.disabled = true;
    guessButton.disabled = false;  
})

guessButton.addEventListener('click', function () {
  currentGuess = guess.value

  for(let album of powerwolf) { 

    for(let albumSongs in album.songs) {
    /**
    If the current randomSong is part of the songs list of the object entry with the correct albumTitle & the currentGuess is equal to the albumTitle
     */
      if (album.songs[albumSongs].includes(randomSong) & currentGuess.toLowerCase() === album.albumTitle.toLowerCase() & tries !== 0) {
          song.style.color = '#007006';
          message.textContent = `Yes! The song "${randomSong}" is from the album "${album.albumTitle}" from ${album.publicationYear} 🐺`
          document.querySelector('.cover').src = `cover-${album.cover}.png`

          createNextButton(); 

          currentScore++;
          document.querySelector('.score').textContent = currentScore;

          guess.value = ''; 

      } else if (album.songs[albumSongs].includes(randomSong) & currentGuess.toLowerCase() !== album.albumTitle.toLowerCase() & tries !== 0) {

          currentTries--; 
          document.querySelector('.tries').textContent = currentTries; 
          guess.value = ''; 

          nextButton =createNextButton(); 
          const albumIndex = findAlbumIndex(randomSong);
          song.style.color = '#700000';
          message.textContent = `Wrong! The song "${randomSong}" is from the Powerwolf album "${powerwolf[albumIndex].albumTitle}" from ${powerwolf[albumIndex].publicationYear} 🐺`
          document.querySelector('.cover').src = `cover-${powerwolf[albumIndex].cover}.png`

      } else if (currentTries === 0) {
          setToDefault(); 
          song.classList.remove('hidden');  
          song.style.color = '#fff'; 
          const albumIndex = findAlbumIndex(randomSong);
          guessButton.disabled = true;
          document.querySelector('.cover').src = `cover-${powerwolf[albumIndex].cover}.png`
          playButton.disabled = false;
          message.textContent = `Wrong! The song "${randomSong}" is from the Powerwolf album "${powerwolf[albumIndex].albumTitle}" from ${powerwolf[albumIndex].publicationYear} 🐺`
          song.textContent = `You got no more tries left! Wanna try again?`

          if(currentHighscore < currentScore) {
              currentHighscore = currentScore;
              highscore.textContent = currentHighscore; 
          }

          //document.onkeydown = function(event) {
          //  if(event.key === "Enter") {
          //      event.preventDefault();
          //      nextButton.click(); 
          //  }
          //}
      }
    }
  } 
})

document.onkeydown = function(event) {
  guessButton.disabled = false; 
  if(event.key === "Enter") {
      event.preventDefault();
      guessButton.click(); 
  }
}
