import { charactersSelectedStore } from "../store/charactersSelectedStore";
import RemoveIcon from "./icons/RemoveIcon";

const PersonListItem = ({ person }) => {
  const { removePersonById } = charactersSelectedStore();

  return (
    <li className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-4 flex items-center space-x-4 mb-4">
      <img
        src={person?.image}
        alt="Avatar"
        className="h-10 w-10 rounded-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
      />
      <span className="flex-1">
        {person?.name} ({person.species})
      </span>
      <button
        aria-label="remove character"
        onClick={() => removePersonById(person.id)}
        className="text-red-500 transform transition duration-300 ease-in-out hover:rotate-90"
      >
        <RemoveIcon />
      </button>
    </li>
  );
};

export default PersonListItem;
