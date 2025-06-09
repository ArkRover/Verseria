// Character data with expanded information
        const characters = [
            {
                id: 1,
                name: "Sinclair",
                occupation: "Royal advisor & Concubine",
                race: "Elven/Human",
                personality: "Loyal",
                image: "Versaria.library/images/M6C0GGL95GEMW.info/e76defd8e2db4ac71ed80eb5a6bd2489.jpg",
                fullImage: "Versaria.library/images/M6C0GGL95GEMW.info/e76defd8e2db4ac71ed80eb5a6bd2489.jpg",
                description: "A elven who has served one of The Great Noble Families as an advisor for centuries until becoming a concubine for the 21st king. Though he wished to marry her as queen, political opposition prevented this. She agreed to remain as concubine on the condition he marry a woman he could love. After the king's natural death, she continued as royal advisor and gained greater respect as an official member of the royal family.",
                background: "Sinclair comes from a long line of elven advisors who have served the royal family for generations. Her wisdom and political acumen made her indispensable to the court, and her relationship with the king, while controversial, ultimately strengthened her position.",
                tags: ["Royal Court", "Diplomat", "Long-lived"],
                abilities: [
                    { 
                        name: "Political Savvy", 
                        desc: "Centuries of experience navigating court politics and intrigue" 
                    },
                    { 
                        name: "Royal Influence", 
                        desc: "Can leverage her position in the royal family to affect change" 
                    },
                    { 
                        name: "Elven Longevity", 
                        desc: "Her extended lifespan gives her perspective few humans possess" 
                    }
                ],
                relationships: [
                    "21st King (deceased): Her former lover and monarch",
                    "Current Queen: Maintains a cordial but complex relationship",
                    "Noble Families: Both respects and manipulates as needed"
                ]
            },
            {
                id: 2,
                name: "Blake",
                occupation: "Valkyrie of the Dark Moon",
                race: "Hob/Human",
                personality: "Mysterious",
                image: "Versaria.library/images/M6C05INGYYPLD.info/BlakeValkyrieOfTheDarkMoon.jpg",
                fullImage: "Versaria.library/images/M6C05INGYYPLD.info/BlakeValkyrieOfTheDarkMoon.jpg",
                description: "A mysterious warrior who serves the lunar deities, shrouded in secrets and moonlight. Her origins are unknown, but her combat skills are legendary among the night watch.",
                background: "Little is known about Blake's early life. She appeared one night during a lunar eclipse, already bearing the marks of the Dark Moon Valkyrie. Some believe she was chosen by the gods, while others whisper she made a dark pact for her powers.",
                tags: ["Moon-touched", "Warrior", "Secretive"],
                abilities: [
                    { 
                        name: "Lunar Empowerment", 
                        desc: "Grows stronger under moonlight, especially during new moons" 
                    },
                    { 
                        name: "Shadow Step", 
                        desc: "Can briefly become one with darkness to move unseen" 
                    },
                    { 
                        name: "Eclipse Blade", 
                        desc: "Her weapon absorbs light and releases it in devastating attacks" 
                    }
                ],
                relationships: [
                    "Leone: Solar counterpart, relationship status unknown",
                    "Lunar Deities: Serves them faithfully but the nature is unclear",
                    "Night Watch: Respected but kept at arm's length"
                ]
            },
            {
                id: 3,
                name: "Levana",
                occupation: "Temple Knight",
                race: "Hob/Human",
                personality: "Devoted",
                image: "Versaria.library/images/M6C0ENH6ORPAV.info/dfe1dfd55529515d131c150314ad53f2.jpg",
                fullImage: "Versaria.library/images/M6C0ENH6ORPAV.info/dfe1dfd55529515d131c150314ad53f2.jpg",
                description: "A devoted guardian of sacred sites who has sworn her life to protecting ancient temples. Her faith is unshakable and her blade never wavers in defense of the holy grounds.",
                background: "Born to a family of temple artisans, Levana showed exceptional devotion from a young age. She underwent rigorous training to become a Temple Knight, the highest honor for lay devotees.",
                tags: ["Holy Warrior", "Protector", "Disciplined"],
                abilities: [
                    { 
                        name: "Sanctified Blade", 
                        desc: "Her weapon is blessed to smite the unholy" 
                    },
                    { 
                        name: "Aegis of Faith", 
                        desc: "Can create temporary barriers of pure willpower" 
                    },
                    { 
                        name: "Ritual Knowledge", 
                        desc: "Knows ancient rites that can purify or banish evil" 
                    }
                ],
                relationships: [
                    "High Priestess: Her mentor and spiritual guide",
                    "Fellow Knights: Bonds forged in sacred duty",
                    "Temple Devotees: Protects them with fierce devotion"
                ]
            },
            {
                id: 4,
                name: "Leone",
                occupation: "Valkyrie of the Rising Sun",
                race: "Hob/Human",
                personality: "Loyal",
                image: "Versaria.library/images/M6C05GU62V070.info/LeoneValkyrieOfTheRisingSun.jpg",
                fullImage: "Versaria.library/images/M6C05GU62V070.info/LeoneValkyrieOfTheRisingSun.jpg",
                description: "Solar counterpart to Blake, warrior of dawn. Her loyalty to the sun god is absolute, and she carries out her duties with unwavering dedication and solar-powered might.",
                background: "Unlike Blake, Leone's origins are well-documented. She was a sun priestess who demonstrated such purity of faith that she was chosen to become a Valkyrie. Her transformation was public and celebrated.",
                tags: ["Solar Champion", "Radiant", "Dutiful"],
                abilities: [
                    { 
                        name: "Solar Flare", 
                        desc: "Channels sunlight into blinding attacks" 
                    },
                    { 
                        name: "Dawn's Herald", 
                        desc: "Can sense when and where the sun will rise anywhere" 
                    },
                    { 
                        name: "Phoenix Renewal", 
                        desc: "Near-death experiences make her temporarily more powerful" 
                    }
                ],
                relationships: [
                    "Sun God: Absolute devotion to her deity",
                    "Blake: Solar counterpart, their dynamic is complex",
                    "Dawn Guard: Leads this elite group of warriors"
                ]
            },
            {
                id: 5,
                name: "Domitri",
                occupation: "Dragon Lord",
                race: "Dragonkin/Dragon",
                personality: "Powerful",
                image: "Versaria.library/images/M83F9RHO3FBZY.info/124088059_p0_master1200.png",
                fullImage: "Versaria.library/images/M83F9RHO3FBZY.info/124088059_p0_master1200.png",
                description: "A powerful being of draconic heritage who rules over the mountain clans. His mere presence commands respect, and his ancient wisdom is matched only by his physical might.",
                background: "Born from the union of a dragon and a dragonkin, Domitri inherited the best traits of both lineages. He united the warring mountain clans through a combination of strength and diplomacy.",
                tags: ["Draconic", "Ruler", "Ancient"],
                abilities: [
                    { 
                        name: "Dragon Form", 
                        desc: "Can transform into a full dragon for limited periods" 
                    },
                    { 
                        name: "Clan Unity", 
                        desc: "Can call upon any of the mountain clans for aid" 
                    },
                    { 
                        name: "Elder Wisdom", 
                        desc: "Centuries of experience inform his decisions" 
                    }
                ],
                relationships: [
                    "Mountain Clans: Rules them with firm but fair hand",
                    "Other Dragonlords: Complex web of alliances and rivalries",
                    "Human Kingdoms: Maintains careful diplomatic relations"
                ]
            },
            {
                id: 6,
                name: "Vivian",
                occupation: "Mystic Seer",
                race: "Hob/Human",
                personality: "Wise",
                image: "Versaria.library/images/M8M122IW23XZS.info/Vivas_ren.webp",
                fullImage: "Versaria.library/images/M8M122IW23XZS.info/Vivas_ren.webp",
                description: "Keeper of ancient knowledge and visions. Her wisdom spans centuries, and many seek her counsel though her prophecies often come wrapped in riddles and mystery.",
                background: "Vivian was born with the Sight, a rare gift even among her people. She spent decades traveling to collect knowledge before settling in her current tower to advise those who seek her.",
                tags: ["Prophet", "Oracle", "Keeper of Secrets"],
                abilities: [
                    { 
                        name: "True Sight", 
                        desc: "Can perceive hidden truths and future possibilities" 
                    },
                    { 
                        name: "Memory Walk", 
                        desc: "Can view past events as if present" 
                    },
                    { 
                        name: "Riddle Speech", 
                        desc: "Her words carry magical weight when spoken enigmatically" 
                    }
                ],
                relationships: [
                    "Seekers: Those who come for advice form temporary bonds",
                    "Other Seers: Network of information sharers",
                    "The Sight: Her relationship with her gift is complex"
                ]
            },
            {
                id: 7,
                name: "Chian",
                occupation: "Knight",
                race: "Human",
                personality: "Loyal",
                image: "Versaria.library/images/M8TZU4PJVHI5X.info/dc1iona-661a5edf-f83a-436b-a000-fb8b6736fb45.jpg",
                fullImage: "Versaria.library/images/M8TZU4PJVHI5X.info/dc1iona-661a5edf-f83a-436b-a000-fb8b6736fb45.jpg",
                description: "A steadfast knight sworn to protect the realm. His loyalty to the crown is unquestionable, and his sword arm has turned the tide of many battles. Though young for a knight of his rank, his valor and tactical mind have earned him respect among both peers and superiors.",
                background: "Born to a noble family with a long military tradition, Chian exceeded all expectations in his training. His rapid rise through the ranks was controversial but ultimately justified by his accomplishments.",
                tags: ["Protector", "Strategist", "Noble"],
                abilities: [
                    { 
                        name: "Tactical Genius", 
                        desc: "Can quickly assess battlefield situations and adapt" 
                    },
                    { 
                        name: "Inspiring Presence", 
                        desc: "Boosts morale of nearby allies" 
                    },
                    { 
                        name: "Perfect Form", 
                        desc: "His swordsmanship is technically flawless" 
                    }
                ],
                relationships: [
                    "The Crown: Absolute loyalty to the monarchy",
                    "Fellow Knights: Respected but sometimes envied",
                    "Common Soldiers: Fiercely protective of those under his command"
                ]
            },
            {
                id: 8,
                name: "Nicolas",
                occupation: "Soldier",
                race: "Human",
                personality: "Arrogant",
                image: "",
                fullImage: "",
                description: "One of the strongest humans, a general who rose through the ranks through sheer combat prowess. His arrogance is matched only by his battlefield accomplishments.",
                background: "Nicolas came from humble beginnings but distinguished himself in countless battles. His lack of noble blood prevents him from higher positions despite his abilities.",
                tags: ["Warrior", "Ambitious", "Controversial"],
                abilities: [
                    { 
                        name: "Battle Instinct", 
                        desc: "Uncanny ability to predict enemy movements" 
                    },
                    { 
                        name: "Iron Will", 
                        desc: "Can fight through injuries that would fell others" 
                    },
                    { 
                        name: "Shock Tactics", 
                        desc: "Specializes in unexpected, aggressive maneuvers" 
                    }
                ],
                relationships: [
                    "Nobility: Resentful of their privilege",
                    "Common Soldiers: Revered but sometimes feared",
                    "The Crown: Used for his skills but not fully trusted"
                ]
            }
        ];
        
        // DOM elements
        const characterGrid = document.querySelector('.character-grid');
        const modal = document.querySelector('.character-modal');
        const closeModal = document.querySelector('.close-modal');
        const modalImage = document.querySelector('.modal-image');
        const modalName = document.querySelector('.modal-name');
        const modalFaction = document.querySelector('.modal-faction');
        const modalDescription = document.querySelector('.modal-description');
        const modalBackground = document.querySelector('.modal-background');
        const modalAbilities = document.querySelector('.modal-abilities');
        const raceEl = document.querySelector('.race');
        const personalityEl = document.querySelector('.personality');
        const tagsContainer = document.querySelector('.tags-container');
        const relationshipsList = document.querySelector('.relationships-list');
        const raceFilter = document.getElementById('race-filter');
        const personalityFilter = document.getElementById('personality-filter');
        const resetFiltersBtn = document.getElementById('reset-filters');
        
        // Current filters
        let currentFilters = {
            race: 'all',
            personality: 'all'
        };
        
        // Display characters based on current filters
        function displayCharacters() {
            characterGrid.innerHTML = '';
            
            const filteredCharacters = characters.filter(character => {
                // Check race filter
                const raceMatch = currentFilters.race === 'all' || 
                                 (currentFilters.race === 'Hybrid' && character.race.includes('/')) ||
                                 character.race.includes(currentFilters.race);
                
                // Check personality filter
                const personalityMatch = currentFilters.personality === 'all' || 
                                       character.personality === currentFilters.personality;
                
                return raceMatch && personalityMatch;
            });
            
            if (filteredCharacters.length === 0) {
                characterGrid.innerHTML = '<p class="no-results">No characters match your filters</p>';
                return;
            }
            
            filteredCharacters.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.dataset.id = character.id;
                
                card.innerHTML = `
                    <img src="${character.image}" alt="${character.name}" class="character-image">
                    <div class="character-info">
                        <h3 class="character-name">${character.name}</h3>
                        <p class="character-faction">${character.occupation}</p>
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
            modalImage.src = character.fullImage || character.image;
            modalImage.alt = character.name;
            modalName.textContent = character.name;
            modalFaction.textContent = character.occupation;
            modalDescription.textContent = character.description;
            modalBackground.textContent = character.background;
            raceEl.textContent = character.race;
            personalityEl.textContent = character.personality;
            
            // Update tags
            tagsContainer.innerHTML = '';
            character.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });
            
            // Clear and update abilities
            modalAbilities.innerHTML = '';
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
            
            // Update relationships
            relationshipsList.innerHTML = '';
            character.relationships.forEach(relationship => {
                const li = document.createElement('li');
                li.textContent = relationship;
                relationshipsList.appendChild(li);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal
        function closeCharacterModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Update filters and display characters
        function updateFilters() {
            currentFilters.race = raceFilter.value;
            currentFilters.personality = personalityFilter.value;
            displayCharacters();
        }
        
        // Reset all filters
        function resetFilters() {
            raceFilter.value = 'all';
            personalityFilter.value = 'all';
            currentFilters.race = 'all';
            currentFilters.personality = 'all';
            displayCharacters();
        }
        
        // Event listeners
        raceFilter.addEventListener('change', updateFilters);
        personalityFilter.addEventListener('change', updateFilters);
        resetFiltersBtn.addEventListener('click', resetFilters);
        
        closeModal.addEventListener('click', closeCharacterModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCharacterModal();
        });
        
        // Initialize
        displayCharacters();