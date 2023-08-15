
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 300,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
    afterLoad: function (origin, destination, direction) {
      var loadedSection = this;

      
    },
  });
});


// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

let technology = {
  1: "JavaScript",
  2: "TypeScript",
  3: "Express.js",
  4: "Node.js",
  5: "ReactJs",
  6: "MongoDB",
  7: "PostgreSQL",
  8: "HTML",
  9: "CSS",
  10: "SASS/SCSS",
  11: "Telegram bot api",
};

let projects = [
  {
    name: "Gardener",
    about:
      "I created a dynamic gardener website with user authentication, registration, user search, profile picture setting and other essential features.The technologies used for this project include Express.js for the backend and MongoDB for data storage.",
    link: "https://github.com/UbaydullayevMirolim/Gardener",
    tech: [1, 3, 4, 6,],
  },
  {
    name: "Yandex-eats",
    about:
      "I developed the backend for a yandex eats website using Express.js and PostgreSQL,allowing users to add, categorize, and manage their own foods, along with ratings and couries",
    link: "https://github.com/UbaydullayevMirolim/yandexeats",
    tech: [2, 3, 4, 7],
  },
  {
    name: "Blog site",
    about:
      "The Bot is a user-friendly Telegram bot that simplifies the process of finding work and workers in the IT industry.",
    link: "https://github.com/UbaydullayevMirolim/blog-site-in-nestjs",
    tech: [1, 3, 4, 7],
  },
  {
    name: "Namoz vaqtlari",
    about:
      "This project utilizes a real-time API to display accurate and up-to-date daily and weekly prayer times for Uzbekistan's regions.",
    link: "https://taupe-hummingbird-8cddfb.netlify.app/",
    realLink: "https://github.com/UbaydullayevMirolim/namoz-vaqtlari",
    tech: [1, 8, 9, 10],
  },
  {
    name: "book Todos",
    about:
      "Discover a user-friendly site with captivating animations, offering an immersive and engaging learning experience.",
    link: "https://github.com/UbaydullayevMirolim/book-Todos",
    tech: [1, 8, 9, 10],
  },

];

projects.forEach((e) => {
  let card = document.createElement("div");
  card.classList.add("project");
  card.innerHTML = `
					<h2>${e.name}</h2>
					<p>${e.about}</p>
					<div class="btn-wrapper">
          ${e.tech.map((e) => `<button>${technology[e]}</button>`)}
          
					</div>
          <div class="flex">
					<a target="_blank" href="${e.link}"><i class="fa-brands fa-github"></i> Code</a>
          ${
            e.realLink
              ? `<a target="_blank" href="${e.realLink}"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open</a>`
              : ""
          }
          </div>
          `;

  document.querySelector(".project-wrapper").appendChild(card);
});


document.querySelector("#contactForm").addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(
    `https://api.telegram.org/bot6312263274:AAGQ6PKm-YflSDjEbcz48fl9pbyNozeGUGY/sendMessage?chat_id=1939087676&text=Name: ${e.target[0].value}, Email: ${e.target[1].value}, Message: ${e.target[2].value} `
  );
  e.target[0].value=''
  e.target[1].value=''
  e.target[2].value=''

})