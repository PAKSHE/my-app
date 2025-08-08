export const accounts = [
  {
    id: "1",
    game: "Valorant",
    description: "Radiant rank account with premium skins",
    price: 150,
  },
  {
    id: "2",
    game: "Genshin Impact",
    description: "AR 55 with rare five-star characters",
    price: 200,
  },
  {
    id: "3",
    game: "Mobile Legends",
    description: "Mythic glory account, all heroes unlocked",
    price: 120,
  },
];

export function getAccount(id) {
  return accounts.find((acc) => acc.id === id);
}
