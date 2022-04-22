import { Class } from './class';
import { Equipment } from './equipment';
import { Feat } from './feat';
import { Race } from './race';
import { Spell } from './spell';
import { Weapon } from './weapon';

export interface ICharacter {
  name: string;
  level: number;
  class: Class;
  race: Race;
  alignment: string;
  experience?: number;
  milestone: boolean;
  personality?: string[];
  ideals?: string[];
  flaws?: string[];
  languages: string[];
  inspiration: boolean;
  profBonus: number;
  maxHP: number;
  currentHP: number;
  tempHP: number;
  hpOveride: number;
  deathSaves: {
    success: number;
    failure: number;
  };

  abilityScoresTotal: number[];
  abilityScores: number[];
  abilityMods: number[];
  abilitySaves: number[];
  abilityProf: boolean[];
  abilityScoreOverride: number[];
  abilityOtherMods: number[];
  racialAbilityChoices: number[];
  skills: {
    acrobatics: {
      val: number;
      prof: boolean;
      ability: string;
    };
    animal: {
      val: number;
      prof: boolean;
      ability: string;
    };
    athletics: {
      val: number;
      prof: boolean;
      ability: string;
    };
    deception: {
      val: number;
      prof: boolean;
      ability: string;
    };
    history: {
      val: number;
      prof: boolean;
      ability: string;
    };
    insight: {
      val: number;
      prof: boolean;
      ability: string;
    };
    intimidation: {
      val: number;
      prof: boolean;
      ability: string;
    };
    investigation: {
      val: number;
      prof: boolean;
      ability: string;
    };
    medicine: {
      val: number;
      prof: boolean;
      ability: string;
    };
    nature: {
      val: number;
      prof: boolean;
      ability: string;
    };
    perception: {
      val: number;
      prof: boolean;
      ability: string;
    };
    performance: {
      val: number;
      prof: boolean;
      ability: string;
    };
    persuasion: {
      val: number;
      prof: boolean;
      ability: string;
    };
    religion: {
      val: number;
      prof: boolean;
      ability: string;
    };
    sleightofhand: {
      val: number;
      prof: boolean;
      ability: string;
    };
    stealth: {
      val: number;
      prof: boolean;
      ability: string;
    };
    survival: {
      val: number;
      prof: boolean;
      ability: string;
    };
  };
  ac: number;
  initiative: number;
  speed: number[];
  armorOverride: boolean;
  armorVal: number;
  feats?: Feat[];
  weapons?: Weapon[];
  armor?: Equipment[];
  spells?: {
    cantrip: Spell[];
    1: Spell[];
    2: Spell[];
    3: Spell[];
    4: Spell[];
    5: Spell[];
    6: Spell[];
    7: Spell[];
    8: Spell[];
    9: Spell[];
  };
  spellClass?: string;
  spellDC?: number;
  spellASI?: string;
  spellBonus?: number;
  spellSlots?: {
    cantrip: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
  };
  gold: {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
  background: string;
  journal: string;
}

export class Character implements ICharacter {
  name = '';
  level = 1;
  class = {} as Class;
  race = {} as Race;
  alignment = '';
  experience? = 0;
  milestone = true;
  personality? = [];
  ideals? = [];
  flaws? = [];
  languages = [];
  inspiration = false;
  profBonus = 0;
  maxHP = 0;
  currentHP = 0;
  tempHP = 0;
  hpOveride = 0;
  deathSaves = {
    success: 0,
    failure: 0,
  };

  // in order: str-dex-con-int-wis-cha
  abilityScores = [-1, -1, -1, -1, -1, -1];
  abilityScoresTotal = [-1, -1, -1, -1, -1, -1];
  abilityMods = [0, 0, 0, 0, 0, 0];
  abilitySaves = [0, 0, 0, 0, 0, 0];
  abilityProf = [false, false, false, false, false, false];
  abilityScoreOverride = [-1, -1, -1, -1, -1, -1];
  abilityOtherMods = [-1, -1, -1, -1, -1, -1];
  racialAbilityChoices: number[] = [];
  skills = {
    acrobatics: {
      val: 0,
      prof: false,
      ability: 'dex',
    },
    animal: {
      val: 0,
      prof: false,
      ability: 'wis',
    },
    athletics: {
      val: 0,
      prof: false,
      ability: 'str',
    },
    deception: {
      val: 0,
      prof: false,
      ability: 'cha',
    },
    history: {
      val: 0,
      prof: false,
      ability: 'int',
    },
    insight: {
      val: 0,
      prof: false,
      ability: 'wis',
    },
    intimidation: {
      val: 0,
      prof: false,
      ability: 'cha',
    },
    investigation: {
      val: 0,
      prof: false,
      ability: 'int',
    },
    medicine: {
      val: 0,
      prof: false,
      ability: 'wis',
    },
    nature: {
      val: 0,
      prof: false,
      ability: 'int',
    },
    perception: {
      val: 0,
      prof: false,
      ability: 'wis',
    },
    performance: {
      val: 0,
      prof: false,
      ability: 'cha',
    },
    persuasion: {
      val: 0,
      prof: false,
      ability: 'cha',
    },
    religion: {
      val: 0,
      prof: false,
      ability: 'int',
    },
    sleightofhand: {
      val: 0,
      prof: false,
      ability: 'dex',
    },
    stealth: {
      val: 0,
      prof: false,
      ability: 'dex',
    },
    survival: {
      val: 0,
      prof: false,
      ability: 'wis',
    },
  };
  ac = 10;
  initiative = 0;
  speed = [];
  armorOverride = false;
  armorVal = 0;
  feats? = [];
  weapons? = [];
  armor? = [];
  spells? = {
    cantrip: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };
  spellClass? = '';
  spellDC? = 0;
  spellASI? = '';
  spellBonus? = 0;
  spellSlots? = {
    cantrip: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  gold = {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 0,
    pp: 0,
  };
  background = '';
  journal = '';
}
