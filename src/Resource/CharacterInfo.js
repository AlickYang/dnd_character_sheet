import React, { useState, createContext } from "react";
import StrengthIcon from "../Components/Icons/abilityIcons/strength.png";
import DexterityIcon from "../Components/Icons/abilityIcons/dexterity.png";
import IntelligenceIcon from "../Components/Icons/abilityIcons/intelligence.png";
import WisdomIcon from "../Components/Icons/abilityIcons/wisdom.png";
import ConstitutionIcon from "../Components/Icons/abilityIcons/constitution.png";
import CharismaIcon from "../Components/Icons/abilityIcons/charisma.png";
import HitPointsIcon from "../Components/Icons/statIcons/hitpoints.png";
import HitDiceIcon from "../Components/Icons/statIcons/hit_dice.png";
import ArmourClassIcon from "../Components/Icons/statIcons/armour_class.png";

const CharacterInfo = {
  name: "Becky",
  race: "Aasimar",
  class: {
    name: "Rogue",
    icon: ""
  },
  level: 5,
  ability_score: [
    {
      name: "Strength",
      level: 11,
      icon: StrengthIcon,
      bonuses: ["Athletics"]
    },
    {
      name: "Dexterity",
      level: 17,
      icon: DexterityIcon,
      bonuses: ["Aerobatics", "Sleight of Hand", "Stealth"]
    },
    { name: "Constitution", level: 15, icon: ConstitutionIcon, bonuses: [] },
    {
      name: "Intelligence",
      level: 7,
      icon: IntelligenceIcon,
      bonuses: ["Arcana", "History", "Investigation", "Nature", "Religion"]
    },
    {
      name: "Wisdom",
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
      name: "Charisma",
      level: 18,
      icon: CharismaIcon,
      bonuses: ["Deception", "Intimidation", "Performance", "Persuasion"]
    }
  ],
  skills: [
    {
      name: "Intimidation",
      proficient: true,
      description:
        "When you attempt to influence someone through overt threats, hostile actions, and physical violence, the DM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision."
    },
    {
      name: "Persuasion",
      proficient: false,
      description:
        "When you attempt to influence someone or a group of people with tact, social graces, or good nature, the DM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk."
    },
    {
      name: "Sleight of hand",
      proficient: true,
      description:
        "Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The DM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket."
    },
    {
      name: "Stealth",
      proficient: false,
      description:
        "Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard."
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

export default CharacterInfo;
