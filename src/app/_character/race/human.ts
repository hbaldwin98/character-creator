import { Race } from "src/app/_models/character/race";

export class Human implements Race {
  name = "Human";
  subRace?: string;
  languages = ["common"];
  extraLang = 1;
  asi = {
    str: 1,
    dex: 1,
    con: 1,
    int: 1,
    wis: 1,
    cha: 1,
    choose: 0
  };
  description = `<h2>Human</h2>
  <p>Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the
    innovators, the achievers, and the pioneers of the worlds. </p>
  <hr>
  <h4>Racial Traits</h4>
  <p><em>+1 to All Ability Scores, Extra Language</em></p>
  <hr>
  <h5>Ability Score Increase</h5>
  <p>Your ability scores each increase by 1.</p>
  <hr>
  <h5>Languages</h5>
  <p>You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of
    other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed
    from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>
  `;
  speed = {
    walk: 30
  };
  isHomebrew = false;
  racialTrait = [];
  isVariant = false;
  extraLangChoice?: string[] | undefined;
  numFeat = 0;
  feats?: string[] | undefined;
  skills?: number | string[] | undefined;
  proficiency?: {
    armor?: string[],
    weapon?: string[],
    tools?: string[],
    skill?: number,
  };

  convertVariant() {
    this.numFeat++;
    this.asi = {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      choose: 2,
    };
    this.proficiency = {
      skill: 1
    };
    this.subRace = "Variant";
    this.name = "Human (Variant)";
    this.description = `<h2>Human (Variant)</h2>
    <p>Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the
      innovators, the achievers, and the pioneers of the worlds. </p>
    <hr>
    <h4>Racial Traits</h4>
    <p><em>+1 to Two Ability Scores, Extra Proficiency, Choice of one Feat, Extra Language</em></p>
    <hr>
    <h5>Ability Score Increase</h5>
    <p>Two different ability scores of your choice increase by 1.</p>
    <hr>
    <h5>Skills</h5>
    <p>You gain proficiency in one skill of your choice.</p>
    <hr>
    <h5>Feat</h5>
    <p>You gain one Feat of your choice.</p>
    <h5>Languages</h5>
    <hr>
    <p>You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of
      other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed
      from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>
    `;
  }

  constructor(isVariant?: boolean) {
    if (isVariant) {
      this.isVariant = true;
      this.convertVariant();
    }
  }


}
