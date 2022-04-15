import { Character } from "./character";
import { HitDice } from "./hitDice";
import { Race } from "./race";

let human: Race = {
    name: "Human",
    languages: ["common"],
    extraLang: 1,
    asi: {
        str: 1,
        dex: 1,
        con: 1,
        int: 1,
        wis: 1,
        cha: 1
    },
    speed: 30
}

let hitDie: HitDice = {}

let character: Character = {
  name: 'Johnny',
  level: 0,
  class: "Paladin",
  race: human,
  alignment: "NE",
  milestone: true,
  inspiration: false,
  profBonus: 2,
  maxHP: 0,
  currentHP: 0,
  tempHP: 0,
  hitDie: hitDie,
  deathSaves: {
    success: 0,
    failure: 0
  },
  asi: {
    str: {
      val: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    dex: {
      val: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    con: {
      val: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    int: {
      val: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    wis: {
      val: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    cha: {
      val: 0,
      mod: 0,
      save: 0,
      prof: false
    }
  },
  skills: {
    acrobatics: 0,
    animal: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightofhand: 0,
    stealth: 0,
    survival: 0,
  },
  skillProf: {
    acrobatics: false,
    animal: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightofhand: false,
    stealth: false,
    survival: false,
  },
  ac: 10,
  initiative: 0,
  speed: 30,
  armorOverride: false,
  armorVal: 0,
  languages: [],
  gold: {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 0,
    pp: 0
  },
}

function updateASIMod(char: Character): Character {

  char.asi.str.mod = Math.floor((char.asi.str.val - 10) / 2);
  char.asi.dex.mod = Math.floor((char.asi.dex.val - 10) / 2);
  char.asi.con.mod = Math.floor((char.asi.con.val - 10) / 2);
  char.asi.int.mod = Math.floor((char.asi.int.val - 10) / 2);
  char.asi.wis.mod = Math.floor((char.asi.wis.val - 10) / 2);
  char.asi.cha.mod = Math.floor((char.asi.cha.val - 10) / 2);

  char.asi.str.save = char.asi.str.mod;
  char.asi.dex.save = char.asi.dex.mod;
  char.asi.con.save = char.asi.con.mod;
  char.asi.int.save = char.asi.int.mod;
  char.asi.wis.save = char.asi.wis.mod;
  char.asi.cha.save = char.asi.cha.mod;

  for (const [asi, val] of Object.entries(char.asi)) {
    console.log(asi, val);
    // if (char.savingThrowProf[asi]) char.savingThrow[asi] = char.asiMod[asi] + char.profBonus;
  }

  return char;
}


function updateAC(char: Character): Character {
    if (char.armorOverride) {
        char["ac"] = char.armorVal;
    } else {
        char["ac"] = 10 + char.asi.dex.mod + char.armorVal;
    }

    return char;
}

function setup(char: Character): Character {
    updateASIMod(char);
    updateAC(char);

    return char;
}

character = setup(character);

console.log(JSON.stringify(character));
