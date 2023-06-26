import { Game } from "../models/game.model"

export const GAMES: Game[] = [
  {
    _id: 1,
    title: 'League of Legends',
    genre: 'MOBA',
    image: '../../assets/images/imageBg-1.jpg',
    description: "League of Legends is a massively popular online multiplayer battle arena game that encompasses intense strategic gameplay, where two teams of champions clash in a dynamic and ever-evolving virtual world, striving to destroy the enemy Nexus while overcoming various obstacles, including powerful minions, epic neutral monsters, and the opposing team's champions, utilizing a vast array of unique abilities, items, and tactics, all while navigating complex maps and coordinating intricate team-based strategies, making it a thrilling and immersive experience for players around the globe.",
    developer: 'Riot Games',
    multiplayer: true,
  },

  {
    _id: 2,
    title: 'Lost Ark',
    genre: 'MMORPG',
    image: '../../assets/images/imageBg-5.jpg',
    description: "Lost Ark is a highly anticipated action MMORPG that combines fast-paced combat, intricate world exploration, and deep character progression. Set in a vibrant and fantastical universe, players embark on a grand adventure as they battle against powerful foes and unravel the mysteries of the Lost Ark, a powerful artifact that has resurfaced in the world. The game features a diverse selection of classes, each with its own unique playstyle and abilities, allowing players to find a character that suits their preferred combat style. With a focus on action-packed combat, players engage in dynamic battles, chaining together combos and unleashing devastating skills to vanquish enemies. Beyond combat, Lost Ark offers a vast and visually stunning world to explore, filled with diverse landscapes, dungeons, and hidden treasures. Players can also engage in various activities like crafting, fishing, and engaging in PvP battles against other players. With its immersive gameplay, beautiful visuals, and a wealth of content to discover, Lost Ark promises an exciting and engaging MMORPG experience for players around the globe.",
    developer: 'Smilegate',
    multiplayer: true,
  },
  {
    _id: 3,
    title: 'World of Warcraft',
    genre: 'MMORPG',
    image: '../../assets/images/imageBg-3.jpg',
    description: "World of Warcraft, often referred to as WoW, is a massively popular MMORPG set in the fantasy world of Azeroth. In this immersive online universe, players create and customize their own characters from a range of diverse races and classes, each with unique abilities and skills. They embark on epic quests, engage in thrilling battles against both AI-controlled enemies and other players, explore vast and visually stunning landscapes, and interact with a vibrant and passionate community. With a rich lore, engaging storytelling, and a constant stream of new content and expansions, World of Warcraft offers players a seemingly endless array of adventures, dungeons, raids, and PvP battlegrounds to conquer. The game also features robust character progression, allowing players to level up, acquire powerful gear, and specialize in different talent trees, catering to various playstyles and strategies. World of Warcraft is renowned for its immersive gameplay, cooperative group dynamics, and the sense of accomplishment and camaraderie that comes from tackling challenging content together, making it one of the most influential and beloved MMORPGs of all time.",
    developer: 'Blizzard Entertainment',
    multiplayer: true,
  },
  {
    _id: 4,
    title: 'Guild Wars 2',
    genre: 'MMORPG',
    image: '../../assets/images/imageBg-4.jpg',
    description: "Guild Wars 2 is a captivating MMORPG set in the fantasy world of Tyria. It offers players a dynamic and visually stunning online experience where they can create and customize their own characters from a diverse selection of races and professions. With a focus on cooperative gameplay, players can join together in guilds or form ad hoc groups to embark on epic quests, engage in thrilling PvP battles, or conquer challenging dungeons and raids. The game features a unique storyline that evolves based on the actions and choices of the players, ensuring a personalized and immersive narrative experience. Guild Wars 2 also boasts a dynamic event system, where players can encounter spontaneous world events that require their assistance, fostering a sense of shared adventure and exploration. Additionally, the game's innovative combat system encourages active and strategic play, with players utilizing a wide range of abilities and weapons to engage in fast-paced battles against both AI-controlled enemies and other players. With its stunning visuals, rich lore, robust character customization, and engaging gameplay mechanics, Guild Wars 2 offers a vibrant and ever-evolving online world that captivates both casual and dedicated MMO players alike.",
    developer: 'ArenaNet',
    multiplayer: true,
  },
  {
    _id: 5,
    title: 'Dota 2',
    genre: 'MOBA',
    image: '../../assets/images/imageBg-6.jpg',
    description: "Dota 2 is a highly competitive and complex multiplayer online battle arena game that challenges teams of five players to strategically navigate a visually stunning and intricately designed map, working together to destroy the enemy's Ancient while defending their own. With a roster of over a hundred unique heroes, each possessing distinct abilities and playstyles, players engage in intense team-based battles, utilizing skillful maneuvers, precise timing, and strategic decision-making to outwit their opponents. Dota 2 also features a deep and ever-evolving metagame, where players can customize their heroes with a vast array of items and adapt their strategies based on the changing dynamics of each match, making it a game that rewards both individual skill and coordinated teamwork, and a favorite among competitive gaming enthusiasts worldwide.",
    developer: 'Valve corporation',
    multiplayer: true,
  },
  {
    _id: 6,
    title: 'Minecraft',
    genre: 'Sandbox',
    image: '../../assets/images/imageBg-2.jpg',
    description: "Minecraft is a sandbox survival game that has become a cultural phenomenon, known for its limitless creativity and endless possibilities. In this pixelated block-based world, players are dropped into a procedurally generated environment where they can gather resources, build structures, craft tools and items, and explore vast landscapes. With no set objectives or goals, players have the freedom to shape the world as they see fit, constructing elaborate buildings, complex redstone contraptions, and even entire cities. The game offers various modes, including Survival mode where players must gather resources and fend off enemies, Creative mode where unlimited resources are available for building, and Adventure mode where custom-made maps and experiences can be enjoyed. Minecraft also supports multiplayer, allowing players to collaborate with friends or engage in competitive gameplay. The game's simple yet charming graphics, coupled with its open-ended nature, have captured the hearts of millions of players of all ages, making Minecraft a beloved and iconic game that encourages creativity, exploration, and imaginative play.",
    developer: 'Mojang',
    multiplayer: true,
  }
]

// Template per gli oggetti Game
// _id: ,
// title: '',
// genre: '',
// image: '',
// description: "",
// developer: '',
// multiplayer: true,
