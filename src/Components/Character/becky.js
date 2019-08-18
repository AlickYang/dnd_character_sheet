import StrengthIcon from "../Icons/abilityIcons/strength.png";
import DexterityIcon from "../Icons/abilityIcons/dexterity.png";
import IntelligenceIcon from "../Icons/abilityIcons/intelligence.png";
import WisdomIcon from "../Icons/abilityIcons/wisdom.png";
import ConstitutionIcon from "../Icons/abilityIcons/constitution.png";
import CharismaIcon from "../Icons/abilityIcons/charisma.png";
import HitPointsIcon from "../Icons/statIcons/hitpoints.png";
import HitDiceIcon from "../Icons/statIcons/hit_dice.png";
import ArmourClassIcon from "../Icons/statIcons/armour_class.png";

export const Becky = {
  name: "Becky",
  race: "Aasimar",
  class: {
    name: "Rogue",
    icon: ""
  },
  level: 5,
  ability_score: [
    { name: "STR", level: 11, icon: StrengthIcon, bonuses: ["Athletics"] },
    {
      name: "DEX",
      level: 17,
      icon: DexterityIcon,
      bonuses: ["Aerobatics", "Sleight of Hand", "Stealth"]
    },
    { name: "CON", level: 15, icon: ConstitutionIcon, bonuses: [] },
    {
      name: "INT",
      level: 7,
      icon: IntelligenceIcon,
      bonuses: ["Arcana", "History", "Investigation", "Nature", "Religion"]
    },
    {
      name: "WIS",
      level: 11,
      icon: WisdomIcon,
      bonuses: [
        "Animal Handling",
        "Insight",
        "Medicine",
        "Perception",
        "Survival"
      ]
    },
    {
      name: "CHA",
      level: 18,
      icon: CharismaIcon,
      bonuses: ["Deception", "Intimidation", "Performance", "Persuasion"]
    }
  ],
  hp: {
    name: "Hit Points",
    max: 17,
    current: 23,
    icon: HitPointsIcon
  },
  ac: {
    name: "Armour Class",
    amount: 14,
    icon: ArmourClassIcon
  }
};
