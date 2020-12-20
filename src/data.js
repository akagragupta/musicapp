import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "Lilo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Feild Tapes",
            id: uuidv4(),
            active: true,
            color: ["#8BAA65", "#24243A"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
        },
        {
            name: "Hereafter",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist: "Makro",
            id: uuidv4(),
            active: false,
            color: ["#425A9A", "#C1836F"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",
        },
        {
            name: "Flowers",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Feild Tapes",
            id: uuidv4(),
            active: false,
            color:["#5B413A", "#242339"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11249",
        },
        {
            name: "5 am",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            artist: "The Feild Tapes",
            id: uuidv4(),
            active: false,
            color: ["#8BAA65", "#24243A"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10309",
        },
        {
            name: "Peaches",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "Stan Forebee",
            id: uuidv4(),
            active: false,
            color:["#5B413A", "#242339"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11246",
        },
        
        {
            name: "Through Trees",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Feild Tapes",
            id: uuidv4(),
            active: false,
            color:["#5B413A", "#242339"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11251",
        },
        {
            name: "Peaches",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "Stan Forebee",
            id: uuidv4(),
            active: false,
            color:["#5B413A", "#242339"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11246",
        },
        {
            name: "Mimish",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist: "Makro",
            id: uuidv4(),
            active: false,
            color: ["#425A9A", "#C1836F"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",
        },
    ]
}

export default chillHop;