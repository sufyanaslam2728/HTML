const hideSideBar = () => {
  document
    .getElementsByClassName("main-container-side-bar-container")[0]
    .classList.add("hide-side-bar");

  document
    .getElementsByClassName("show-close-side-bar-button")[0]
    .classList.replace(
      "show-close-side-bar-button",
      "hide-close-side-bar-button"
    );

  document
    .getElementsByClassName("display-side-bar-button")[0]
    .classList.replace(
      "display-side-bar-button",
      "show-display-side-bar-button"
    );

  const isClass = document
    .getElementsByClassName("header-container")[0]
    .classList.contains("removeBorderLeft");

  if (isClass) {
    document
      .getElementsByClassName("header-container")[0]
      .classList.replace("removeBorderLeft", "addBorderLeft");
  } else {
    document
      .getElementsByClassName("header-container")[0]
      .classList.add("addBorderLeft");
  }

  document
    .getElementsByClassName("main-container-content-container")[0]
    .classList.add("content-container-without-side-bar");

  const tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i <= tabButtons.length; i++)
    tabButtons[i].classList.add("tab-button-without-side-bar");
};

const showSideBar = () => {
  document
    .getElementsByClassName("hide-side-bar")[0]
    .classList.remove("hide-side-bar");

  document
    .getElementsByClassName("hide-close-side-bar-button")[0]
    .classList.replace(
      "hide-close-side-bar-button",
      "show-close-side-bar-button"
    );

  document
    .getElementsByClassName("show-display-side-bar-button")[0]
    .classList.replace(
      "show-display-side-bar-button",
      "display-side-bar-button"
    );

  document
    .getElementsByClassName("header-container")[0]
    .classList.replace("addBorderLeft", "removeBorderLeft");

  document
    .getElementsByClassName("main-container-content-container")[0]
    .classList.remove("content-container-without-side-bar");

  const tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i <= tabButtons.length; i++)
    tabButtons[i].classList.remove("tab-button-without-side-bar");
};
