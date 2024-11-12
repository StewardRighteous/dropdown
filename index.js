function showDropDown(element, displayStyle = "block") {
  element.classList.add("show");
  element.style.display = displayStyle;
  element.classList.remove("hide");
}

function hideDropDown(element) {
  element.classList.add("hide");
  element.style.display = "none";
  element.classList.remove("show");
}

function toggleShowOrHideDropDown(element, displayStyle = "block") {
  if (element.classList.contains("hide")) {
    showDropDown(element, displayStyle);
  } else {
    hideDropDown(element);
  }
}

export{showDropDown, hideDropDown, toggleShowOrHideDropDown};
