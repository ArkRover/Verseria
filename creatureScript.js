const characters = [
            {
                id: 1,
                name: "Harpy",
                faction: "Human",
                image: "Versaria.library/images/M8Z0178E740KY.info/e4478e7cfb32d357aacb118f652727f1.jpg",
                fullImage: "Versaria.library/images/M8Z0178E740KY.info/e4478e7cfb32d357aacb118f652727f1.jpg",
                description: "Harpies are humanoid birds commonly found in dense forests, towering cliffs, and mountainous regions. They possess brightly coloured plumage, often in vibrant shades of red, blue, green, or gold, which helps them blend into tropical canopies or intimidate rivals. Their large, powerful wings allow them to fly at incredible speeds, making them formidable hunters and agile aerial combatants.",
                behavior: "Harpies are highly territorial and often form matriarchal tribes led by the strongest female. They communicate through a mix of screeches, clicks, and melodic calls. While many harpies are aggressive and see other creatures as prey or threats, some rare tribes have been known to trade other races.",
                habitat: "Forests, Mountains, Cliffs",
                diet: "Carnivorous (occasionally fruits/nuts)",
                size: "Medium",
                threat: "",
                tags: ["Matriarchal", "Territorial"],
                abilities: [
                    { 
                        name: "Falcon Punch", 
                        desc: "The harpy tucks its wings tight against its body and plummets in a steep dive, curling its powerful talons into a balled-up fist-like shape. Just before impact, it snaps its legs forward, striking with the full force of its descent. The attack's power scales with the height of the dive—higher drops mean more destructive force." 
                    },
                    { 
                        name: "Wing Drill", 
                        desc: "The harpy wraps its wings tightly around its body, forming a spinning drill-like shape as it spirals toward its target. This attack not only deals piercing damage but also deflects incoming fire-based attacks due to the harpy's naturally fire-resistant feathers." 
                    },
                    { 
                        name: "Screech Sonic", 
                        desc: "The harpy lets out an ear-piercing shriek that disorients enemies, causing temporary deafness or confusion. Those too close may suffer ruptured eardrums or even fall unconscious if the sound is powerful enough." 
                    },
                    {
                        name: "Stomp Out",
                        desc: "Whether grounded or mid-flight, the harpy delivers a relentless barrage of rapid kicks with its razor-sharp talons. This flurry of strikes can overwhelm opponents, leaving deep gashes or even knocking them prone."
                    },
                    {
                        name: "Screech Sonic",
                        desc: "The harpy lets out an ear-piercing shriek that disorients enemies, causing temporary deafness or confusion. Those too close may suffer ruptured eardrums or even fall unconscious if the sound is powerful enough."
                    },
                    {
                        name: "Talon Toss",
                        desc: "The harpy snatches a target with its claws, lifts them into the air, and hurls them toward the ground or another enemy. Smaller creatures may be carried away entirely, dropped from lethal heights."
                    }
                ],
                weaknesses: [
                    "Vulnerable to Ice & Lightning",
                    "Prideful Nature - often underestimates grounded foes",
                    "Susceptible to loud noises and sonic attacks"
                ],
                variants: [
                    "Storm Harpies: Darker plumage that generate minor wind gusts",
                    "Jungle Harpies: Smaller but more agile, using poison-coated talons",
                    "Royal Harpies: Larger, with iridescent feathers and enhanced intelligence"
                ]
            },
            {
                id: 2,
                name: "Succubus",
                faction: "Demon",
                image: "Versaria.library/images/MBGOVV42VAVRU.info/fbgt.webp",
                fullImage: "Versaria.library/images/MBGOVV42VAVRU.info/fbgt.webp",
                description: "Born of the Abyss, these lesser demons escaped infernal realms to survive by feeding on mortal lust. Shapeshifting predators who can match their prey's deepest desires, though their true form features curling horns, slitted pupils, and smooth skin.",
                behavior: "Organize under powerful Arch-Succubi in pleasure-palaces. Carve demonic hexes into their flesh for dark powers. Suffer eternal hunger that drives them feral if unfed.",
                habitat: "Cursed cities, shadowed places near human settlements",
                diet: "Sexual energy/life force (rarely sustained by pure love)",
                size: "Humanoid (shape varies)",
                threat: "",
                tags: ["Seduction", "Soul-Theft", "Shapeshifter"],
                abilities: [
                    { 
                        "name": "Dream-Walking", 
                        "desc": "Visit sleepers to feed without leaving physical traces" 
                    },
                    { 
                        "name": "Soul-Theft", 
                        "desc": "Bind a soul to create an addicted thrall through prolonged feeding" 
                    },
                    { 
                        "name": "Shadow-Meld", 
                        "desc": "Move through darkness like living smoke" 
                    },
                    {
                        "name": "Memory theft", 
                        "desc": "" 
                    },
                    {
                        "name": "Irresistible voice", 
                        "desc": "" 
                    },
                    {
                        "name": "Drain", 
                        "desc": "" 
                    },
                    { 
                        "name": "Demonic Hexes", 
                        "desc": "Tattoo-like flesh carvings grant powers to succubi but are curses to other beings." 
                    }
                ],
                weaknesses: [
                    "Silver & salt burn their skin; salt circles trap them",
                    "True names can bind or banish them",
                    "Holy vows of celibacy make mortals invisible to them",
                    "Wither into ash husks without feeding"
                ],
                variants: [
                    "Husk: Starved succubi reduced to emaciated ash-covered wraiths",
                    "Arch-Succubus: Ancient demons who rule pleasure-courts with multiple bound thralls"
                ]
            },
            {
                id: 3,
                name: "Cyclops",
                faction: "Demon",
                image: "Versaria.library/images/M91OV2RWL7FEH.info/5b4156bf0548f84439d77c8a8422662b.jpg",
                fullImage: "Versaria.library/images/M91OV2RWL7FEH.info/5b4156bf0548f84439d77c8a8422662b.jpg",
                description: "A towering infernal brute standing 15 meters tall, its cracked volcanic hide pulsing with cursed runes. A single bloodshot eye dominates its face, glowing with malevolent intelligence that can shatter mortal minds.",
                behavior: "Roams wastelands collecting trophies from fallen foes. Either serves dark gods or demands sacrificial tributes from terrified settlements.",
                habitat: "Hellish dimensions, volcanic ruins, battlefields",
                diet: "Flesh of mortals/devoured souls (often ritualistic)",
                size: "15m (50ft) tall",
                threat: "50",
                tags: ["Siegebreaker", "Terror", "Infernal"],
                abilities: [
                    { 
                        "name": "Unholy Strength", 
                        "desc": "Rips apart stone fortifications, hurls boulders as projectiles, crushes war machines bare-handed" 
                    },
                    { 
                        "name": "Malevolent Gaze", 
                        "desc": "Eye induces petrification, madness, or soul-draining depending on variant (yellow/red/green glow)" 
                    },
                    { 
                        "name": "Infernal Regeneration", 
                        "desc": "Wounds close rapidly unless caused by blessed/enchanted weapons" 
                    },
                    { 
                        "name": "Aura of Dread", 
                        "desc": "Lesser creatures within 1km must resist paralysis or flee in terror" 
                    },
                    { 
                        "name": "Voice resonates", 
                        "desc": "" 
                    }
                ],
                weaknesses: [
                    "The eye is vulnerable—blinding it causes agony and disrupts magic",
                    "Bound by ancient divine rituals (oaths, artifact chains)",
                    "Cursed runes on its body can be exploited for banishing"
                ],
                variants: [
                        "Rune-Carved: Tattoos grant fire breath/necromancy (glowing red eye)",
                        "Horned Tyrant: Adorns horns with victims' skulls (green eye induces plague)",
                        "Molten Maw:"
                ],
            },
            {
                id: 4,
                name: "Magridar",
                faction: "Human",
                image: "Versaria.library/images/M915PD7GN213K.info/27e356ea185fa327dcaaba7e52f01bb2.jpg",
                fullImage: "Versaria.library/images/M915PD7GN213K.info/27e356ea185fa327dcaaba7e52f01bb2.jpg",
                description: "Towering philosopher-giants who dwell atop remote peaks, observing the cosmos with patience. Their bluish-white skin resists extremes of nature, and their words carry the weight of centuries.",
                behavior: "Contemplative and deliberate; values silence as much as speech. Rarely aggressive but fiercely protective of sacred sites and offspring.",
                habitat: "Mountain plateaus, stone monoliths, celestial observatories",
                diet: "Carnivorous",
                size: "10–15m (30–50ft) tall",
                threat: "40",
                tags: ["Wise", "Resilient", "Celestial"],
                abilities: [
                    { 
                        "name": "Regenerative Healing", 
                        "desc": "Limbs regrow over years; scars become narrative symbols" 
                    },
                    { 
                        "name": "Elemental Resistance", 
                        "desc": "Immune to temperature extremes, highly resistant to physical trauma" 
                    },
                    { 
                        "name": "Celestial Divination", 
                        "desc": "Reads stars for prophecies (rarely shared with outsiders)" 
                    },
                    { 
                        "name": "Silent Discourse", 
                        "desc": "Can communicate complex ideas through pauses and gestures" 
                    }
                ],
                weaknesses: [
                    "Slow reproduction (2 children per lifetime = cultural vulnerability)",
                    "Reliant on sacred sites—displacement weakens their connection to knowledge",
                    "Overdeliberation: Struggles to react swiftly to sudden threats"
                ],
                variants: [
                    "Star-Painted: Elders with constellations tattooed in luminous ink; act as historians",
                    "White Warrior: Face-painted defenders; regenerative abilities triple in combat",
                    "Echo Chanter=: Masters of resonant harmonics; use voice to shape ice/stone"
                ],
            },
            {
                id: 5,
                name: "Sura",
                faction: "Human",
                image: "Versaria.library/images/M7X3R90JQIFGF.info/f9f75a04f6574f08a46cb5cba5575276.jpg",
                fullImage: "Versaria.library/images/M7X3R90JQIFGF.info/f9f75a04f6574f08a46cb5cba5575276.jpg",
                description: "Ageless dark-skinned warriors who transition from male to revered feminine elders at 50. Their society blends martial discipline with spiritual rebirth, governed by a sacred life cycle of strength and wisdom.",
                behavior: "Communal and duty-bound. Adults serve as protectors; elders guide through ancestral wisdom. Highly ritualistic.",
                habitat: "Fortified mountain monasteries, sunlit temples",
                diet: "Carnivorous",
                size: "1.8–2.1m (6–7ft) tall",
                threat: "10",
                tags: ["Transformative", "Sacred Warriors", "Ancestor-Worship"],
                abilities: [
                    { 
                        "name": "Lifecycle Adaptation", 
                        "desc": "Post-50 feminization enhances longevity (elders appear eternally youthful)" 
                    },
                    { 
                        "name": "Tideshock Phalanx", 
                        "desc": "Warriors interlock arms to form near-impenetrable shield walls" 
                    },
                    { 
                        "name": "Ancestral Communion", 
                        "desc": "Elders channel deceased predecessors' wisdom via incense rituals" 
                    },
                    { 
                        "name": "Sacred Veins", 
                        "desc": "Elders' luminous tattoos grant minor precognition (1/day)" 
                    }
                ],
                weaknesses: [
                    "Cultural fragility: Low birthrate due to single-gender reproduction",
                    "Transition crisis: Year-long vulnerability during feminization",
                    "Taboo bonds: Forbidden relationships disrupt social harmony"
                ],
                variants: [
                        "Unlit One (Hikarenai): Warriors never chosen by elders; often become ascetic monks",
                        "Oracle Elder: Misura with silvered eyes who speaks in ancestral tongues",
                        "Half-Light (Han'yō): Hybrid offspring with non-Sura traits (elf ears, dwarven resilience)",
                ],
            },
            {
                id: 6,
                name: "",
                faction: "",
                image: "",
                fullImage: "",
                description: "",
                behavior: "",
                habitat: "",
                diet: "",
                size: "",
                threat: "",
                tags: [],
                abilities: [
                    { 
                        
                    },
                ],
                weaknesses: [
                    
                ],
                variants: [
                        
                ],
            },
        ];
        
        // DOM elements
        const characterGrid = document.querySelector('.character-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const modal = document.querySelector('.character-modal');
        const closeModal = document.querySelector('.close-modal');
        const modalImage = document.querySelector('.modal-image');
        const modalName = document.querySelector('.modal-name');
        const modalFaction = document.querySelector('.modal-faction');
        const modalDescription = document.querySelector('.modal-description');
        const modalBehavior = document.querySelector('.modal-behavior');
        const modalAbilities = document.querySelector('.modal-abilities');
        const habitatEl = document.querySelector('.habitat');
        const dietEl = document.querySelector('.diet');
        const sizeEl = document.querySelector('.size');
        const threatEl = document.querySelector('.threat');
        const tagsContainer = document.querySelector('.tags-container');
        const weaknessesList = document.querySelector('.weaknesses-list');
        const variantsList = document.querySelector('.variants-list');
        
        // Display characters
        function displayCharacters(filter = 'all') {
            characterGrid.innerHTML = '';
            
            const filteredCharacters = filter === 'all' 
                ? characters 
                : characters.filter(char => {
                    if (filter === 'faction1') return char.faction === "Human";
                    if (filter === 'faction2') return char.faction === "Demon";
                    if (filter === 'faction3') return char.faction === "Dragon";
                    if (filter === 'faction4') return char.faction === "Aracnid";
                    if (filter === 'faction5') return char.faction === "Pathogen";
                    if (filter === 'faction6') return char.faction === "Undead";
                    if (filter === 'faction7') return char.faction === "Spirit";
                    if (filter === 'faction8') return char.faction === "Colossus";
                    if (filter === 'faction9') return char.faction === "Golem";
                    if (filter === 'faction10') return char.faction === "Others";
                    return true;
                });
            
            filteredCharacters.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.dataset.id = character.id;
                
                card.innerHTML = `
                    <img src="${character.image}" alt="${character.name}" class="character-image">
                    <div class="character-info">
                        <h3 class="character-name">${character.name}</h3>
                        <p class="character-faction">${character.faction}</p>
                        <div class="character-tags">
                            ${character.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => openCharacterModal(character));
                characterGrid.appendChild(card);
            });
        }
        
        // Open character modal with expanded information
        function openCharacterModal(character) {
            modalImage.src = character.fullImage;
            modalImage.alt = character.name;
            modalName.textContent = character.name;
            modalFaction.textContent = character.faction;
            modalDescription.textContent = character.description;
            modalBehavior.textContent = character.behavior;
            habitatEl.textContent = character.habitat;
            dietEl.textContent = character.diet;
            sizeEl.textContent = character.size;
            threatEl.textContent = character.threat;
            
            // Update tags
            tagsContainer.innerHTML = '';
            character.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });
            
            // Clear and update abilities
            while (modalAbilities.children.length > 1) {
                modalAbilities.removeChild(modalAbilities.lastChild);
            }
            
            character.abilities.forEach(ability => {
                if (ability.name && ability.desc) {
                    const abilityDiv = document.createElement('div');
                    abilityDiv.className = 'ability';
                    abilityDiv.innerHTML = `
                        <div class="ability-name">${ability.name}</div>
                        <div class="ability-desc">${ability.desc}</div>
                    `;
                    modalAbilities.appendChild(abilityDiv);
                }
            });
            
            // Update weaknesses
            weaknessesList.innerHTML = '';
            character.weaknesses.forEach(weakness => {
                const li = document.createElement('li');
                li.textContent = weakness;
                weaknessesList.appendChild(li);
            });
            
            // Update variants
            variantsList.innerHTML = '';
            character.variants.forEach(variant => {
                const li = document.createElement('li');
                li.innerHTML = variant;
                variantsList.appendChild(li);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal
        function closeCharacterModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Event listeners
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                displayCharacters(button.dataset.filter);
            });
        });
        
        closeModal.addEventListener('click', closeCharacterModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCharacterModal();
        });
        
        // Initialize
        displayCharacters();