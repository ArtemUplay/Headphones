const headphones = [
  {
    img: './images/Apple BYZ S852I.png',
    title: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
    isWireless: false,
  },
  {
    img: './images/Apple EarPods.png',
    title: 'Apple EarPods',
    price: 2327,
    oldPrice: null,
    rate: 4.5,
    isWireless: false,
  },
  {
    img: './images/Apple EarPods(packed).png',
    title: 'Apple EarPods',
    price: 2327,
    oldPrice: null,
    rate: 4.5,
    isWireless: false,
  },
  {
    img: './images/Apple BYZ S852I.png',
    title: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: null,
    rate: 4.7,
    isWireless: false,
  },
  {
    img: './images/Apple EarPods.png',
    title: 'Apple EarPods',
    price: 2327,
    oldPrice: null,
    rate: 4.5,
    isWireless: false,
  },
  {
    img: './images/Apple EarPods(packed).png',
    title: 'Apple EarPods',
    price: 2327,
    oldPrice: null,
    rate: 4.5,
    isWireless: false,
  },
  {
    img: './images/Apple AirPods.png',
    title: 'Apple EarPods',
    price: 9527,
    oldPrice: null,
    rate: 4.7,
    isWireless: true,
  },
  {
    img: './images/GERLAX GH-04.png',
    title: 'GERLAX GH-04',
    price: 6527,
    oldPrice: null,
    rate: 4.7,
    isWireless: true,
  },
  {
    img: './images/BOROFONE BO4.png',
    title: 'BOROFONE BO4',
    price: 7527,
    oldPrice: null,
    rate: 4.7,
    isWireless: true,
  },
];

const cardTemplate = document.querySelector('#card-template').content;
const headphonesList = document.querySelector('.headphones__list');
const wirelessHeadphonesList = document.querySelector('.wireless-headphones__list');

function createCard(img, title, price, oldPrice, rate) {
  const cardElement = cardTemplate.querySelector('.headphones__item').cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image');
  const cardName = cardElement.querySelector('.card__name');
  const cardPrice = cardElement.querySelector('.card__price');
  const cardOldPrice = cardElement.querySelector('.card__old-price');
  const cardRate = cardElement.querySelector('.card__rate');

  cardImage.src = img;
  cardImage.alt = title;
  cardName.textContent = title;
  cardPrice.textContent = price + ' ₽';

  if (oldPrice) {
    cardOldPrice.textContent = oldPrice + ' ₽';
  }

  cardRate.textContent = rate;

  return cardElement;
}

headphones.forEach(({ img, title, price, oldPrice, rate, isWireless }) => {

  if (!isWireless) {
    headphonesList.append(createCard(img, title, price, oldPrice, rate));
  } else {
    wirelessHeadphonesList.append(createCard(img, title, price, oldPrice, rate))
  }
})