import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher = "") => {
  const validPublishers = ["Marvel Comics", "DC Comics"];
  if (!validPublishers.includes(publisher))
    throw new Error("Not valid publisher");

  return heroes.filter((x) => x.publisher === publisher);
};
