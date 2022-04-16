export interface racialTrait {
  name:         string,
  shortDesc:    string,
  description:  string,
  toolTip?:      string,
  hideBuilder?:  boolean,
  hideSheet?:    boolean,
  resistance?:   string[],
  proficiency?:  {
    armor?:  string[],
    weapon?: string[],
    tools?:  string[],
    skill?:  number | string[],
  },
}
