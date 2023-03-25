// Карточки
const cardArray = [
  {
    id: 1,
    title: "Han",
    description: "Hello world!",
    descriptionSecond: "Что написать???",
    img: "images/photoFirst.jpeg",
  },
  {
    id: 2,
    title: "Han",
    description: "Hello world!",
    descriptionSecond: "Что написать???",
    img: "images/photoSecond.jpeg",
  },
  {
    id: 3,
    title: "Han",
    description: "Hello world!",
    descriptionSecond: "Что написать???",
    img: "images/photoThree.jpeg",
  },
  {
    id: 4,
    title: "Han",
    description: "Hello world!",
    descriptionSecond: "Что написать???",
    img: "images/photoFour.jpeg",
  },
  {
    id: 5,
    title: "Han",
    description: "Hello world!",
    descriptionSecond: "Что написать???",
    img: "images/photoFive.jpeg",
  },
  {
    id: 6,
    title: "Han",
    description: "Hello world!",
    descriptionSecond: "Что написать???",
    img: "images/photoSix.jpeg",
  },
];

const mainCard = document.getElementById("row");

cardArray.map((item) => {
  return (mainCard.innerHTML += `
    <div class="col-lg-4 col-md-4 col-sm-12 projectItemCardWrapper">
    <a href="/project/10"> </a>
    <div class="projectItemCard">
      <a href="/project/10">
        <figure style="overflow: hidden">
          <figure
            class="projectItemCardImage qwerty"
            style="background-image: url(${item.img})"
          ></figure>
        </figure>

        <figure class="projectItemCardImageOverlay"></figure>
        <span class="projectTitle">${item.title}</span>
        <span class="projectStreet">
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7L-3.0598e-07 0L7 -3.0598e-07L3.5 3.5L0 7Z"
              fill="black"
            />
          </svg>
          <span style="margin-left: 8px"
            >${item.description}</span
          >
        </span>
      </a>
      <div
        class="d-flex"
        style="justify-content: space-between; align-items: center"
      >
        <a href="/project/10">
          <span class="projectState">${item.descriptionSecond}</span>
          <span> </span></a
        ><a href="/project/10">
          <svg
            width="50"
            height="8"
            viewBox="0 0 50 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.3536 4.35355C49.5488 4.15829 49.5488 3.8417 49.3536 3.64644L46.1716 0.464462C45.9763 0.2692 45.6597 0.2692 45.4645 0.464462C45.2692 0.659724 45.2692 0.976307 45.4645 1.17157L48.2929 4L45.4645 6.82842C45.2692 7.02369 45.2692 7.34027 45.4645 7.53553C45.6597 7.73079 45.9763 7.73079 46.1716 7.53553L49.3536 4.35355ZM4.37114e-08 4.5L49 4.5L49 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
              fill="#132033"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>`);
});

// Слайдер
const slideArray = [
  {
    id: 1,
    img: "images/photoTwelve.jpeg",
  },
  {
    id: 2,
    img: "images/photoThirteen.jpeg",
  },
  {
    id: 3,
    img: "images/photoFourteen.jpeg",
  },
  {
    id: 4,
    img: "images/photoFifteen.jpeg",
  },
  {
    id: 5,
    img: "images/photoSeven.jpeg",
  },
  {
    id: 6,
    img: "images/photoEight.jpeg",
  },
  {
    id: 7,
    img: "images/photoNine.jpeg",
  },
  {
    id: 8,
    img: "images/photoTen.jpeg",
  },
  {
    id: 9,
    img: "images/photoEleven.jpeg",
  }
];

const mainSlide = document.getElementById("splide__list");
console.log(mainSlide);

slideArray.map((item) => {
  return (mainSlide.innerHTML += `
  <li
  class="splide__slide d-flex align-items-center"
  style="
    background-image: url(${item.img});
    width: 100%;
    background-size: cover;
    background-position: center;
  "
></li> `);
});
