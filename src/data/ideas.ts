export interface Idea {
  title: string;
  description: string;
  author: string;
  avatar: string;
}

export const ideas: Idea[] = [
  {
    title: "Decentralized Energy Grid",
    description:
      "A blockchain-based system for peer-to-peer energy trading in smart cities.",
    author: "Alice Johnson",
    avatar: "/avatars/alice.jpg",
  },
  {
    title: "AI-Powered Crop Optimization",
    description:
      "Machine learning algorithms to maximize crop yields and minimize resource usage.",
    author: "Bob Smith",
    avatar: "/avatars/bob.jpg",
  },
  {
    title: "Space Debris Cleanup DAO",
    description:
      "A decentralized autonomous organization funding and managing space debris removal.",
    author: "Charlie Brown",
    avatar: "/avatars/charlie.jpg",
  },
];
