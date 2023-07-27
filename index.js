let seasonSmallImageEl = document.getElementById("seasonSmallImage");
let seasonMediumImageEl = document.getElementById("seasonMediumImage");

let springsmallimage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springmediumimage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summersmaillimage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summermediumimage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let sutumnsmallimage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let sutumnmediumimage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let wintersmallimgae =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let wintermediumimag =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.pnge";

function changeseasonspring() {
  seasonSmallImageEl.src = springsmallimage;
  seasonMediumImageEl.src = springmediumimage;
}

function changeseasonsummer() {
  seasonSmallImageEl.src = summersmaillimage;
  seasonMediumImageEl.src = summermediumimage;
}

function changeseasonsautumn() {
  seasonSmallImageEl.src = sutumnsmallimage;
  seasonMediumImageEl.src = sutumnmediumimage;
}

function changeseasonswinter() {
  seasonSmallImageEl.src = wintersmallimgae;
  seasonMediumImageEl.src = wintermediumimag;
}
