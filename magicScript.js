// Spell data
        const spells = [
            {
                id: 1,
                name: "Fire ball",
                element: "Fire",
                image: "Versaria.library/images/M8M0CVUHOHAHZ.info/ac1c0b52fec210c33bedadc7d682afd1.jpg",
                fullImage: "Versaria.library/images/M8M0CVUHOHAHZ.info/ac1c0b52fec210c33bedadc7d682afd1.jpg",
                description: "Summons balls of fire that fire at a target.",
                tags: ["Damage"],
                manaCost: 120,
                castTime: "2.5s",
                range: "30m",
                cooldown: "20s",
                effects: [
                    { name: "Burning", desc: "Applies burning for 15 seconds, dealing 50 damage per second" },
                    { name: "Knockback", desc: "Small knockback effect on all targets" }
                ]
            },
            {
                id: 2,
                name: "Riptide",
                element: "Water",
                image: "Versaria.library/images/M8M0CVUJJPY98.info/d36fd2556b0c1ce564767fc662f832c6.jpg",
                fullImage: "Versaria.library/images/M8M0CVUJJPY98.info/d36fd2556b0c1ce564767fc662f832c6.jpg",
                description: "Summons a vortex of water.",
                tags: ["Damage", "Utility"],
                manaCost: 100,
                castTime: "1.8s",
                range: "25m",
                cooldown: "15s",
                effects: [
                    { name: "Wave Damage", desc: "Deals 200-250 water damage in a cone" },
                    { name: "Pushback", desc: "Pushes enemies back 10m" },
                    { name: "Wet Status", desc: "Applies Wet status for 10 seconds" }
                ]
            },
            {
                id: 3,
                name: "Sand wall",
                element: "Earth",
                image: "Versaria.library/images/M6Z4AINGSELPO.info/Sand wall.png",
                fullImage: "Versaria.library/images/M6Z4AINGSELPO.info/Sand wall.png",
                description: "Creates a wall made of sand that blocks enemy movement and projectiles then crashes down dealing damage. The wall can be destroyed with enough damage.",
                tags: ["Defense", "Damage"],
                manaCost: 80,
                castTime: "Instant",
                range: "15m",
                cooldown: "25s",
                effects: [
                    { name: "Wall Creation", desc: "Creates a 5m wide, 3m tall sand wall" },
                    { name: "Health", desc: "Wall has 1000 HP" },
                    { name: "Duration", desc: "Wall lasts 30 seconds before crashing down" }
                ]
            },
            {
                id: 4,
                name: "Gale wind",
                element: "Wind",
                image: "Versaria.library/images/MBHSL4XUXJR8V.info/FEPR_Soren_Wind_Magic.png",
                fullImage: "Versaria.library/images/MBHSL4XUXJR8V.info/FEPR_Soren_Wind_Magic.png",
                description: "Releases a powerful gust of wind in a straight line, damaging enemies and potentially knocking them down.",
                tags: ["Damage", "CC"],
                manaCost: 90,
                castTime: "1.2s",
                range: "35m",
                cooldown: "12s",
                effects: [
                    { name: "Wind Damage", desc: "Deals 150-200 wind damage" },
                    { name: "Knockdown", desc: "30% chance to knock down enemies" },
                    { name: "Projectile Deflection", desc: "Deflects incoming projectiles during cast" }
                ]
            },
            {
                id: 5,
                name: "Explosion",
                element: "Fire",
                image: "Versaria.library/images/M6Z4AINGQSWQ4.info/Explosion.png",
                fullImage: "Versaria.library/images/M6Z4AINGQSWQ4.info/Explosion.png",
                description: "A powerful fire spell that creates a massive explosion at the target location, dealing heavy fire damage to all enemies in the area.",
                tags: ["Damage", "AoE"],
                manaCost: 120,
                castTime: "2.5s",
                range: "30m",
                cooldown: "20s",
                effects: [
                    { name: "Explosion", desc: "Deals 300-400 fire damage to all targets in 8m radius" },
                    { name: "Burning", desc: "Applies burning for 15 seconds, dealing 50 damage per second" },
                    { name: "Knockback", desc: "Small knockback effect on all targets" }
                ]
            },
            {
                id: 6,
                name: "Level boost",
                element: "Chi",
                image: "Versaria.library/images/M66C2LK2VOLXX.info/Level boost.jpg",
                fullImage: "Versaria.library/images/M66C2LK2VOLXX.info/Level boost.jpg",
                description: "Increases all stats of the user.",
                tags: ["Buff"],
                manaCost: 120,
                castTime: "2.5s",
                range: "30m",
                cooldown: "20s",
                effects: [
                    { name: "Health", desc: "Increases health" },
                    { name: "Defence", desc: "Increases defence" },
                    { name: "Damage", desc: "Increases attack damage" }
                ]
            },
            {
                id: 7,
                name: "Armourment",
                element: "Chi",
                image: "Versaria.library/images/M66C2LK2VOLXX.info/Armourment.jpg",
                fullImage: "Versaria.library/images/M66C2LK2VOLXX.info/Armourment.jpg",
                description: "Switch between armor sets, each containing an outfit/armor with weapons.",
                tags: ["Utility", "Equipment"],
                manaCost: 80,
                castTime: "Instant",
                range: "Self",
                cooldown: "5s",
                effects: [
                    { name: "Equipment Switch", desc: "Changes to a different armor/weapon set" },
                    { name: "Dual Wield", desc: "Can equip two weapons if set supports it" },
                    { name: "Stat Adjustment", desc: "Stats adjust based on equipped set" }
                ]
            },
            {
                id: 7,
                name: "Air barrier",
                element: "Wind",
                image: "",
                fullImage: "",
                description: "",
                tags: ["Defence", "Utility"],
                manaCost: 80,
                castTime: "Instant",
                range: "Self",
                cooldown: "5s",
                effects: [
                    { name: "", desc: "" },
                    { name: "", desc: "" },
                    { name: "", desc: "" }
                ]
            },
        ];

        // DOM elements
        const spellsGrid = document.querySelector('.spells-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const modal = document.querySelector('.spell-modal');
        const closeModal = document.querySelector('.close-modal');
        const modalImage = document.querySelector('.modal-image');
        const modalName = document.querySelector('.modal-name');
        const modalElement = document.querySelector('.modal-element');
        const modalDescription = document.querySelector('.modal-description');
        const modalDetails = document.querySelector('.modal-details');
        const modalEffects = document.querySelector('.modal-effects');
        
        // Display spells
        function displaySpells(filter = 'all') {
            spellsGrid.innerHTML = '';
            
            const filteredSpells = filter === 'all' 
                ? spells 
                : spells.filter(spell => spell.element.toLowerCase().includes(filter));
            
            filteredSpells.forEach(spell => {
                const card = document.createElement('div');
                card.className = 'spell-card';
                card.dataset.id = spell.id;
                
                card.innerHTML = `
                    <img src="${spell.image}" alt="${spell.name}" class="spell-image">
                    <div class="spell-info">
                        <h3 class="spell-name">${spell.name}</h3>
                        <p class="spell-element">${spell.element}</p>
                        <div class="spell-tags">
                            ${spell.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => openSpellModal(spell));
                spellsGrid.appendChild(card);
            });
        }
        
        // Open spell modal
        function openSpellModal(spell) {
            modalImage.src = spell.fullImage;
            modalImage.alt = spell.name;
            modalName.textContent = spell.name;
            modalElement.textContent = spell.element;
            modalDescription.textContent = spell.description;
            
            // Update details
            modalDetails.innerHTML = `
                <div class="detail">
                    <span class="detail-label">Mana Cost:</span>
                    <span class="detail-value">${spell.manaCost}</span>
                </div>
                <div class="detail">
                    <span class="detail-label">Cast Time:</span>
                    <span class="detail-value">${spell.castTime}</span>
                </div>
                <div class="detail">
                    <span class="detail-label">Range:</span>
                    <span class="detail-value">${spell.range}</span>
                </div>
                <div class="detail">
                    <span class="detail-label">Cooldown:</span>
                    <span class="detail-value">${spell.cooldown}</span>
                </div>
            `;
            
            // Clear existing effects
            while (modalEffects.children.length > 1) {
                modalEffects.removeChild(modalEffects.lastChild);
            }
            
            // Add new effects
            spell.effects.forEach(effect => {
                const effectDiv = document.createElement('div');
                effectDiv.className = 'effect';
                effectDiv.innerHTML = `
                    <div class="effect-name">${effect.name}</div>
                    <div class="effect-desc">${effect.desc}</div>
                `;
                modalEffects.appendChild(effectDiv);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal
        function closeSpellModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Event listeners
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                displaySpells(button.dataset.filter);
            });
        });
        
        closeModal.addEventListener('click', closeSpellModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeSpellModal();
        });
        
        // Initialize
        displaySpells();