import { useAutoAnimate } from "@formkit/auto-animate/react";
import PersonListItem from "./PersonListItem";
import { charactersSelectedStore } from "../store/charactersSelectedStore";

export default function PersonList({ person }) {
  const { personList } = charactersSelectedStore();
  const [animationParent] = useAutoAnimate();

  return (
    <>
      <h2 className={`text-center mb-2`}>Characters selected:</h2>
      <ul className={`divide-y`} ref={animationParent}>
        {personList.map((person) => (
          <PersonListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}
