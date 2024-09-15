import { getDataFromLocalStorage } from "./localStorage";
import { createGroupList, createGroupSelect } from "./group";

const groupsSidebar = document.querySelector(".sidebar-groups");
const contactSidebar = document.querySelector(".sidebar-contact");
const form = document.querySelector(".contact-form");
const fullNameInput = form.elements.fullName;
const phoneNumberInput = form.elements.phoneNumber;

export function openSideBar(sidebar) {
  let groups = getDataFromLocalStorage("groups");

  if (sidebar === groupsSidebar) {
    groupsSidebar?.classList.add("sidebar-groups_active");
    contactSidebar?.classList.remove("sidebar-contact_active");

    createGroupList(groups);
  } else if (sidebar === contactSidebar) {
    contactSidebar?.classList.add("sidebar-contact_active");
    groupsSidebar?.classList.remove("sidebar-groups_active");

    createGroupSelect(groups);
  }
  document.body.classList.add("body_lock");
}

export function closeSideBar(sidebar) {
  if (sidebar === groupsSidebar) {
    groupsSidebar?.classList.remove("sidebar-groups_active");
  } else if (sidebar === contactSidebar) {
    contactSidebar?.classList.remove("sidebar-contact_active");
    fullNameInput.value = "";
    phoneNumberInput.value = "";
  }
  document.body.classList.remove("body_lock");
}
