// Character Database Structure
const characterDatabase = {
    //#region Abyssal Hunters 
    "seraphina": {
        id: "seraphina",
        name: "Seraphina",
        title: "",
        faction: "Abyssal Hunters",
        image: "Versaria.library\\images\\M83FW6TW93ZZU.info\\87734638_p0_master1200.jpg",
        race: "Sura",
        gender: "",
        personality: "",
        roles: [""],
        description: "",
        quote: "",
        background: "",
        abilities: [
            "",
            "",
            ""
        ],
        relationships: [
            "",
            "",
            ""
        ]
    },
    //#endregion

    //#region The Five Grand Royal Families
    "anissa_van_broil": {
        id: "anissa_van_broil",
        name: "Anissa Van Broil",
        title: "Second Eldest Daughter of the Broil Family",
        faction: "The Five Grand Royal Families",
        image: "Versaria.library\\images\\MBTXLS6DQDYQP.info\\111841095_p0_master1200.png",
        race: "Human",
        gender: "Female",
        personality: "Meek, Timid, Kind-hearted",
        roles: ["Noble", "Politician", "Business Magnate"],
        description: "The second daughter of the powerful Broil family, Anissa is a gentle soul in a world of cutthroat politics. Despite her noble status, she often finds herself bullied by her ambitious half-sister Lenna. Her kindness makes her beloved by servants but seen as weak by her family.",
        quote: "I... I just want everyone to get along...",
        background: "Raised in the cutthroat world of royal politics, Anissa never developed the ruthless nature of her siblings. Her mother's early death left her vulnerable, and her half-sister Lenna took advantage of this. Despite the constant bullying, Anissa maintains her gentle nature, secretly running charities to help the poor.",
        abilities: [
            "Financial Genius: Surprisingly skilled with numbers and business",
            "Empathic Listening: Can understand people's true feelings",
            "Secret Philanthropy: Runs anonymous charities to help commoners"
        ],
        relationships: [
            "Lenna Le Broil: Constantly bullied by her ambitious half-sister",
            "Vera Van Broil: Respects her elder sister but is intimidated by her",
            "Sinclair: Finds comfort in her wise counsel"
        ]
    },
    "lenna_le_broil": {
        id: "lenna_le_broil",
        name: "Lenna Le Broil",
        title: "Ambitious Half-Sister",
        faction: "The Five Grand Royal Families",
        image: "Versaria.library\\images\\MBTXRC4S8EI9K.info\\98721790_p0_master1200.png", // You'll need to add an image path
        race: "Human",
        gender: "Female",
        personality: "Ambitious, Cruel, Manipulative",
        roles: ["Noble", "Schemer", "Socialite"],
        description: "The illegitimate daughter of Lord Broil, Lenna constantly bullies Anissa to assert her position in the family. She's determined to climb the social ladder by any means necessary.",
        quote: "Blood may be thicker than water, but gold is thicker than both.",
        background: "Born from one of Lord Broil's mistresses, Lenna was acknowledged but never fully accepted. She takes out her frustrations on Anissa, the weakest of her legitimate sisters, while scheming to improve her own standing.",
        abilities: [
            "Social Manipulation: Expert at turning people against each other",
            "Veiled Threats: Delivers cutting remarks with perfect etiquette",
            "Status Climbing: Always knows how to advance her position"
        ],
        relationships: [
            "Anissa Van Broil: Primary target of her bullying",
            "Lord Broil: Desperately seeks his approval",
            "Other Nobles: Constantly networking for advantage"
        ]
    },
    "sinclair": {
        id: "sinclair",
        name: "Sinclair",
        title: "Royal Advisor & Concubine",
        faction: "The Five Grand Royal Families",
        image: "Versaria.library/images/M6C0GGL95GEMW.info/e76defd8e2db4ac71ed80eb5a6bd2489.jpg",
        race: "Elven",
        gender: "Female",
        personality: "Loyal, Logical, Discreet",
        roles: ["Royal Court", "Diplomat", "Long-lived"],
        description: "An elven who has served one of The Great Noble Families as an advisor for centuries until becoming a concubine for the 21st king. Though he wished to marry her as queen, political opposition prevented this. She agreed to remain as concubine on the condition he marry a woman he could love. After the king's natural death, she continued as royal advisor and gained greater respect as an official member of the royal family.",
        quote: "Power is not taken, it is given - and the wise know when to accept it and when to let it pass.",
        background: "Sinclair comes from a long line of elven advisors who have served the royal family for generations. Her wisdom and political acumen made her indispensable to the court, and her relationship with the king, while controversial, ultimately strengthened her position.",
        abilities: [
            "Political Savvy: Centuries of experience navigating court politics and intrigue",
            "Royal Influence: Can leverage her position in the royal family to affect change",
            "Elven Longevity: Her extended lifespan gives her perspective few humans possess"
        ],
        relationships: [
            "21st King (deceased): Her former lover and monarch",
            "Current Queen: Maintains a cordial but complex relationship",
            "Noble Families: Both respects and manipulates as needed"
        ]
    },
    "vivian": {
        id: "vivian",
        name: "Vivian",
        title: "",
        faction: "",
        image: "Versaria.library\\images\\M8M122IW23XZS.info\\Vivas_ren.webp",
        race: "",
        gender: "",
        personality: "",
        roles: [""],
        description: "",
        quote: "",
        background: "",
        abilities: [
            "",
            "",
            ""
        ],
        relationships: [
            "",
            "",
            ""
        ]
    },
    "vera_van_broil": {
        id: "vera_van_broil",
        name: "Vera Van Broil",
        title: "",
        faction: "",
        image: "Versaria.library\\images\\MBTXPF9US9SHG.info\\121130275_p1_master1200.jpg",
        race: "",
        gender: "",
        personality: "",
        roles: [""],
        description: "",
        quote: "",
        background: "",
        abilities: [
            "",
            "",
            ""
        ],
        relationships: [
            "",
            "",
            ""
        ]
    },
    //#endregion

    //#region Valkyries 
    "blake": {
        id: "blake",
        name: "Blake",
        title: "Valkyrie of the Dark Moon",
        faction: "Valkyries",
        image: "Versaria.library\\images\\M6C05INGYYPLD.info\\BlakeValkyrieOfTheDarkMoon.jpg",
        race: "Valkyrie",
        gender: "Female",
        personality: "Brooding, Intense, Loyal",
        roles: ["Warrior"],
        description: "Chosen by the dark moon, Blake is a Valkyrie who escorts the souls of fallen warriors who died under moonlight. Her solemn duty has made her distant from mortals, but fiercely protective of her charges.",
        quote: "The moon's shadow reveals what the sun's light cannot touch.",
        background: "Once a mortal warrior who fell in battle under a lunar eclipse, Blake was chosen by the moon goddess to serve as a Valkyrie. She maintains some mortal connections but is bound to her celestial duties.",
        abilities: [
            "Lunar Empowerment: Stronger at night, especially during moon phases",
            "Soul Guidance: Can safely escort spirits to the afterlife",
            "Shadow Movement: Can teleport between shadows"
        ],
        relationships: [
            "Leone: Fellow Valkyrie and occasional rival",
            "Moon Goddess: Her patron and commander",
            "Mortal Family: Maintains distant watch over her descendants"
        ]
    },
    "leone": {
        id: "leone",
        name: "Leone",
        title: "Valkyrie of the Rising Sun",
        faction: "Valkyries",
        image: "Versaria.library\\images\\M6C05GU62V070.info\\LeoneValkyrieOfTheRisingSun.jpg",
        race: "Human",
        gender: "Female",
        personality: "Loyal, Radiant, Dutiful",
        roles: ["Solar Champion", "Warrior"],
        description: "Solar counterpart to Blake, warrior of dawn. Her loyalty to the sun god is absolute, and she carries out her duties with unwavering dedication and solar-powered might.",
        quote: "As the dawn breaks darkness, so too shall my light vanquish all shadows.",
        background: "Unlike Blake, Leone's origins are well-documented. She was a sun priestess who demonstrated such purity of faith that she was chosen to become a Valkyrie. Her transformation was public and celebrated.",
        abilities: [
            "Solar Flare: Channels sunlight into blinding attacks",
            "Dawn's Herald: Can sense when and where the sun will rise anywhere",
            "Phoenix Renewal: Near-death experiences make her temporarily more powerful"
        ],
        relationships: [
            "Sun God: Absolute devotion to her deity",
            "Blake: Solar counterpart, their dynamic is complex",
            "Dawn Guard: Leads this elite group of warriors"
        ]
    },
    //#endregion

    //#region Order
    "clive" : {
        id: "clive",
        name: "Clive",
        title: "The Silent Blade",
        faction: "Order",
        image: "Versaria.library\\images\\M7X3NUZSE70NU.info\\64454e5dc38081822a8024c8f682aea1.jpg",
        race: "Human (Assumed)",
        gender: "Male",
        personality: "Nonchalant, Bored, Secretly Calculating",
        roles: ["Assassin", "Infiltration Expert"],
        description: "A seemingly disinterested man who appears to lack any drive or ambition. In truth, he is a highly skilled assassin who uses his unassuming demeanor to deceive his targets. His bored expression hides a sharp, analytical mind.",
        quote: "*Yawn*... Is it over yet?",
        background: "Clive’s past is shrouded in mystery, much like the Order he serves. He joined the organization under unknown circumstances and quickly rose through the ranks due to his unnerving ability to eliminate targets without drawing attention. His lazy facade makes him the perfect killer—no one suspects the man who looks like he’d rather be napping.",
        abilities: [
            "Master of Disguise: Blends into crowds effortlessly, appearing completely ordinary.",
            "Silent Takedowns: Excels in assassination without a sound.",
            "Poison Expertise: Uses toxins to make deaths look like accidents.",
            "Feigned Incompetence: Appears clumsy or disinterested to lower guard."
        ],
        relationships: [
            "Order Members: Respected but seen as an oddity due to his demeanor.",
            "Former Targets: Those who underestimated him… briefly.",
            "Local Authorities: Unaware of his true nature, considering him harmless."
        ]
    },
    //#endregion

    //#region Daiga Monestary
    "chae": {
        id: "chae",
        name: "Chae",
        title: "",
        faction: "Daiga Monestary",
        image: "Versaria.library\\images\\MBSYYZKYG8JG4.info\\1296300.png",
        race: "Sura",
        gender: "",
        personality: "",
        roles: [""],
        description: "",
        quote: "",
        background: "",
        abilities: [
            "Summon: ",
            "",
            ""
        ],
        relationships: [
            "",
            "",
            ""
        ]
    },
    //#endregion

    //#region Witches Cult
    "domitri": {
        id: "domitri",
        name: "Domitri",
        title: "The Dragon Witch",
        faction: "Witches Cult",
        image: "Versaria.library\\images\\M83F9RHO3FBZY.info\\124088059_p0_master1200.png",
        race: "Witch",
        gender: "Female",
        personality: "Arrogant, Aloof",
        roles: ["Magic User", "Combatant"],
        description: "A powerful witch with dragon blood which has transformed her body, granting her extraordinary abilities. Her arrogance matches her formidable power.",
        quote: "If you are too weak to challenge me then stay out of my way.",
        background: "Little is known about Domitri's early life. Her first recorded appearance was when she killed a powerful succubus during the Terra Raid. Her dragon blood gives her both great power and isolation from others.",
        abilities: [
            "Dragon Blood: Her blood is deadly to weak creatures and enhances her physical abilities",
            "Fire Magic: Mastery over destructive flame magic",
            "High Defense: Nearly impenetrable magical and physical defenses"
        ],
        relationships: [
            "The Beast Witch: Fellow witch and occasional ally",
            "Terra Raid Survivors: Those who witnessed her power during the raid",
            "Dragonkin: Has a complex relationship with true dragons"
        ]
    },
    "quinxi": {
        id: "quinxi",
        name: "Quinxi",
        title: "Blade Witch",
        faction: "",
        image: "Versaria.library\\images\\MBWDT210CW2XP.info\\e6569a5b00b5a542205c4e5a48fcdef0.jpg",
        race: "Witch",
        gender: "Female",
        personality: "",
        roles: [""],
        description: "",
        quote: "",
        background: "",
        abilities: [
            "",
            "",
            ""
        ],
        relationships: [
            "",
            "",
            ""
        ]
    },
    //#endregion
    //whatever in creation exists without my knowledge exists without my consent
};

// Faction data updated to reference character IDs
const factions = [
    {
        name: "Abyssal Hunters",
        banner: "Versaria.library\\images\\M84Q08RBNUFGY.info\\dfsadf.png",
        description: "A group of hunters that specialize in demon hunting.",
        characterIds: ["seraphina", "ironclad", "Blade"]
    },
    {
        name: "The Five Grand Royal Families",
        banner: "Versaria.library\\images\\MBTXN08H0VF3B.info\\94991876_p0_master1200.png",
        description: "These families run the whole country.",
        characterIds: ["anissa_van_broil", "lenna_le_broil", "vera_van_broil", "sinclair", "vivian"]
    },
    {
        name: "Valkyries",
        banner: "Versaria.library\\images\\M8Q9HCTD1094K.info\\thumb-1920-589861.jpg",
        description: "Celestial warriors who guide worthy souls to the afterlife.",
        characterIds: ["blake", "leone"]
    },
    {
        name: "Order",
        banner: "Versaria.library\\images\\M7KH0OIFECMA9.info\\rinotuna-.jpg",
        description: "A secret organisation that deal in illigal activities such as assassination.",
        characterIds: ["clive", ""]
    },
    {
        name: "Daiga Monestary",
        banner: "Versaria.library\\images\\MBTXP5X9NMNAU.info\\115346088_p0_master1200.jpg",
        description: "",
        characterIds: ["chae", ""]
    },
    {
        name: "Witches Cult",
        banner: "Versaria.library\\images\\MBUPDR6LHBHFZ.info\\svetlana-belova-mini-credit-halloween-yae-ei-together.jpg",
        description: "An organization formed by witches and their followers.",
        characterIds: ["domitri", "quinxi"]/*beast witch*/
    },
];

// Updated modal content generation without stats and age
function generateCharacterModal(character) {
    return `
        <h1>${character.name}</h1>
        <h2>${character.title}</h2>
        <h3>${character.faction}</h3>
        
        <div class="modal-container">
            <div class="modal-left-column">
                <img src="${character.image}" alt="Portrait of ${character.name}" class="modal-character-image">
                
                <div class="character-basic-info">
                    <p><strong>Race:</strong> ${character.race}</p>
                    <p><strong>Gender:</strong> ${character.gender}</p>
                    <p><strong>Personality:</strong> ${character.personality}</p>
                    <p><strong>Primary Roles:</strong> ${character.roles.join(', ')}</p>
                </div>
                
                <div class="info-card">
                    <h4>Key Relationships</h4>
                    <ul>
                        ${character.relationships.map(rel => `<li>${rel}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="modal-right-column">
                <section>
                    <h3>Description</h3>
                    <p>${character.description}</p>
                    
                    <div class="quote">
                        ${character.quote}
                    </div>
                </section>
                
                <section>
                    <h3>Background</h3>
                    <p>${character.background}</p>
                </section>
                
                <div class="info-card abilities-card">
                    <h4>Abilities & Skills</h4>
                    <ul>
                        ${character.abilities.map(ability => `<li><strong>${ability.split(':')[0]}:</strong> ${ability.split(':')[1]}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Update the openCharacterModal function
function openCharacterModal(characterId) {
    const character = characterDatabase[characterId];
    if (!character) {
        console.error(`Character ${characterId} not found in database`);
        return;
    }
    
    modalContent.innerHTML = generateCharacterModal(character);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Update the display function to use character IDs
function updateDisplay() {
    const currentFaction = factions[currentIndex];
    
    // Update banner and title
    bannerImage.src = currentFaction.banner;
    bannerTitle.textContent = currentFaction.name;
    currentFactionSpan.textContent = currentFaction.name;
    
    // Update faction carousel
    factionItems.forEach((item, index) => {
        item.classList.remove('selected', 'grayed');
        
        let displayIndex = (currentIndex - 2 + index) % factions.length;
        if (displayIndex < 0) displayIndex += factions.length;
        
        const faction = factions[displayIndex];
        item.querySelector('img').src = faction.banner;
        item.querySelector('h3').textContent = faction.name;
        item.querySelector('p').textContent = faction.description;
        
        if (index === 2) {
            item.classList.add('selected');
        } else {
            item.classList.add('grayed');
        }
    });
    
    // Update characters grid
    charactersContainer.innerHTML = '';
    currentFaction.characterIds.forEach(characterId => {
        const character = characterDatabase[characterId];
        if (!character) return;
        
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';
        characterCard.addEventListener('click', () => openCharacterModal(characterId));
        
        characterCard.innerHTML = `
            <div class="character-element">
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>${character.title}</p>
            </div>
        `;
        
        charactersContainer.appendChild(characterCard);
    });
}

// Remove the stat bar CSS since we're not using stats anymore
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    .character-basic-info {
        background-color: #1e1e1e;
        border: 1px solid #d4af37;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 20px;
    }
    
    .info-card {
        background-color: #1e1e1e;
        border: 1px solid #d4af37;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 20px;
    }
    
    .abilities-card {
        margin-top: 20px;
    }
`;
document.head.appendChild(styleElement);