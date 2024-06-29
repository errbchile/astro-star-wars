import { charactersSelectedStore } from "../store/charactersSelectedStore";

export default function CharacterCard({ character }) {
  const { appPerson } = charactersSelectedStore();

  const handleClick = () => {
    appPerson({ ...character });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex-shrink-0 w-60 shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-800 text-black dark:text-white"
    >
      <img
        src={character?.image}
        alt={character?.name}
        className="w-full h-40 object-cover transform transition duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{character?.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">{character?.species}</p>
      </div>
    </div>
  );
}
