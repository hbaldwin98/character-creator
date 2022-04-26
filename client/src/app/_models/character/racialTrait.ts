export interface racialTrait {
  name: string;
  shortDesc: string;
  description: string;
  toolTip?: string;
  displayInSheet?: boolean;
  displayInBuilder?: boolean;
  resistance?: string[];
  proficiency?: {
    armor?: string[];
    weapon?: string[];
    tools?: string[];
    skill?: number | string[];
  };
}
