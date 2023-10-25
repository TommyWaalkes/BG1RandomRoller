let mainCharClasses = [];
mainCharClasses.push("Fighter", "Kensai", "Beserker", "Wizard Slayer", "Dwarven Defender", "Barbarian", "Ranger", "Archer", "Stalker", "Beast Master", "Paladin", "Cavalier", "Inquisitor", "Blackguard", "Undead Hunter", "Cleric", "Priest of Lathander", "Priest of Helm", "Priest of Talos", "Priest of Tyr", "Druid", "Totemic Druid", "Avenger", "Shapeshifter", "Shaman", "Mage", "Abjurer", "Illusionist", "Invoker", "Conjurer", "Diviner", "Enchanter", "Necromancer", "Transmuter", "Wild Mage", "Sorcerer", "Dragon Disciple", "Thief", "Assassin", "Bounty Hunter", "Swashbuckler", "Shadow Dancer", "Bard", "Blade", "Jester", "Skald", "Monk", "Sun Soul Monk", "Dark Moon Monk", "Fighter//Thief", "Fighter//Mage", "Fighter//Cleric", "Mage//Thief", "Cleric//Mage", "Cleric//Thief", "Fighter//Druid", "Cleric//Ranger", "Fighter//Mage/Thief", "Fighter//Mage//Cleric");

let bg1Npcs = [];
bg1Npcs.push("Ajantis", "Alora", "Baeloth", "Branwen", "Coran", "Dorn Il-Khan", "Dynaheir", "Edwin", "Eldoth", "Faldorn", "Garrick", "Imoen", "Jaheira", "Kagain", "Khalid", "Kivan", "Minsc", "Montaron", "Neera", "Quayle", "Rasaad yn Bashir", "Safana", "Shar-Tee", "Skie", "Tiax", "Viconia", "Xan", "Yeslick", "");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getMainCharClass(){
    let index = getRndInteger(0, mainCharClasses.length);
    document.getElementById("MainChar").innerText = mainCharClasses[index];
}

function getNPCs(){
    let numNPCs = document.getElementById("NPCs").value;
    let i = 0; 
    let npcs = []; 
    document.getElementById("Companions").innerHTML="";
    while(i < numNPCs){
        let index = getRndInteger(0, bg1Npcs.length -1); 
        let npc = bg1Npcs[index];
        if(!npcs.includes(npc)){
            npcs.push(npc);
            document.getElementById("Companions").innerHTML += `<p>${npc}</p>`;
            i++;
        }
        else{
            continue;
        }
        

    }
}