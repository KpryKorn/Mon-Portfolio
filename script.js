const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((letter) => {
    const span = document.createElement("span");

    span.className = "letter";

    span.innerText = letter;

    element.appendChild(span);
  });
};

enhance("javascript");
enhance("prenom");
enhance("nom");
enhance("dev");
enhance("junior");
enhance("apprenti");
enhance("&");

function filterSelection(category) {
  var projects, i;
  projects = document.getElementsByClassName("project");
  if (category == "tout") category = "";
  for (i = 0; i < projects.length; i++) {
    removeClass(projects[i], "show");
    if (projects[i].className.indexOf(category) > -1)
      addClass(projects[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Sélectionner tous les boutons de filtre
var filterButtons = document.querySelectorAll(".filter-button");

// Ajouter un gestionnaire d'événements à chaque bouton de filtre
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    // Supprimer la classe "active" de tous les boutons de filtre
    for (var j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    // Ajouter la classe "active" au bouton de filtre cliqué
    this.classList.add("active");
    // Filtrer les projets en fonction du bouton de filtre cliqué
    var category = this.getAttribute("data-filter");
    filterSelection(category);
  });
}

// ROUGH NOTATION

import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

const a1 = annotate(document.querySelector("#e1"), {
  type: "box",
  color: "var(--clr-accent-600",
});
const a2 = annotate(document.querySelector("#e2"), {
  type: "underline",
  color: "var(--clr-accent-600",
});
const a3 = annotate(document.querySelector("#e3"), {
  type: "highlight",
  color: "var(--clr-accent-600",
});
const a4 = annotate(document.querySelector("#e4"), {
  type: "box",
  color: "var(--clr-neutral-100",
});

const ag = annotationGroup([a1, a2, a3, a4]);
ag.show();

// Obtenez tous les liens internes de la page
const links = document.querySelectorAll('a[href^="#"]');

// Ajoutez un gestionnaire d'événements à chaque lien
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Empêchez le comportement par défaut de l'ancre interne
    e.preventDefault();

    // Obtenez l'ID de la section cible
    const targetId = link.getAttribute("href").substring(1);

    // Modifier l'URL sans ajouter l'ID de la section
    history.pushState(null, null, window.location.pathname);

    // Faites défiler la page jusqu'à la section cible
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// SCROLL TO TOP

const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

// Ajoutez un gestionnaire d'événements pour le clic du bouton
scrollToTopBtn.addEventListener("click", () => {
  // Faites défiler la page jusqu'au haut avec une animation fluide
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Afficher / masquer le bouton en fonction de la position de la page
window.addEventListener("scroll", () => {
  // Obtenez la position verticale actuelle de la page
  const y = window.scrollY;

  // Afficher le bouton lorsque la position verticale est supérieure à la moitié de la hauteur de la fenêtre
  if (y > window.innerHeight / 2) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// MENU BURGER

const hamburger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");
const heroScreen = document.querySelector(".hero__screen");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    heroScreen.classList.add("hidden");
  } else {
    heroScreen.classList.remove("hidden");
  }
});

document.querySelectorAll(".nav-links a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);
