import { racialTrait } from './racialTrait';

export interface Race {
    name:             string,
    isSubrace:        boolean,
    subrace?:         string,
    languages:        string[],
    extraLang?:        number,
    extraLangChoice?: string[],
    asi: {
        str?: number,
        dex?: number,
        con?: number,
        int?: number,
        wis?: number,
        cha?: number,
        choose?: number
    },
    speed:    {
      walk?:   number,
      burrow?: number,
      fly?:    number,
      swim?:   number,
      climb?:  number
    },
    racialTrait: racialTrait[],
    description?: string[] | string,
    numFeat: number,
    feats?:    string[],
    skills?:  number | string[],
    isHomebrew: boolean,
    proficiency?:  {
      armor?:  string[],
      weapon?: string[],
      tools?:  string[],
      skill?:  number | string[],
    },
}
