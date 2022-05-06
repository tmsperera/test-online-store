const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default [
  {
    id: 1,
    title: "Product 1",
    href: "#",
    price: "39",
    oldPrice: "41",
    currency: "USD",
    currencySymbol: "$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: `https://picsum.photos/id/${randomNumber(1, 100)}/200/300`,
    imageAlt: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
    href: "#",
    price: "49",
    oldPrice: "51",
    currency: "USD",
    currencySymbol: "$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: `https://picsum.photos/id/${randomNumber(1, 300)}/200/300`,
    imageAlt: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
    href: "#",
    price: "59",
    oldPrice: "61",
    currency: "USD",
    currencySymbol: "$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: `https://picsum.photos/id/${randomNumber(1, 300)}/200/300`,
    imageAlt: "Product 3",
  },
  {
    id: 4,
    title: "Product 4",
    href: "#",
    price: "69",
    oldPrice: "71",
    currency: "USD",
    currencySymbol: "$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: "Black",
    imageSrc: `https://picsum.photos/id/${randomNumber(1, 300)}/200/300`,
    imageAlt: "Product 4",
  },
  {
    id: 5,
    title: "Product 5",
    href: "#",
    price: "79",
    oldPrice: "81",
    currency: "USD",
    currencySymbol: "$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: "Black",
    imageSrc: `https://picsum.photos/id/${randomNumber(1, 300)}/200/300`,
    imageAlt: "Product 5",
  },
  {
    id: 6,
    title: "Product 6",
    href: "#",
    price: "89",
    oldPrice: "91",
    currency: "USD",
    currencySymbol: "$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: "Black",
    imageSrc: `https://picsum.photos/id/${randomNumber(1, 300)}/200/300`,
    imageAlt: "Product 6",
  },
];
