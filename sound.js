import * as Tone from "https://cdn.jsdelivr.net/npm/tone@15.5.72/+esm";
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();


const now = Tone.now();
document.querySelector("#play").addEventListener("click", async function () {
        await Tone.start();
        // trigger the attack immediately
        synth.triggerAttack("C4", now);
    });

document.querySelector("#stop").addEventListener("click", async function () {
        synth.triggerRelease(now); 
    })



//get data from CSV
//convert the first event into paramaters
