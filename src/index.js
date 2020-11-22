import "./style.css";

const offer = document.querySelector(".header__offer");
const mainTitle = document.querySelector(".main__title");
const detailsTitle = document.querySelector(".details__title");
const aboutTitle = document.querySelector(".about__title");
const infos = document.querySelectorAll(".details__item-info");
const aboutSubtitle = document.querySelector(".about__subtitle");
const offerDescription = document.querySelector(".about__offer-description");
const footer = document.querySelector(".footer__copyright");

const arrayToEnableTextSelection = [
  offer,
  mainTitle,
  detailsTitle,
  aboutSubtitle,
  aboutTitle,
  infos,
  offerDescription,
  footer,
];

window.addEventListener("load", () => {
  if (window.innerWidth > 768) {
    arrayToEnableTextSelection.forEach((el) => {
      el.classList.add("swiper-no-swiping");
    });
  }
});

const checkDomainForm = document.querySelector(".main__form");
const checkDomainButton = document.querySelector(".main__form-button");
const domainInfo = document.querySelector(".main__info");
const domainName = document.querySelector(".main__info-domain");
const createAccButton = document.querySelector(".create-link");
const validationInfo = document.querySelector(".main__validation");
const businessCardButton = document.querySelector(
  ".details__item_business-card"
);
const businessCardInfo = document.querySelector(
  ".details__item-info_business-card"
);
const dnsButton = document.querySelector(".details__item_dns");
const dnsInfo = document.querySelector(".details__item-info_dns");
const certificateButton = document.querySelector(".details__item_certificate");
const certificateInfo = document.querySelector(
  ".details__item-info_certificate"
);
const renewalButton = document.querySelector(".details__item_renewal");
const renewalInfo = document.querySelector(".details__item-info_renewal");
const cloudButton = document.querySelector(".details__item_cloud");
const cloudInfo = document.querySelector(".details__item-info_cloud");
const freesslButton = document.querySelector(".details__item_freessl");
const freesslInfo = document.querySelector(".details__item-info_freessl");
const dnssecButton = document.querySelector(".details__item_dnssec");
const dnssecInfo = document.querySelector(".details__item-info_dnssec");
const redirectButton = document.querySelector(".details__item_redirect");
const redirectlInfo = document.querySelector(".details__item-info_redirect");

function domainInfoShow() {
  domainInfo.style.display = "flex";
  createAccButton.style.margin = "30px auto 0";
}

function domainInfoHide() {
  domainInfo.style.display = "none";
}

function validationInfoShow() {
  validationInfo.style.display = "flex";
  createAccButton.style.margin = "30px auto 0";
}

function validationInfoHide() {
  validationInfo.style.display = "none";
}

checkDomainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = checkDomainForm.elements[0];
  if (input.validity.patternMismatch) {
    validationInfoShow();
    domainInfoHide();
  } else {
    if (window.innerWidth < 376) {
      domainName.textContent = "";
    } else {
      domainName.textContent = checkDomainForm.elements[0].value;
    }
    domainInfoShow();
    validationInfoHide();
  }
});

function validate() {
  const input = checkDomainButton.previousElementSibling;
  if (!input.checkValidity()) {
    validationInfoShow();
    domainInfoHide();
  }
}

checkDomainButton.addEventListener("click", () => {
  const input = checkDomainButton.previousElementSibling;
  if (!input.checkValidity()) {
    validationInfoShow();
    domainInfoHide();
  }
});

function infoShow(button, info) {
  button.addEventListener("mouseover", () => {
    info.classList.add("details__item-info_visible");
  });
}

function infoHide(button, info) {
  button.addEventListener("mouseleave", () => {
    info.classList.remove("details__item-info_visible");
  });
}

infoShow(businessCardButton, businessCardInfo);
infoShow(dnsButton, dnsInfo);
infoShow(certificateButton, certificateInfo);
infoShow(renewalButton, renewalInfo);
infoShow(cloudButton, cloudInfo);
infoShow(freesslButton, freesslInfo);
infoShow(dnssecButton, dnssecInfo);
infoShow(redirectButton, redirectlInfo);

infoHide(businessCardButton, businessCardInfo);
infoHide(dnsButton, dnsInfo);
infoHide(certificateButton, certificateInfo);
infoHide(renewalButton, renewalInfo);
infoHide(cloudButton, cloudInfo);
infoHide(freesslButton, freesslInfo);
infoHide(dnssecButton, dnssecInfo);
infoHide(redirectButton, redirectlInfo);

let swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper(".swiper-container-info", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
