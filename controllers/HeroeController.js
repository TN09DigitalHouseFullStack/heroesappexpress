const heroes = [
    {
        'id': 'dc-batman',
        'superhero':'Batman', 
        'publisher':'DC Comics', 
        'alter_ego':'Bruce Wayne',
        'first_appearance':'Detective Comics #27',
        'characters':'Bruce Wayne',
        "powerstats": {
            "intelligence": 100,
            "strength": 26,
            "speed": 27,
            "durability": 50,
            "power": 47,
            "combat": 100
          }
    },
    {
        'id': 'dc-superman',
        'superhero':'Superman', 
        'publisher':'DC Comics', 
        'alter_ego':'Kal-El',
        'first_appearance':'Action Comics #1',
        'characters':'Kal-El',
        "powerstats": {
            "intelligence": 94,
            "strength": 100,
            "speed": 100,
            "durability": 100,
            "power": 100,
            "combat": 85
          }
    },
    {
        'id': 'dc-flash',
        'superhero':'Flash', 
        'publisher':'DC Comics', 
        'alter_ego':'Jay Garrick',
        'first_appearance':'Flash Comics #1',
        'characters':'Jay Garrick, Barry Allen, Wally West, Bart Allen',
        "powerstats": {
            "intelligence": 88,
            "strength": 48,
            "speed": 100,
            "durability": 60,
            "power": 100,
            "combat": 60
          }
    },
    {
        'id': 'dc-green',
        'superhero':'Green Lantern', 
        'publisher':'DC Comics', 
        'alter_ego':'Alan Scott',
        'first_appearance':'All-American Comics #16',
        'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz',
        "powerstats": {
            "intelligence": 63,
            "strength": 80,
            "speed": 23,
            "durability": 90,
            "power": 100,
            "combat": 32
          }
    },
    {
        'id': 'dc-arrow',
        'superhero':'Green Arrow', 
        'publisher':'DC Comics', 
        'alter_ego':'Oliver Queen',
        'first_appearance':'More Fun Comics #73',
        'characters':'Oliver Queen',
        "powerstats": {
            "intelligence": 81,
            "strength": 12,
            "speed": 35,
            "durability": 28,
            "power": 39,
            "combat": 90
          }
    },
    {
        'id': 'dc-wonder',
        'superhero':'Wonder Woman', 
        'publisher':'DC Comics', 
        'alter_ego':'Princess Diana',
        'first_appearance':'All Star Comics #8',
        'characters':'Princess Diana',
        "powerstats": {
            "intelligence": 88,
            "strength": 100,
            "speed": 79,
            "durability": 100,
            "power": 100,
            "combat": 100
          }
    },
    {
        'id': 'dc-martian',
        'superhero':'Martian Manhunter', 
        'publisher':'DC Comics', 
        'alter_ego':'J\'onn J\'onzz',
        'first_appearance':'Detective Comics #225',
        'characters':'Martian Manhunter',
        "powerstats": {
            "intelligence": 100,
            "strength": 95,
            "speed": 92,
            "durability": 100,
            "power": 100,
            "combat": 85
          }
    },
    {
        'id': 'dc-robin',
        'superhero':'Robin/Nightwing', 
        'publisher':'DC Comics', 
        'alter_ego':'Dick Grayson',
        'first_appearance':'Detective Comics #38',
        'characters':'Dick Grayson',
        "powerstats": {
            "intelligence": 88,
            "strength": 11,
            "speed": 33,
            "durability": 28,
            "power": 36,
            "combat": 100
          }
    },
    {
        'id': 'dc-blue',
        'superhero':'Blue Beetle', 
        'publisher':'DC Comics', 
        'alter_ego':'Dan Garret',
        'first_appearance':'Mystery Men Comics #1',
        'characters':'Dan Garret, Ted Kord, Jaime Reyes',
        "powerstats": {
            "intelligence": 50,
            "strength": 34,
            "speed": 58,
            "durability": 80,
            "power": 100,
            "combat": 30
          }
    },
    {
        'id': 'dc-black',
        'superhero':'Black Canary', 
        'publisher':'DC Comics', 
        'alter_ego':'Dinah Drake',
        'first_appearance':'Flash Comics #86',
        'characters':'Dinah Drake, Dinah Lance',
        "powerstats": {
            "intelligence": 63,
            "strength": 8,
            "speed": 33,
            "durability": 20,
            "power": 52,
            "combat": 80
          }
    },
    {
        'id': 'marvel-spider',
        'superhero':'Spider Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Peter Parker',
        'first_appearance':'Amazing Fantasy #15',
        'characters':'Peter Parker',
        "powerstats": {
            "intelligence": 90,
            "strength": 55,
            "speed": 67,
            "durability": 75,
            "power": 74,
            "combat": 85
          }
    },
    {
        'id': 'marvel-captain',
        'superhero':'Captain America', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Steve Rogers',
        'first_appearance':'Captain America Comics #1',
        'characters':'Steve Rogers',
        "powerstats": {
            "intelligence": 69,
            "strength": 19,
            "speed": 38,
            "durability": 55,
            "power": 60,
            "combat": 100
          }
    },
    {
        'id': 'marvel-iron',
        'superhero':'Iron Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Tony Stark',
        'first_appearance':'Tales of Suspense #39',
        'characters':'Tony Stark',
        "powerstats": {
            "intelligence": 100,
            "strength": 85,
            "speed": 58,
            "durability": 85,
            "power": 100,
            "combat": 64
          }
    },
    {
        'id': 'marvel-thor',
        'superhero':'Thor', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Thor Odinson',
        'first_appearance':'Journey into Myster #83',
        'characters':'Thor Odinson',
        "powerstats": {
            "intelligence": 69,
            "strength": 100,
            "speed": 83,
            "durability": 100,
            "power": 100,
            "combat": 100
          }
    },
    {
        'id': 'marvel-hulk',
        'superhero':'Hulk', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Bruce Banner',
        'first_appearance':'The Incredible Hulk #1',
        'characters':'Bruce Banner',
        "powerstats": {
            "intelligence": 88,
            "strength": 100,
            "speed": 63,
            "durability": 100,
            "power": 98,
            "combat": 85
          }
    },
    {
        'id': 'marvel-wolverine',
        'superhero':'Wolverine', 
        'publisher':'Marvel Comics', 
        'alter_ego':'James Howlett',
        'first_appearance':'The Incredible Hulk #180',
        'characters':'James Howlett',
        "powerstats": {
            "intelligence": 63,
            "strength": 32,
            "speed": 50,
            "durability": 100,
            "power": 89,
            "combat": 100
          }
    },
    {
        'id': 'marvel-daredevil',
        'superhero':'Daredevil', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Matthew Michael Murdock',
        'first_appearance':'Daredevil #1',
        'characters':'Matthew Michael Murdock',
        "powerstats": {
            "intelligence": 75,
            "strength": 13,
            "speed": 25,
            "durability": 35,
            "power": 61,
            "combat": 100
          }
    },
    {
        'id': 'marvel-hawkeye',
        'superhero':'Hawkeye', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Clinton Francis Barton',
        'first_appearance':'Tales of Suspense #57',
        'characters':'Clinton Francis Barton',
        "powerstats": {
            "intelligence": 56,
            "strength": 12,
            "speed": 21,
            "durability": 10,
            "power": 29,
            "combat": 80
          }
    },
    {
        'id': 'marvel-cyclops',
        'superhero':'Cyclops', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Scott Summers',
        'first_appearance':'X-Men #1',
        'characters':'Scott Summers',
        "powerstats": {
            "intelligence": 75,
            "strength": 10,
            "speed": 23,
            "durability": 42,
            "power": 76,
            "combat": 80
          }
    },
    {
        'id': 'marvel-silver',
        'superhero':'Silver Surfer', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Norrin Radd',
        'first_appearance':'The Fantastic Four #48',
        'characters':'Norrin Radd',
        "powerstats": {
            "intelligence": 56,
            "strength": 100,
            "speed": 100,
            "durability": 90,
            "power": 100,
            "combat": 32
          }
    }
];

const randomHero = (listaHeroes) => {
    const cantidad = listaHeroes.length;
    let k = cantidad - 1;
    for(k ; k > 0; k--){
        const az = Math.floor(Math.random() * k);
        const temp = listaHeroes[az];
        listaHeroes[az] = listaHeroes[k];
        listaHeroes[k] = temp;
    }
    return listaHeroes;
}

const HeroeController = {
    index: (req, res) => {
        const heroesDesorder = randomHero(heroes);
        res.render('index', {heroes: heroesDesorder, title: 'App Heroes'});
    },
    detail: (req, res) => {
        const heroe = heroes.find(heroe => heroe.id === req.params.slug);
        res.render('detalleHeroe', {heroe: heroe, title: heroe.superhero});
    },
    publisher: (req, res) => {
        const publisher = req.params.publisher === "dc" ? "DC Comics": "Marvel Comics";
        const heroePublisher = heroes.filter(heroe => heroe.publisher === publisher);
        res.render('publisher', {heroes: heroePublisher, publisher: publisher, title: 'Heroes por Publisher'});
    }
}

module.exports = HeroeController;