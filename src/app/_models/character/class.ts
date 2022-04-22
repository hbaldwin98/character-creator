import { ClassFeature } from './classfeature';
export interface Class {
  name: string;
  description: string;
  equipmentDesc: string[];
  primaryAbility: string;
  saves: string[];
  image: string;
  classFeatures: ClassFeature[];
  hitDice: number;
  wealthDie?: {};
  proficiencies?: {
    armor?: {
      display: string;
      prof: string[];
     };
    weapons?: {
      display: string;
      prof: string[];
     };
    tools?: {
      display: string;
      prof: string[];
     };
    skills?: {
      display: string;
      choices: string[];
      num: number;
     };
  };
  canCastSpells: boolean;
  knowsAllSpells?: boolean;
  isHomebrew: boolean;
}
