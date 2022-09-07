/**
 * The main class types
 */
type ClassType =
    "Cleric" | "Fighter" | "Paladin" | "Ranger" | "Rogue" | "Warlock" | "Warlord" | "Wizard"

/**
 * The main types of powers
 */
type PowerType =
    "AtWill" | "Encounter" | "Daily" | "Utility"

/**
 * The action types
 */
type ActionType = 
    "Standard" | "Move" | "Minor" | "Triggered" | "Immediate" | "Opportunity"

/**
 * The range of a power
 */
type PowerRange = {
    // Range at which the power is effective under standard conditions
    standard : number ;
    // Long range of the power, beyond which it CANNOT be effective
    long : number ;
}

/**
 * Damage Types
 */
type DamageType =
    "Acid" | "Cold" |"Fire" | "Force" | "Lightning" | "Necrotic" | "Poison" | "Psychic" |
    "Radiant" | "Thunder" | "Default"

/**
 * Interface for Powers 
 */
interface PowerModel {
    /* The powers name */
    name        : string    ;
    // The powers type
    type        : PowerType ;
    // Brief description of the power 
    description : string    ;
    // The type of the action that the power must be used as
    actionType  : ActionType;
    // the range of the power (standard range, long range)
    range       : PowerRange;
    // The level required for the power to be used
    level       : number    ;
    // the class that can use the power
    className   : ClassType ;
    // keywords for searching for the power
    keywords    : Array<string> ;
    // trigger effect for the power
    trigger     ?: string   ;
    // Target of the power
    target      ?: string   ;
    // attack text of the power
    attack      ?: string   ;
    // hit text of the power
    hit         ?: string   ;
    // miss text of the power
    miss        ?: string   ;
    // effect of the power
    effect      ?: string   ;
    // sustain effect of the power
    sustain     ?: string   ;
    // special effects of the power
    special     ?: string   ;
    // damage type
    damageType  : DamageType;
    // flavor text describing the power
    flavorText  : string    ;
}