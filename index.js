yes = [
    `Yes!`,
    `Correct!`,
    `Wow, you're a genius!`,
    `Dang, you've got good taste!`,
    `Omg how'd you know!?`
];

no = [
    `bro wtf`,
    `nah bro<br>
    like shit<br>
    u stupid or somethin?`,
    `stinky baby`,
    `stinky bitch`,
    `are u even irish`,
    `<pp style="font-size: 300%;">Fuck You</pp>`,
    `<strong>U A Bitch</strong>`
];

function func1(id, arg) {
    var x = document.getElementById(id);
    x.innerHTML = (arg==1)?yes[Math.floor(Math.random()*yes.length)]:no[Math.floor(Math.random()*no.length)];
}