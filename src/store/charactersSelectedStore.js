import { create } from "zustand";
import { persist } from "zustand/middleware";

export const charactersSelectedStore = create(
  persist(
    (set) => ({
      personList: [],
      appPerson: (newPerson) =>
        set((state) => {
          // Check if the person with the same id already exists
          if (state.personList.some((person) => person.id === newPerson.id)) {
            return { personList: state.personList };
          }
          // Add the new person to the beginning of the list
          return {
            personList: [newPerson, ...state.personList],
          };
        }),
      removePersonById: (id) =>
        set((state) => ({
          personList: state.personList.filter((person) => person.id !== id),
        })),
    }),
    {
      name: "selected-people-storage",
    }
  )
);
