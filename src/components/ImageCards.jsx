import { useCharactersList } from "../fetch/characters";
import CharacterCard from "./CharacterCard";

const ImageCards = () => {
  const { data, isPending, isError, error } = useCharactersList();

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 px-8">
      {isPending && <span>Loading...</span>}

      {isError && <span>Error: {error.message}</span>}

      {!!data?.length &&
        data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  );
};

export default ImageCards;
