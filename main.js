const navbarItems = [
  {
    type: "logo",
    img: "./assets/logo.png",
  },
  {
    type: "navigation",
    title: "solutions",
  },
  {
    type: "navigation",
    title: "products",
  },
  {
    type: "navigation",
    title: "shop",
  },
  {
    type: "navigation",
    title: "academy",
  },
  {
    type: "navigation",
    title: "services",
  },
  {
    type: "navigation",
    title: "company",
  },
];

window.header_state = false;

function navbar() {
  const element = document.getElementById("list-container");

  if (navbarItems.length < 1) return;

  const div = document.createElement("div");
  div.className = "navigations";

  navbarItems.map((item, index) => {
    const listItem = document.createElement("li");
    if (item.type === "logo") {
      const img = document.createElement("img");
      const link = document.createElement("a");
      link.textContent = item.title;
      link.href = "#";
      img.src = item.img;
      img.alt = item.alt || "Company Logo";
      link.appendChild(img);
      listItem.appendChild(link);
      element.appendChild(listItem);
    } else if (item.type === "navigation") {
      const link = document.createElement("a");
      link.textContent = item.title;
      listItem.className = "navigation-item";

      listItem.appendChild(link);
      div.appendChild(listItem);

      listItem.addEventListener("click", () => {
        setItemActive(listItem);
        window.header_state = true;
        eventsLogicHandler();
      });
    }
  });
  element.appendChild(div);
}

function setItemActive(item) {
  const navigationItesm = document.querySelectorAll(".navigation-item");
  navigationItesm.forEach((t) => t.classList.remove("active"));
  item.classList.add("active");
}

// Footer

const mainNavigations = [
  { title: "Sales Rep Finder" },
  { title: "Device Registration" },
  { title: "Software Updates" },
  { title: "Download Center" },
  { title: "Government Contracts" },
  { title: "Delivery and Returns Policy" },
  { title: "Partner Agreements" },
  { title: "FAQ" },
];

const secNavigations = [
  { title: "Suppliers" },
  { title: "Privacy" },
  { title: "Imprint" },
  { title: "Cookies" },
  { title: "Agent Login" },
  { title: "Sitemap" },
  { title: "Terms & Conditions" },
  { title: "Contact Us" },
];

function footer() {
  const mainElement = document.getElementById("footer-navigations-main");
  const secElement = document.getElementById("footer-navigations-sec");

  mainNavigations.map((item) => {
    // Create Elements
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    // Add attributes and content
    listItem.className = "main-navigation-item";
    link.textContent = item.title;

    listItem.appendChild(link);
    mainElement.appendChild(listItem);
  });

  secNavigations.map((item) => {
    // Create Elements
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    // Add attributes and content
    listItem.className = "sec-navigation-item";
    link.textContent = item.title;

    listItem.appendChild(link);
    secElement.appendChild(listItem);
  });
}

function eventsLogicHandler() {
  if (window.header_state) {
    document.querySelector(".header-items-pop-up").style.opacity = 1;
    document.querySelector(".header-items-pop-up").style.visibility = "visible";
  } else {
    document.querySelector(".header-items-pop-up").style.opacity = 0;
    document.querySelector(".header-items-pop-up").style.opacity = "hidden";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  navbar();
  footer();
  //   eventsLogicHandler();

  const headerSearch = document.getElementById("header-search");

  document.body.addEventListener("click", (event) => {
    if (event.target.matches("#header-search")) {
      headerSearch.classList.add("active");
    } else {
      headerSearch.classList.remove("active");
      headerSearch.value = "";
    }
    if (event.target.matches("#close-popup-btn")) {
      window.header_state = false;
      eventsLogicHandler();
    }
  });
});
