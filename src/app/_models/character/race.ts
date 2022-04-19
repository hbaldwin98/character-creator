import { racialTrait } from './racialTrait';

export interface Race {
  name: string;
  image?: string;
  isSubrace: boolean;
  subrace?: string;
  languages: string[];
  extraLang?: number;
  extraLangChoice?: string[];
  asi: {
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
    choose?: number;
    choices?: String[];
  };
  speed: {
    walk?: number;
    burrow?: number;
    fly?: number;
    swim?: number;
    climb?: number;
  };
  racialTraits: racialTrait[];
  description?: string[] | string;
  numFeat?: number;
  feats?: string[];
  chosenFeats?: string[];
  isHomebrew: boolean;
  proficiency?: {
    armor?: string[];
    weapon?: string[];
    tools?: string[];
    skill?: {
      num?: number;
      availableChoices?: string[];
      choices?: string[];
    };
  };
}
