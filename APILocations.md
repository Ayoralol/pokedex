# Pokedex

### v2/pokemon/{id}

- Abilities - .abilities[0/1/2].ability .slot (slot 3 is hidden)

- Moves - .moves[0-end].move

- Number - {id}

- Height - .height

- Weight - .weight

- Name - .name (Displays actual name NOT a variant)

- Types - .type[0/1].type.name

- Base Stats - .stats[0-5].base_stat (Stat order is HP, Attack,
  Defense, Special-Attack, Special-Defence, Speed)

- Sprite + Shiny Sprite - "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/{id}.png"

### v2/pokemon/{id}/encounters

- Encounter Areas

  - [0-end].version_details.version.name (Game Name eg. Pearl)

  - [0-end].location_area.name (Location Name - replace "-" => " " and remove last 4 characters if they are "area")

  - [0-end].version_details.encounter_details.method.name (method of catching eg. "walk", "gift")

### v2/pokemon-species/{id}

- Egg Groups .egg_groups[0/1].name

  - (monster, plant = grass, dragon, water1, water2, water3, indeterminate = amorphous, mineral, humanshape = human-like, fairy, ground = field, flying, bug)

- Generation - .generation.name = "generation-[i]" (use switch case to assign something like "Gen 1 - Kanto")

- Habitat - .habitat.name

- Flavour Text - .flavor_text_entries[0-end].flavor_text - random gen this with Math.rand(max - length) if (.flavor_text_entries.language.name = "en") display;

- Catch Rate - .capture_rate

- Gender - .gender_rate = Chance of being female in 12.5% increments, 0 is always male, 8 is always female, -1 is genderless
- evo chain URL

### v2/evolution-chain/{chainid}

- Evolution Chain

  - .chain.species.name - lowest pokemon evolution

  - .chain.evolves_to[0].species.name - second pokemon evolution

    - .chain.evolves_to[0].evolution_details - evolution parameters
    - .chain.evolves_to[0].evolution_details.trigger.name - "level-up", "trade", etc.

  - .chain.evolves_to[0].evolves_to[0].species.name - second pokemon evolution
    - .chain.evolves_to[0].evolves_to[0].evolution_details - evolution parameters
    - .chain.evolves_to[0].evolves_to[0].evolution_details.trigger.name - "level-up", "trade", etc.

- EVOLVES_TO IS AN ARRAY OF OBJECTS NOT MULTIPLE ARRAYS

- EEVEE needs special parameters as it has 7 eeveelutions

## LOOK AT POKEMONTCG API TO LINK POKEMON CARDS TOO
