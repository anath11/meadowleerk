// Extra js library that is exported with exports function
const fortuneCookies = [
    "Conquer your fears or they will conquer you",
    "River never springs",
    "Do not fear what you don't know",
    "You will have a pleasent suprise",
    "Whenever possible, keep it simple"
];

exports.getFortune = () =>{
    const idx = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
};