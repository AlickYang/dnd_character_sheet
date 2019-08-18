import StrengthIcon from "../Icons/abilityIcons/strength.png";
import DexterityIcon from "../Icons/abilityIcons/dexterity.png";
import IntelligenceIcon from "../Icons/abilityIcons/intelligence.png";
import WisdomIcon from "../Icons/abilityIcons/wisdom.png";
import ConstitutionIcon from "../Icons/abilityIcons/constitution.png";
import CharismaIcon from "../Icons/abilityIcons/charisma.png";

export const Becky = {
  name: "Becky",
  race: "Aasimar",
  class: {
    name: "Rogue",
    icon: ""
  },
  level: 5,
  stats: [
    { name: "STR", level: 11, icon: StrengthIcon },
    { name: "DEX", level: 17, icon: DexterityIcon },
    { name: "CON", level: 15, icon: ConstitutionIcon },
    { name: "INT", level: 7, icon: IntelligenceIcon },
    { name: "WIS", level: 11, icon: WisdomIcon },
    { name: "CHA", level: 18, icon: CharismaIcon }
  ],
  hitPoints: 17,
  armourClass: 14
};
