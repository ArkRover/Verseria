
        // Character data
        const characters = [
            {
                id: 1,
                name: "Harpy",
                faction: "Human",
                image: "Versaria.library/images/M8Z0178E740KY.info/e4478e7cfb32d357aacb118f652727f1.jpg",
                fullImage: "Versaria.library/images/M8Z0178E740KY.info/e4478e7cfb32d357aacb118f652727f1.jpg",
                description: "A humanoid bird normally found in big forests. It is brightly coloured with giant wings used to fly at high speeds.",
                tags: ["Speed", "Damage"],
                abilities: [
                    { name: "Falcon punch", desc: "The harpy dives moving at a high speed and balls up its fish to strike the target at this incredible speed." },
                    { name: "Wing drill", desc: "The harpy covers itself with its wings while flying making a drill shape to strike the target, this also protects the body from fire since the wings are resistant to fire." },
                    { name: "Wing bash", desc: "The harpy bashes the target with its wings." }
                ]
            },
            {
                id: 2,
                name: "Jorogumo",
                faction: "Aracnid",
                image: "Versaria.library/images/M81T2X1ORYVRS.info/WhatsApp Image 2025-03-09 at 17.45.44_1c5037fc.jpg",
                fullImage: "Versaria.library/images/M81T2X1ORYVRS.info/WhatsApp Image 2025-03-09 at 17.45.44_1c5037fc.jpg",
                description: "",
                tags: ["Defence", "Damage"],
                abilities: [
                    { name: "", desc: "" },
                    { name: "", desc: "" },
                    { name: "", desc: "" }
                ]
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
        const modalAbilities = document.querySelector('.modal-abilities');
        
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
        
        // Open character modal
        function openCharacterModal(character) {
            modalImage.src = character.fullImage;
            modalImage.alt = character.name;
            modalName.textContent = character.name;
            modalFaction.textContent = character.faction;
            modalDescription.textContent = character.description;
            
            // Clear existing abilities
            while (modalAbilities.children.length > 1) {
                modalAbilities.removeChild(modalAbilities.lastChild);
            }
            
            // Add new abilities
            character.abilities.forEach(ability => {
                const abilityDiv = document.createElement('div');
                abilityDiv.className = 'ability';
                abilityDiv.innerHTML = `
                    <div class="ability-name">${ability.name}</div>
                    <div class="ability-desc">${ability.desc}</div>
                `;
                modalAbilities.appendChild(abilityDiv);
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