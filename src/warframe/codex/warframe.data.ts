import { WarframeData } from "./warframe.i";

export const _warframeData: WarframeData[] = [
  {
    id: "Ash",
    // name: "ash",
    tags: ["DPS", "Tactics"],
    // description: "Ash is great for players looking for a stealthier approach to combat. Lethal abilities are complemented by powers of distraction.",
    health: 150,
    shield: 100,
    armor: 65,
    energy: 100,
    sprint: 1.15,
    // passiveDescription: "Bleed effects inflicted on enemies do more damage and last longer.",
    abilities: ["Shuriken", "Smoke Screen", "Teleport", "Blade Storm"],
    aura: "r",
    introduced: "Vanilla",
    polarities: ["r", "r"],
    sex: "Male",
  },
  {
    id: "Ash Prime",
    // name: "ashPrime",
    className: "Ash",
    // description: "Distraction and subterfuge become lethal weapons with Ash Prime. Featuring altered mod polarities for greater customization.",
    health: 150,
    shield: 125,
    armor: 150,
    energy: 100,
    sprint: 1.2,
    introduced: "16.11",
    polarities: ["-", "r", "r"],
    // releaseDate: "2015 07 07",
    // vaultDate: "2017 05 30",
    // estimatedVaultDate: "2017 05 30"
  },
  {
    id: "Atlas",
    // name: "atlas",
    tags: ["Tank", "Control", "Tactics"],
    // description: "Titan of stone, lord of the earthly elementals.",
    health: 100,
    shield: 100,
    armor: 450,
    energy: 150,
    sprint: 0.9,
    // passiveDescription: "Becomes immune to Knockdown effects while on the ground.",
    abilities: ["Landslide", "Tectonics", "Petrify", "Rumblers"],
    aura: "r",
    introduced: "17.5",
    polarities: ["-", "d", "r"],
    sex: "Male",
  },
  {
    id: "Atlas Prime",
    className: "Atlas",
    // name: "atlas",
    // description: "Titan of stone, lord of the earthly elementals.",
    health: 175,
    shield: 150,
    armor: 475,
    energy: 175,
    sprint: 1,
    // passiveDescription: "Becomes immune to Knockdown effects while on the ground.",
    abilities: ["Landslide", "Tectonics", "Petrify", "Rumblers"],
    aura: "r",
    introduced: "25.8",
    polarities: ["-", "d", "r", "r"],
    sex: "Male",
  },
  {
    id: "Banshee",
    // name: "banshee",
    tags: ["DPS", "Support"],
    // description: "Using sonic attacks and acoustic target detection, Banshee is well suited for stealth gameplay and is capable of filling both attack and support roles.",
    health: 100,
    shield: 100,
    armor: 15,
    energy: 150,
    sprint: 1.1,
    // passiveDescription: "Weapon noises are hushed so that enemies cannot hear them.",
    abilities: ["Sonic Boom", "Sonar", "Silence", "Sound Quake"],
    aura: "r",
    introduced: "7",
    polarities: ["r", "r"],
    sex: "Female",
  },
  {
    id: "Banshee Prime",
    // name: "bansheePrime",
    className: "Banshee",
    // description: "Banshee Prime assails her foes by manipulating sonic forces to deadly effect. Featuring altered mod polarities for greater customization.",
    health: 100,
    shield: 100,
    armor: 65,
    energy: 175,
    sprint: 1.15,
    // passiveDescription: "Weapon noises are hushed so that enemies cannot hear them.",
    abilities: ["Sonic Boom", "Sonar", "Silence", "Sound Quake"],
    introduced: "19.11.5",
    masteryReq: 8,
    polarities: ["r", "r", "-"],
    // releaseDate: "2017 02 28",
    // vaultDate: "n/a",
    // estimatedVaultDate: "2019 01 01"
  },
  {
    id: "Baruuk",
    // name: "baruuk",
    tags: ["DPS", "Tactics"],
    // description: "Beware the fury of the truly patient. Pushed beyond restraint, a reluctant master unleashes the storm within.",
    health: 75,
    shield: 100,
    armor: 150,
    energy: 200,
    sprint: 1.2,
    // passiveDescription: "Each projectile dodged, each enemy lulled or disarmed, erodes Baruuk’s restraint and fuels the storm within. As Baruuk’s restraint is diminished he becomes more resistant to damage.",
    abilities: ["Elude", "Lull", "Desolate Hands", "Serene Storm"],
    aura: "-",
    exilus: "-",
    introduced: "24.2.0",
    polarities: ["d", "d"],
    sex: "Male",
  },
  {
    id: "Chroma",
    // name: "chroma",
    tags: ["Tactics"],
    // description: "A master of the deadly elements, Chroma can alter his damage output by changing his energy color.",
    health: 100,
    shield: 100,
    armor: 350,
    energy: 150,
    sprint: 1,
    // passiveDescription: "Chosen Energy color dictates the type of Elemental damage dealt by abilities.",
    abilities: ["Spectral Scream", "Elemental Ward", "Vex Armor", "Effigy"],
    aura: "r",
    introduced: "16",
    polarities: ["-", "r"],
    sex: "Male",
  },
  {
    id: "Chroma Prime",
    // name: "chromaPrime",
    className: "Chroma",
    // description: "Bind the elements and unleash untold destruction with Chroma Prime. Featuring altered mod polarities for greater customization.",
    health: 100,
    shield: 100,
    armor: 425,
    energy: 200,
    sprint: 1,
    introduced: "23.9",
    masteryReq: 6,
    polarities: ["-", "d", "r", "-"],
    // releaseDate: "2018 09 25",
    // vaultDate: "n/a",
    // estimatedVaultDate: "2020 08 11"
  },
  {
    id: "Ember",
    // name: "ember",
    tags: ["DPS"],
    // description: "Ember is a nightmare for light-armored targets. Ember can super-heat the air which opens up surprising crowd-control possibilities.",
    health: 100,
    shield: 100,
    armor: 100,
    energy: 150,
    sprint: 1.1,
    // passiveDescription: "Regenerates Energy and deals more damage while on Fire.",
    abilities: ["Fireball", "Accelerant", "Fire Blast", "World On Fire"],
    aura: "r",
    introduced: "Vanilla",
    polarities: ["-", "-"],
    sex: "Female",
  },
  {
    id: "Ember Prime",
    // name: "emberPrime",
    className: "Ember",
    // description: "Ember Prime offers the same potential for wanton destruction as Ember but provides unique mod polarities, allowing for greater customization.",
    health: 100,
    shield: 125,
    armor: 125,
    energy: 150,
    sprint: 1.1,
    introduced: "11",
    polarities: ["r", "d"],
    // releaseDate: "2013 11 20",
    // vaultDate: "2015 10 06",
    // estimatedVaultDate: "2015 10 06"
  },
  {
    id: "Equinox",
    // name: "equinox",
    tags: ["DPS", "Support", "Control"],
    // description: "Split between day and night, Equinox manifests aggressive and defensive forms at will.",
    health: 100,
    shield: 100,
    armor: 100,
    energy: 150,
    sprint: 1.15,
    // passiveDescription: "Health Orbs generate a little Energy, while Energy Orbs restore a bit of Health.",
    abilities: ["Metamorphosis", "Rest & Rage", "Pacify & Provoke", "Mend & Maim"],
    aura: "-",
    introduced: "17",
    polarities: ["d", "r"],
    sex: "Female",
  },
  {
    id: "Equinox Prime",
    // name: "equinox",
    className: "Equinox",
    // description: "Split between day and night, Equinox manifests aggressive and defensive forms at will.",
    health: 125,
    shield: 100,
    armor: 120,
    energy: 165,
    sprint: 1.15,
    // passiveDescription: "Health Orbs generate a little Energy, while Energy Orbs restore a bit of Health.",
    abilities: ["Metamorphosis", "Rest & Rage", "Pacify & Provoke", "Mend & Maim"],
    aura: "-",
    introduced: "24.6",
    polarities: ["d", "d", "r", "r"],
    sex: "Female",
  },
  {
    id: "Excalibur",
    // name: "excalibur",
    tags: ["DPS", "Control"],
    // description: "A perfect balance of mobility and offense, Excalibur is the ideal Warframe for new players.",
    health: 100,
    shield: 100,
    armor: 225,
    energy: 100,
    sprint: 1,
    // passiveDescription: "Excalibur deals increased damage and attacks faster when wielding swords.",
    abilities: ["Slash Dash", "Radial Blind", "Radial Javelin", "Exalted Blade"],
    introduced: "Vanilla",
    polarities: ["d", "r"],
    sex: "Male",
  },
  {
    id: "Excalibur Prime",
    // name: "excaliburPrime",
    className: "Excalibur",
    // description: "Excalibur Prime is the epitome of mobility and offense, and features the same abilities as Excalibur, but has unique mod polarities installed allowing for greater customization.",
    health: 100,
    shield: 100,
    armor: 300,
    energy: 150,
    sprint: 1,
    aura: "r",
    introduced: "5",
    polarities: ["d", "r", "r"],
  },
  {
    id: "Excalibur Umbra",
    // name: "excaliburUmbra",
    className: "Excalibur",
    // description: "From the shadow of the long night emerges a new Excalibur.",
    health: 100,
    shield: 100,
    armor: 300,
    energy: 150,
    sprint: 1,
    // passiveDescription: "Umbra exhibits sentience in combat without Transference control. Attacks faster and deals more damage while wielding swords.",
    abilities: ["Slash Dash", "Radial Howl", "Radial Javelin", "Exalted Blade"],
    aura: "r",
    introduced: "23",
    polarities: ["r", "w", "w", "w"],
  },
  {
    id: "Frost",
    // name: "frost",
    tags: ["DPS", "Tactics", "Control"],
    // description: "By channeling moisture and vapor in the surrounding environment, Frost creates formidable defenses and lethal attacks from sub zero conditions.",
    health: 100,
    shield: 150,
    armor: 300,
    energy: 100,
    sprint: 0.95,
    // passiveDescription: "Striking Frost with a melee attack may freeze the attacker.",
    abilities: ["Freeze", "Ice Wave", "Snow Globe", "Avalanche"],
    aura: "d",
    introduced: "6",
    polarities: ["-", "d"],
    sex: "Male",
  },
  {
    id: "Frost Prime",
    // name: "frostPrime",
    className: "Frost",
    // description: "Frost Prime has the same chilling abilities as Frost but provides unique mod polarities, allowing for greater customization.",
    health: 100,
    shield: 175,
    armor: 300,
    energy: 100,
    sprint: 0.95,
    introduced: "7.10",
    polarities: ["-", "d", "d"],
    // releaseDate: "2013 05 03",
    // vaultDate: "2015 04 01",
    // estimatedVaultDate: "2015 04 01"
  },
  {
    id: "Gara",
    // name: "gara",
    tags: ["DPS", "Tank"],
    // description: "The battlefield trembles before Gara's crystalline power, her ringing touch transforming opponents to targets of brittle beauty.",
    health: 100,
    shield: 100,
    armor: 125,
    energy: 150,
    sprint: 1.15,
    // passiveDescription: "A chance to create a radial blind when exposed to bright light.",
    abilities: ["Shattered Lash", "Splinter Storm", "Spectrorage", "Mass Vitrify"],
    aura: "d",
    introduced: "22",
    polarities: ["r", "r"],
    sex: "Female",
  },
  {
    id: "Garuda",
    // name: "garuda",
    tags: ["DPS", "Support"],
    // description: "Death's crimson maiden, the blood of Garuda's foes imbue her with strength and vitality.",
    health: 100,
    shield: 100,
    armor: 300,
    energy: 120,
    sprint: 1,
    // passiveDescription: "As Garuda nears death, her damage increases.\rSlashes with her talons if no melee weapon is equipped.",
    abilities: ["Dread Mirror", "Blood Altar", "Bloodletting", "Seeking Talons"],
    aura: "r",
    introduced: "24",
    polarities: ["-", "d"],
    sex: "Female",
    lvlUps: [["h", 200], ["e", 125], ["s", 200]],
  },
  {
    id: "Gauss",
    // name: "gauss",
    tags: ["Support", "Tactics"],
    // description: "Never stop moving. Gauss' battery is charged by movement, powering his devastating kinetic abilities. They can't kill what they can't hit.",
    health: 100,
    shield: 150,
    armor: 150,
    energy: 150,
    sprint: 1.4,
    // passiveDescription: "Gauss gains bonus Shield recharge rate and shield recharge delay reduction for every point of battery stored in his gauge, up to a maximum of 80% for both when the battery is full.",
    abilities: ["Mach Rush", "Kinetic Plating", "Thermal Sunder", "Redline"],
    aura: "-",
    introduced: "25.7",
    polarities: ["r", "d"],
    sex: "Male",
  },
  {
    id: "Harrow",
    // name: "harrow",
    tags: ["Support", "Control"],
    // description: "Always prepared to sacrifice. This monastic Warframe uses the Void to bolster allies’ defenses and amplify their lethality.",
    health: 100,
    shield: 150,
    armor: 150,
    energy: 100,
    sprint: 1,
    // passiveDescription: "Overshield cap doubled.",
    abilities: ["Condemn", "Penance", "Thurible", "Covenant"],
    aura: "-",
    introduced: "21",
    polarities: ["d", "-"],
    sex: "Male",
  },
  {
    id: "Hildryn",
    tags: ["DPS", "Tank", "Tactics"],
    // description: "Always prepared to sacrifice. This monastic Warframe uses the Void to bolster allies’ defenses and amplify their lethality.",
    health: 75,
    shield: 450,
    armor: 300,
    energy: 0,
    sprint: 1,
    // passiveDescription: "",
    abilities: ["Balefire", "Shield Pillage", "Haven", "Aegis Storm"],
    aura: "-",
    exilus: "d",
    introduced: "24",
    polarities: ["d", "d"],
    sex: "Female",
  },
  {
    id: "Hydroid",
    // name: "hydroid",
    tags: ["Tactics"],
    // description: "Rising from the ocean depths, Hydroid harnesses the power of water to a devastating effect.",
    health: 100,
    shield: 125,
    armor: 200,
    energy: 125,
    sprint: 1.05,
    // passiveDescription: "Slam Attacks have a chance to summon a tentacle.",
    abilities: ["Tempest Barrage", "Tidal Surge", "Undertow", "Tentacle Swarm"],
    aura: "-",
    introduced: "13",
    polarities: ["r", "-"],
    sex: "Male",
  },
  {
    id: "Hydroid Prime",
    // name: "hydroidPrime",
    className: "Hydroid",
    // description: "Command the ocean’s fury with this king of gold and silver. Featuring altered mod polarities for greater customization.",
    health: 100,
    shield: 175,
    armor: 250,
    energy: 150,
    sprint: 1.05,
    introduced: "21.6",
    masteryReq: 5,
    polarities: ["r", "d", "-", "-"],
    // releaseDate: "2017 08 29",
    // vaultDate: "n/a",
    // estimatedVaultDate: "2019 07 16"
  },
  {
    id: "Inaros",
    // name: "inaros",
    tags: ["Tank", "Control"],
    // description: "Risen from the sands, Inaros commands the desert's fearsome power.",
    health: 550,
    shield: 0,
    armor: 200,
    energy: 100,
    sprint: 1,
    // passiveDescription: "While bleeding-out, Inaros becomes entombed in a protective Sarcophagus. He can revive himself by draining the life-force from nearby enemies and allies.",
    abilities: ["Desiccation", "Devour", "Sandstorm", "Scarab Swarm"],
    aura: "-",
    exilus: "-",
    introduced: "18.5",
    polarities: ["d", "d"],
    sex: "Male",
    lvlUps: [["h", 300], ["e", 50]],
  },
  {
    id: "Ivara",
    // name: "ivara",
    tags: ["DPS", "Tactics", "Control"],
    // description: "With her quiver of tactical arrows, this huntress prowls unseen and strikes without warning.",
    health: 75,
    shield: 100,
    armor: 65,
    energy: 175,
    sprint: 1.15,
    // passiveDescription: "Senses nearby enemies.",
    abilities: ["Quiver", "Navigator", "Prowl", "Artemis Bow"],
    aura: "-",
    introduced: "18",
    polarities: ["d", "-"],
    sex: "Female",
  },
  {
    id: "Khora",
    // name: "khora",
    tags: ["DPS", "Control"],
    // description: "Tenno and beast, red in whip and claw. Khora and her Kavat companion, Venari, embody lethal versatility. Two bodies, one will.",
    health: 125,
    shield: 100,
    armor: 275,
    energy: 125,
    sprint: 1.05,
    // passiveDescription: "The ferocious kavat, Venari, fights by Khora’s side and provides her with a speed boost while active. If killed, Venari will reappear after a short time.",
    abilities: ["Whipclaw", "Ensnare", "Venari", "Strangledome"],
    aura: "d",
    exilus: "-",
    introduced: "22.18.0",
    polarities: ["r", "-"],
    sex: "Female",
  },
  {
    id: "Limbo",
    // name: "limbo",
    tags: ["Tank", "Support", "Control"],
    // description: "Limbo manipulates the very planes of existence to divide his enemies and conquer them in the rift.",
    health: 100,
    shield: 75,
    armor: 65,
    energy: 150,
    sprint: 1.15,
    // passiveDescription: "Dodge to enter and exit the Rift. Entering leaves behind a small Rift portal. Energy slowly recharges in the Rift, and each enemy killed in there also gives energy.",
    abilities: ["Banish", "Stasis", "Rift Surge", "Cataclysm"],
    aura: "-",
    introduced: "15",
    polarities: ["r", "r"],
    sex: "Male",
  },
  {
    id: "Limbo Prime",
    // name: "limboPrime",
    className: "Limbo",
    // description: "Dance between realms with this golden rift walker. Featuring altered mod polarities for greater customization.",
    health: 100,
    shield: 100,
    armor: 85,
    energy: 175,
    sprint: 1.15,
    introduced: "23.0.3",
    masteryReq: 4,
    polarities: ["r", "r", "-", "d"],
    // releaseDate: "2018 06 19",
    // vaultDate: "n/a",
    // estimatedVaultDate: "2020 05 05"
  },
  {
    id: "Loki",
    // name: "loki",
    tags: ["Tactics"],
    // description: "Desired by advanced players, Loki offers a variety of specialized reconfiguring abilities. The creativity of Loki's powers allows players to master the battlefield through manipulation.",
    health: 75,
    shield: 75,
    armor: 65,
    energy: 150,
    sprint: 1.25,
    // passiveDescription: "Able to hang from walls for extended durations of time.",
    abilities: ["Decoy", "Invisibility", "Switch Teleport", "Radial Disarm"],
    aura: "-",
    introduced: "Vanilla",
    polarities: ["d", "r"],
    sex: "Male",
  },
  {
    id: "Loki Prime",
    // name: "lokiPrime",
    className: "Loki",
    // description: "Confuse, deceive and destroy with Loki Prime. Featuring altered mod polarities for greater customization.",
    health: 75,
    shield: 75,
    armor: 65,
    energy: 175,
    sprint: 1.25,
    introduced: "13.7",
    polarities: ["d", "d", "r", "-"],
    // releaseDate: "2014 06 11",
    // vaultDate: "2016 05 17",
    // estimatedVaultDate: "2016 05 17"
  },
  {
    id: "Mag",
    // name: "mag",
    tags: ["DPS"],
    // description: "With full command of surrounding magnetic energy, Mag is an expert at enemy manipulation.",
    health: 75,
    shield: 150,
    armor: 65,
    energy: 125,
    sprint: 1,
    // passiveDescription: "Bullet jumping pulls-in nearby items for easy collection.",
    abilities: ["Pull", "Magnetize", "Polarize", "Crush"],
    aura: "r",
    introduced: "Vanilla",
    polarities: ["-", "-"],
    sex: "Female",
  },
  {
    id: "Mag Prime",
    // name: "magPrime",
    className: "Mag",
    // description: "The exquisite Mag Prime offers the same abilities as Mag but with unique mod polarities for greater customization.",
    health: 100,
    shield: 150,
    armor: 65,
    energy: 175,
    sprint: 1,
    introduced: "10",
    polarities: ["-", "-", "r"],
    // releaseDate: "2013 09 13",
    // vaultDate: "2015 07 07",
    // estimatedVaultDate: "2015 07 07"
  },
  {
    id: "Mesa",
    // name: "mesa",
    tags: ["DPS", "Control"],
    // description: "With a steady hand and quick reflexes, Mesa is a true gunfighter.",
    health: 125,
    shield: 75,
    armor: 65,
    energy: 100,
    sprint: 1.1,
    // passiveDescription: "Shoot dual-wielded sidearms faster and reload single-handed sidearms more rapidly. Gain bonus health when not using Melee Weapons.",
    abilities: ["Ballistic Battery", "Shooting Gallery", "Shatter Shield", "Peacemaker"],
    aura: "r",
    introduced: "15.5",
    polarities: ["-", "-"],
    sex: "Female",
  },
  {
    id: "Mesa Prime",
    // name: "mesaPrime",
    className: "Mesa",
    // description: "Cast a long shadow with this lethal enforcer. Featuring altered mod polarities for greater customization.",
    health: 135,
    shield: 75,
    armor: 85,
    energy: 125,
    sprint: 1.1,
    introduced: "24.2.2",
    masteryReq: 2,
    polarities: ["-", "-", "d", "r"],
  },
  {
    id: "Mirage",
    // name: "mirage",
    tags: ["Tactics"],
    // description: "A master of illusion, Mirage confounds the enemy in a spectacle of style and power.",
    health: 80,
    shield: 80,
    armor: 65,
    energy: 150,
    sprint: 1.2,
    // passiveDescription: "Long-lasting slide and faster acrobatic maneuvers.",
    abilities: ["Hall Of Mirrors", "Sleight Of Hand", "Eclipse", "Prism"],
    aura: "-",
    introduced: "14",
    polarities: ["d", "r"],
    sex: "Female",
  },
  {
    id: "Mirage Prime",
    // name: "miragePrime",
    className: "Mirage",
    // description: "Dazzle the opposition with this golden master of illusion and mayhem. Featuring altered mod polarities allow for greater customization.",
    health: 80,
    shield: 110,
    armor: 150,
    energy: 150,
    sprint: 1.2,
    introduced: "22.7",
    masteryReq: 8,
    polarities: ["d", "d", "-", "r"],
    // releaseDate: "2017 12 12",
    // vaultDate: "n/a",
    // estimatedVaultDate: "2019 10 22"
  },
  {
    id: "Nekros",
    // name: "nekros",
    tags: ["Tactics"],
    // description: "Nekros uses his dark powers to manipulate his enemies, both living and dead.",
    health: 100,
    shield: 90,
    armor: 65,
    energy: 100,
    sprint: 1.1,
    // passiveDescription: "Restore a small amount of health with every nearby enemy death.",
    abilities: ["Soul Punch", "Terrify", "Desecrate", "Shadows Of The Dead"],
    introduced: "10",
    polarities: ["d", "r"],
    sex: "Male",
  },
  {
    id: "Nekros Prime",
    // name: "nekrosPrime",
    className: "Nekros",
    // description: "Death's new master. Featuring altered mod polarities allow for greater customization.",
    health: 100,
    shield: 150,
    armor: 65,
    energy: 125,
    sprint: 1.1,
    introduced: "The Silver Grove 3",
    polarities: ["r", "d", "-"],
    // releaseDate: "2016 08 23",
    // vaultDate: "2018 06 19",
    // estimatedVaultDate: "2018 06 19"
  },
  {
    id: "Nezha",
    // name: "nezha",
    tags: ["DPS", "Control"],
    // description: "A petite and playful facade conceals this frame’s immense power.",
    health: 125,
    shield: 50,
    armor: 175,
    energy: 150,
    sprint: 1.15,
    // passiveDescription: "Slide faster and go farther.",
    abilities: ["Fire Walker", "Blazing Chakram", "Warding Halo", "Divine Spears"],
    aura: "-",
    introduced: "18.1",
    polarities: ["d", "r"],
    sex: "Male",
  },
  {
    id: "Nidus",
    // name: "nidus",
    tags: ["Tank", "Support"],
    // description: "Command the Infestation to mutate and grow ever more destructive.",
    health: 150,
    shield: 0,
    armor: 300,
    energy: 100,
    sprint: 1,
    // passiveDescription: "If Nidus is killed with at least 15 stacks of Mutation, those 15 stacks are consumed; this grants 5 seconds of invulnerability and restores health to 50%.",
    abilities: ["Virulence", "Larva", "Parasitic Link", "Ravenous"],
    aura: "r",
    introduced: "19.5",
    polarities: ["r", "d"],
    sex: "Male",
    lvlUps: [["h", 300], ["e", 50], ["a", 50], ["t", 15]],
  },
  {
    id: "Nova",
    // name: "nova",
    tags: ["Support", "Control", "Tactics"],
    // description: "Nova uses electromagnetic energy to contain and control highly volatile antimatter that fuels her abilities.",
    health: 100,
    shield: 75,
    armor: 65,
    energy: 150,
    sprint: 1.2,
    // passiveDescription: "When knocked-over, emit a defensive burst that topples attacking enemies.",
    abilities: ["Null Star", "Antimatter Drop", "Worm Hole", "Molecular Prime"],
    aura: "-",
    introduced: "9",
    polarities: ["r", "r"],
    sex: "Female",
  },
  {
    id: "Nova Prime",
    // name: "novaPrime",
    className: "Nova",
    // description: "Nova Prime wreaks devastation on her enemies using volatile antimatter. Featuring altered mod polarities for greater customization.",
    health: 100,
    shield: 100,
    armor: 65,
    energy: 175,
    sprint: 1.2,
    introduced: "15.7",
    polarities: ["r", "r", "r"],
    // releaseDate: "2014 12 16",
    // vaultDate: "2016 11 22",
    // estimatedVaultDate: "2016 11 22"
  },
  {
    id: "Nyx",
    // name: "nyx",
    tags: ["Tank", "Control"],
    // description: "Mind control and psychic attacks make Nyx a very dangerous foe. Her ability to reach into enemy consciousness and manipulate their behavior can turn the tide of battle.",
    health: 100,
    shield: 100,
    armor: 15,
    energy: 150,
    sprint: 1.1,
    // passiveDescription: "Enemies affected by Nyx’s abilities may suddenly choose to lay down their arms.",
    abilities: ["Mind Control", "Psychic Bolts", "Chaos", "Absorb"],
    aura: "-",
    introduced: "6",
    polarities: ["r", "-"],
    sex: "Female",
  },
  {
    id: "Nyx Prime",
    // name: "nyxPrime",
    className: "Nyx",
    // description: "Infiltrate the minds of your enemies with Nyx Prime. Featuring altered mod polarities for greater customization.",
    health: 100,
    shield: 125,
    armor: 50,
    energy: 150,
    sprint: 1.125,
    introduced: "14.8",
    polarities: ["r", "-", "d"],
    // releaseDate: "2014 09 23",
    // vaultDate: "2016 08 23",
    // estimatedVaultDate: "2016 08 23"
  },
  {
    id: "Oberon",
    // name: "oberon",
    tags: ["DPS", "Support"],
    // description: "Equally adept at healing friends or striking down the enemy. Oberon embodies the balance Tenno are sworn to uphold.",
    health: 125,
    shield: 100,
    armor: 150,
    energy: 150,
    sprint: 1,
    // passiveDescription: "Allied pets receive health, armor and shield buffs. In addition, your pet receives an instant revive per mission.",
    abilities: ["Smite", "Hallowed Ground", "Renewal", "Reckoning"],
    aura: "r",
    introduced: "11.5",
    polarities: ["r", "r"],
    sex: "Male",
  },
  {
    id: "Oberon Prime",
    // name: "oberonPrime",
    className: "Oberon",
    // description: "Protect the balance with this regal forest guardian. Featuring altered mod polarities for greater customization.",
    health: 125,
    shield: 100,
    armor: 225,
    energy: 175,
    sprint: 1,
    introduced: "20.6.2",
    masteryReq: 8,
    polarities: ["-", "-", "r", "r"],
    // releaseDate: "2017 05 30",
    // vaultDate: "n/a",
    // estimatedVaultDate: "2019 04 09"
  },
  {
    id: "Octavia",
    // name: "octavia",
    tags: ["DPS", "Tactics"],
    // description: "Compose her song and then conduct the mighty Mandachord, turning bass, beat and melody into an anthem of devastation.",
    health: 100,
    shield: 75,
    armor: 125,
    energy: 150,
    sprint: 1.05,
    // passiveDescription: "Briefly replenish energy for Octavia and nearby allies when abilities are activated.",
    abilities: ["Mallet", "Resonator", "Metronome", "Amp"],
    aura: "-",
    introduced: "20",
    polarities: ["-", "-"],
    sex: "Female",
  },
  {
    id: "Revenant",
    // name: "revenant",
    tags: ["DPS"],
    // description: "Rise from the broken remains of the Eidolon to seduce an army of zealous thralls.",
    health: 100,
    shield: 225,
    armor: 105,
    energy: 125,
    sprint: 1,
    // passiveDescription: "Shield depletion smashes nearby enemies with a knockdown shockwave.",
    abilities: ["Enthrall", "Mesmer Skin", "Reave", "Danse Macabre"],
    aura: "-",
    introduced: "23.5",
    polarities: ["r", "d"],
    sex: "Male",
  },
  {
    id: "Rhino",
    // name: "rhino",
    tags: ["Tactics", "Tank", "Support", "Control"],
    // description: "Rhino is the heaviest Warframe, combining offensive and defensive capabilities.",
    health: 100,
    shield: 150,
    armor: 190,
    energy: 100,
    sprint: 0.95,
    // passiveDescription: "Emit a shockwave after landing from a great height.",
    abilities: ["Rhino Charge", "Iron Skin", "Roar", "Rhino Stomp"],
    aura: "r",
    introduced: "Vanilla",
    polarities: ["d", "d"],
    sex: "Male",
  },
  {
    id: "Rhino Prime",
    // name: "rhinoPrime",
    className: "Rhino",
    // description: "Takes Rhino's ground-shaking abilities to the next level with altered mod polarities that offer greater customization.",
    health: 100,
    shield: 150,
    armor: 275,
    energy: 100,
    sprint: 1,
    introduced: "12.4",
    polarities: ["d", "d", "-"],
    // releaseDate: "2014 03 06",
    // vaultDate: "2016 02 16",
    // estimatedVaultDate: "2016 02 16"
  },
  {
    id: "Saryn",
    // name: "saryn",
    tags: ["DPS"],
    // description: "Saryn's venomous attacks are horrifyingly effective against organic and synthetic enemies, and her ability to 'shed' her skin makes her very elusive.",
    health: 125,
    shield: 100,
    armor: 225,
    energy: 150,
    sprint: 0.95,
    // passiveDescription: "Status Effects inflicted upon enemies last longer.",
    abilities: ["Spores", "Molt", "Toxic Lash", "Miasma"],
    aura: "d",
    introduced: "7",
    polarities: ["-", "d"],
    sex: "Female",
  },
  {
    id: "Saryn Prime",
    // name: "sarynPrime",
    className: "Saryn",
    // description: "A golden blossom conceals deadly nectar. Featuring altered mod polarities for greater customization.",
    health: 125,
    shield: 100,
    armor: 300,
    energy: 200,
    sprint: 1,
    introduced: "18.4.12",
    polarities: ["-", "d", "r"],
    // releaseDate: "2016 02 16",
    // vaultDate: "2017 12 12",
    // estimatedVaultDate: "2017 12 12"
  },
  {
    id: "Titania",
    // name: "titania",
    tags: ["DPS"],
    // description: "Take flight with this mischievous pixie.",
    health: 100,
    shield: 100,
    armor: 65,
    energy: 150,
    sprint: 1,
    // passiveDescription: "Bullet-jump creates a trampoline that enhances bullet-jump maneuvers when used by allies.",
    abilities: ["Spellbind", "Tribute", "Lantern", "Razorwing"],
    aura: "r",
    introduced: "The Silver Grove",
    polarities: ["r", "d"],
    sex: "Female",
  },
  {
    id: "Trinity",
    // name: "trinity",
    tags: ["Support"],
    // description: "Trinity is great for players who prefer a supportive role. Warframes with healing technology are rare making Trinity a great equalizer when the odds are stacked against the Tenno.",
    health: 100,
    shield: 100,
    armor: 15,
    energy: 150,
    sprint: 1,
    // passiveDescription: "Revive fallen allies faster and from farther away.",
    abilities: ["Well Of Life", "Energy Vampire", "Link", "Blessing"],
    aura: "d",
    introduced: "Vanilla",
    polarities: ["d", "d"],
    sex: "Female",
  },
  {
    id: "Trinity Prime",
    // name: "trinityPrime",
    className: "Trinity",
    // description: "Become the bastion that defends allies using powerful healing abilities with Trinity Prime. Featuring altered mod polarities for greater customization.",
    health: 100,
    shield: 150,
    armor: 15,
    energy: 150,
    sprint: 1.1,
    introduced: "17.6",
    polarities: ["d", "d", "r", "-"],
    // releaseDate: "2015 10 06",
    // vaultDate: "2017 08 29",
    // estimatedVaultDate: "2017 08 29"
  },
  {
    id: "Valkyr",
    // name: "valkyr",
    tags: ["Tank", "Support"],
    // description: "Forged in the labs of the Zanuka project, the original Valkyr was subject to cruel experiments, leaving her scarred, angry and frighteningly adept at killing.",
    health: 100,
    shield: 50,
    armor: 600,
    energy: 100,
    sprint: 1.1,
    // passiveDescription: "Faster recovery from being knocked down.",
    abilities: ["Rip Line", "Warcry", "Paralysis", "Hysteria"],
    aura: "r",
    introduced: "11",
    polarities: ["r", "r"],
    sex: "Female",
  },
  {
    id: "Valkyr Prime",
    // name: "valkyrPrime",
    className: "Valkyr",
    // description: "A proud fighter emerges unscarred by time or malice. Featuring altered mod polarities allow for greater customization.",
    health: 100,
    shield: 50,
    armor: 700,
    energy: 150,
    sprint: 1.1,
    introduced: "19.0.7",
    polarities: ["r", "r", "r"],
    // releaseDate: "2016 11 22",
    // vaultDate: "2018 09 25",
    // estimatedVaultDate: "2018 09 25"
  },
  {
    id: "Vauban",
    // name: "vauban",
    tags: ["Tactics", "Control"],
    // description: "The highly tactical Vauban uses his powers to create deadly traps that can zap, imprison and dimensionally crush enemies.",
    health: 100,
    shield: 75,
    armor: 50,
    energy: 150,
    sprint: 1,
    // passiveDescription: "Deal 25% extra damage to incapacitated enemies.",
    abilities: ["Tesla", "Minelayer", "Bastille", "Vortex"],
    aura: "-",
    introduced: "7.11",
    polarities: ["-", "r"],
    sex: "Male",
  },
  {
    id: "Vauban Prime",
    // name: "vaubanPrime",
    className: "Vauban",
    // description: "Transform the battlefield into a weapon with this gilded tactician. Features unique mod polarities for extended customization.",
    health: 100,
    shield: 100,
    armor: 100,
    energy: 150,
    sprint: 1,
    introduced: "18.12",
    polarities: ["-", "r", "d"],
    // releaseDate: "2016 05 17",
    // vaultDate: "2018 03 20",
    // estimatedVaultDate: "2018 03 20"
  },
  {
    id: "Volt",
    // name: "volt",
    tags: ["DPS", "Tactics"],
    // description: "Volt can create and harness electrical elements. This is a high-damage Warframe perfect for players who want a potent alternative to gun-play.",
    health: 100,
    shield: 150,
    armor: 15,
    energy: 100,
    sprint: 1,
    // passiveDescription: "Grounded movement generates an electrical charge that is unleashed with the next attack.",
    abilities: ["Shock", "Speed", "Electric Shield", "Discharge"],
    aura: "r",
    introduced: "Vanilla",
    polarities: ["-", "r"],
    sex: "Male",
  },
  {
    id: "Volt Prime",
    // name: "voltPrime",
    className: "Volt",
    // description: "A glorious warrior from the past, Volt Prime features the same abilities as Volt but with unique mod polarities for greater customization.",
    health: 100,
    shield: 150,
    armor: 100,
    energy: 200,
    sprint: 1,
    introduced: "16.1",
    polarities: ["-", "r", "r"],
    // releaseDate: "2015 03 24",
    // vaultDate: "2017 02 28",
    // estimatedVaultDate: "2017 02 28"
  },
  {
    id: "Wisp",
    // name: "wisp",
    tags: ["Tactics"],
    // description: "",
    health: 100,
    shield: 75,
    armor: 150,
    energy: 200,
    sprint: 1.2,
    // passiveDescription: "Flowing between dimensions Wisp becomes invisible to enemies while in the air. ",
    abilities: ["Reservoirs", "Wil-O-Wisp", "Breach Surge", "Sol Gate"],
    aura: "-",
    introduced: "24",
    polarities: ["r", "d"],
    sex: "Female",
  },
  {
    id: "Wukong",
    // name: "wukong",
    tags: ["DPS", "Tactics"],
    // description: "A primal warrior with the heart of a trickster.",
    health: 150,
    shield: 100,
    armor: 250,
    energy: 120,
    sprint: 1,
    // passiveDescription: "Increased combo duration.",
    abilities: ["Celestial Twin", "Cloud Walker", "Defy", "Primal Fury"],
    aura: "r",
    introduced: "17.12",
    polarities: ["-", "d"],
    sex: "Male",
  },
  {
    id: "Wukong Prime",
    // name: "wukong",
    className: "Wukong",
    tags: ["DPS", "Tactics"],
    // description: "A primal warrior with the heart of a trickster.",
    health: 150,
    shield: 120,
    armor: 275,
    energy: 130,
    sprint: 1.05,
    // passiveDescription: "Increased combo duration.",
    abilities: ["Celestial Twin", "Cloud Walker", "Defy", "Primal Fury"],
    aura: "r",
    introduced: "25",
    polarities: ["-", "r", "d"],
    sex: "Male",
  },
  {
    id: "Zephyr",
    // name: "zephyr",
    tags: ["Tactics"],
    // description: "Specializing in air attacks and mobility, Zephyr dominates from above.",
    health: 150,
    shield: 150,
    armor: 15,
    energy: 100,
    sprint: 1.15,
    // passiveDescription: "Move with increased agility while Airborne and fall more slowly.",
    abilities: ["Tail Wind", "Airburst", "Turbulence", "Tornado"],
    aura: "d",
    introduced: "12",
    polarities: ["r", "-"],
    sex: "Female",
  },
  {
    id: "Zephyr Prime",
    // name: "zephyrPrime",
    className: "Zephyr",
    // description: "Take to the skies with this golden bird of destruction.",
    health: 150,
    shield: 150,
    armor: 75,
    energy: 150,
    sprint: 1.2,
    introduced: "22.16.4",
    masteryReq: 6,
    polarities: ["r", "r", "d", "-"],
    // releaseDate: "2018 03 20",
    // vaultDate: "n/a",
    // estimatedVaultDate: "2020 01 28"
  },
  // Archwing
  {
    id: "Amesha",
    tags: ["Archwing"],
    // description: "Transform into a winged guardian.",
    health: 400,
    shield: 200,
    armor: 200,
    energy: 200,
    sprint: 1.1,
    polarities: ["r", "d", "-"],
    abilities: ["Watchful Swarm", "Benevolent Decoy", "Warding Grace", "Vengeful Rush"],
  },
  {
    id: "Elytron",
    tags: ["Archwing"],
    // description: "This heavy duty Archwing was designed for one purpose, destruction.",
    health: 450,
    shield: 450,
    armor: 150,
    energy: 125,
    sprint: 0.9,
    polarities: ["r", "r"],
    abilities: ["Bloomer", "Core Vent", "Thumper", "Warhead"],
  },
  {
    id: "Itzal",
    tags: ["Archwing"],
    // description: "Designed for quick clandestine attacks, the Itzal Archwing excels at striking from the darkness of space.",
    health: 200,
    shield: 200,
    armor: 50,
    energy: 200,
    sprint: 1.2,
    polarities: ["r", "d", "-"],
    abilities: ["Blink", "Penumbra", "Cosmic Crush", "Fighter Escort"],
  },
  {
    id: "Odonata",
    tags: ["Archwing"],
    // description: "The systems built into this Archwing balance offensive capabilities with defensive countermeasures.",
    health: 300,
    shield: 300,
    armor: 100,
    energy: 100,
    sprint: 1,
    polarities: ["r", "d", "-"],
    abilities: ["Energy Shell", "Disarray", "Seeking Fire", "Repel"],
  },
  {
    id: "Odonata Prime",
    className: "Odonata",
    // description: "This enhanced version of the first Archwing prototype takes the design to its theoretical limits.",
    health: 400,
    shield: 400,
    armor: 100,
    energy: 100,
    sprint: 1.05,
    polarities: ["r", "d", "-", "-"],
  },
];

/** 战甲功能分类 */
export enum WarframeFunction {
  DPS = "DPS", // 输出
  Tactics = "Tactics", // 战术
  Tank = "Tank", // 坦克
  Support = "Support", // 辅助
  Control = "Control", // 控制
  Archwing = "Archwing", // Archwing
}

export { _abilityData, registerAbilityData } from "./ability.data";
