const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardContainer = document.querySelector(".row-gap-5");
let listElementi = "";


for (let i = 0; i < teamMembers.length; i++) {
  const { name, role, email, img } = teamMembers[i];
  // console.log(name, role, email, img)
  listElementi += `
  <div class="ms-card">
                <div class="col-4">
                    <img class="ms-img" src="./assets/${img}" alt="">
                </div>
                <div class="p-2">
                    <h2>${name}</h2>
                    <h4>${role}</h4>
                    <p>${email}</p>
                </div>
            </div>`
}

console.log(listElementi);

cardContainer.innerHTML = listElementi;