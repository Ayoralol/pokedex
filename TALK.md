## My recreated pokedex / pokeSearch using PokeAPI

- Generates random 28 pokemon out of all pokemon on load

  - does this by generating 28 random numbers from 1-1025
  - puts those numbers into an array which is the format for pulling the pokemon data

- generate random team

  - just generates a random 6 pokemon for team inspiration

- Search function

  - pulls the list of 1025 pokemon and stores as variable on load
  - compares to this list on search and returns up to 28 results

- Type Search Function
  - Similar to search
  - pulls all type info on load
  - stores in an array of arrays, each array containing the number of the pokemon with that type
  - on single search it displays the first 28 pokemon of that type
  - on double search it compares the numbers of type 1 to type 2 and returns only matching numbers

### Information

- clicking on a pokemon brings up its information
- General Information is nothing much important
- detailed is more useful for training/fighting/pokemon usage
- evolution displays the whole evolution tree for that pokemon
- moves contains all learnable moves for that pokemon
- encounter holds all encounter information for catching that pokemon, can include one-time, gifts, walking, NOT evolutions
