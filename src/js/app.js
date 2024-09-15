import { renderContact, renderContactGroup, renderGroupItem } from "./render";
import { getDataFromLocalStorage, setDataInLocalStorage } from "./localStorage";
import { closeSideBar, openSideBar } from "./sidebar";
import { createGroupList } from "./group";

const addContactBtn = document.getElementById("addContactBtn");
const addGroupBtn = document.getElementById("addGroupBtn");
const saveGroupBtn = document.getElementById("saveGroupBtn");
const saveContactBtn = document.getElementById("saveContact");
const groupsBtn = document.getElementById("groupsBtn");
const groupsSidebar = document.querySelector(".sidebar-groups");
const contactSidebar = document.querySelector(".sidebar-contact");
const groupsSidebarCloseBtn = document.querySelector(
  ".sidebar-groups .sidebar-header__cross",
);
const contactSidebarCloseBtn = document.querySelector(
  ".sidebar-contact .sidebar-header__cross",
);

const groupSelect = document.getElementById("groups");
const form = document.querySelector(".contact-form");
const fullNameInput = form.elements.fullName;
const phoneNumberInput = form.elements.phoneNumber;

function deleteContact(contactList, contacts, typeOfGroup) {
  const deleteIconsArray = contactList.querySelectorAll(".contact-delete");
  deleteIconsArray.forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
      const itemIndex = Number(
        e.target.closest(".contact-group__item").dataset.contactid,
      );
      if (itemIndex === index) {
        contacts.splice(itemIndex, 1);
        e.target.closest(".contact-group__item").remove();
        setDataInLocalStorage(`${typeOfGroup}`, contacts);
      }
      showContacts(typeOfGroup, contactList);
    });
  });
}

function editContact(contactList, contacts) {
  const editIconsArray = contactList.querySelectorAll(".contact-edit");
  editIconsArray.forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
      const contactItem = e.target.closest(".contact-group__item");
      if (Number(contactItem.dataset.contactid) === index) {
        let contact = contacts.find(
          (item, contactIndex) =>
            contactIndex === Number(contactItem.dataset.contactid),
        );

        openSideBar(contactSidebar);

        fullNameInput.value = contact.fullName;
        phoneNumberInput.value = contact.phoneNumber;
        groupSelect.value = contact.typeOfGroup;

        contactSidebar.dataset.indexofcontact = String(index);
        contactSidebar.dataset.typeofgroup = contact.typeOfGroup;
      }
    });
  });
}

function showContacts(typeOfGroup, contactList) {
  const contactsFromLocalStorage = getDataFromLocalStorage(`${typeOfGroup}`);

  contactList.innerHTML = "";
  if (contactsFromLocalStorage.length > 0) {
    contactsFromLocalStorage.forEach((contact, index) => {
      contactList.innerHTML += renderContact(contact, index);
    });
  }

  deleteContact(contactList, contactsFromLocalStorage, typeOfGroup);
  editContact(contactList, contactsFromLocalStorage);
}

function onTitleClick(group, titleOfTheGroup = null) {
  if (!titleOfTheGroup) {
    titleOfTheGroup = group.querySelector(".contact-group__title");
  }

  titleOfTheGroup.classList.toggle("contact-group__title_active");

  const listOfContacts = group.querySelector(".contact-group__list");
  if (titleOfTheGroup.classList.contains("contact-group__title_active")) {
    let typeOfGroup = group.dataset.grouptype;
    showContacts(typeOfGroup, listOfContacts);
  } else {
    listOfContacts.innerHTML = "";
  }
}
function addGroupListener() {
  const contactGroups = document.querySelectorAll(".contact-group");
  contactGroups?.forEach((group) => {
    const titleOfTheGroup = group.querySelector(".contact-group__title");
    titleOfTheGroup.addEventListener("click", () =>
      onTitleClick(group, titleOfTheGroup),
    );
  });
}

function showTitlesOfGroups() {
  let wrapper = document.querySelector(".contacts__wrapper");
  wrapper.innerHTML = "";
  let groupsFromLocalStorage = getDataFromLocalStorage("groups");
  if (groupsFromLocalStorage.length > 0) {
    document.querySelector(".main").classList.remove("main_empty");
    groupsFromLocalStorage.forEach((group) => {
      wrapper.innerHTML += renderContactGroup(group);
    });

    addGroupListener();
  } else {
    document.querySelector(".main").classList.add("main_empty");
  }
}

showTitlesOfGroups();

groupsBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  openSideBar(groupsSidebar);
});

addContactBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  openSideBar(contactSidebar);
  contactSidebar.dataset.indexofcontact = "-1";
  contactSidebar.dataset.typeofgroup = "empty";
});

groupsSidebarCloseBtn?.addEventListener("click", () => {
  closeSideBar(groupsSidebar);
});

contactSidebarCloseBtn?.addEventListener("click", () => {
  closeSideBar(contactSidebar);
});

addGroupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const groupList = document.querySelector(".group-list");
  const lastInput = groupList.querySelector(
    ".group-list__item:last-child input",
  );
  let groups = getDataFromLocalStorage("groups");
  if (!lastInput || (lastInput && lastInput.value.trim() !== "")) {
    if (lastInput && !groups.includes(lastInput.value.trim())) {
      groups.push(lastInput.value.trim());
      createGroupList(groups);
      setDataInLocalStorage(`groups`, groups);
      createGroupList(groups);
    }
    groupList.innerHTML += renderGroupItem(``, groupList.childElementCount + 1);
    showTitlesOfGroups();
  } else {
    alert(
      "Пожалуйста, введите название в последний инпут перед добавлением нового.",
    );
  }
});

function saveGroup() {
  const groupList = document.querySelector(".group-list");
  const groupsItems = groupList.querySelectorAll(".group-list__item");
  let groups = getDataFromLocalStorage("groups");
  groupsItems.forEach((item, index) => {
    const itemValue = item.querySelector(".sidebar-input").value.trim();
    if (itemValue && !groups[index] && !groups.includes(itemValue)) {
      groups.push(itemValue);
      setDataInLocalStorage(`${itemValue}`, []);
    }
  });
  setDataInLocalStorage("groups", groups);
}

saveGroupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saveGroup();
  showTitlesOfGroups();
  closeSideBar(groupsSidebar);
});

function isGroupActive(nameOfGroup) {
  const groupWrapper = document.querySelector(
    `.contact-group[data-grouptype=\"${nameOfGroup}\"]`,
  );
  const titleOfTheGroup = groupWrapper.querySelector(".contact-group__title");
  return titleOfTheGroup.classList.contains("contact-group__title_active");
}

function showGroup(nameOfGroup) {
  const groupWrapper = document.querySelector(
    `.contact-group[data-grouptype=\"${nameOfGroup}\"]`,
  );
  if (!isGroupActive(nameOfGroup)) {
    onTitleClick(groupWrapper);
  } else {
    const listOfContacts = groupWrapper.querySelector(".contact-group__list");
    showContacts(nameOfGroup, listOfContacts);
  }
}

function showGroupChanges(oldGroup, nameOfGroup) {
  const oldGroupWrapper = document.querySelector(
    `.contact-group[data-grouptype=\"${oldGroup}\"]`,
  );
  const listOfOldGroup = oldGroupWrapper.querySelector(".contact-group__list");
  if (oldGroup !== nameOfGroup) {
    showContacts(oldGroup, listOfOldGroup);
    showGroup(nameOfGroup);
  } else {
    showContacts(oldGroup, listOfOldGroup);
  }
}

function isDataValid(fullName, phoneNumber, groupValue) {
  if (fullName && phoneNumber && groupValue) {
    const phoneNumberPattern = /^(\+7|8)\d{10}$|^(\+375)\d{9}$/;
    let isPhoneNumberValid = phoneNumberPattern.test(phoneNumber);
    const fullNamePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
    let isFullNameValid = fullNamePattern.test(fullName);
    return isFullNameValid && isPhoneNumberValid;
  }
  return false;
}

function updateGroupsInLS(contactInfo, groupValue) {
  let indexOfContact = contactSidebar.dataset.indexofcontact;
  let oldTypeOfGroup = contactSidebar.dataset.typeofgroup;
  const oldContacts = getDataFromLocalStorage(`${oldTypeOfGroup}`);
  const newContacts = getDataFromLocalStorage(`${groupValue}`);

  if (indexOfContact > -1 && oldTypeOfGroup !== "empty") {
    oldContacts[indexOfContact] = { ...contactInfo };
    if (oldTypeOfGroup !== groupValue) {
      newContacts.push({ ...contactInfo });
      setDataInLocalStorage(`${groupValue}`, newContacts);
      oldContacts.splice(indexOfContact, 1);
    }
    setDataInLocalStorage(`${oldTypeOfGroup}`, oldContacts);
    showGroupChanges(oldTypeOfGroup, groupValue);
  } else {
    newContacts.push({ ...contactInfo });
    setDataInLocalStorage(`${groupValue}`, newContacts);
    showGroup(contactInfo.typeOfGroup);
  }
}

saveContactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fullName = fullNameInput.value.trim();
  let phoneNumber = phoneNumberInput.value.trim();
  let groupValue = groupSelect.value.trim();

  if (isDataValid(fullName, phoneNumber, groupValue)) {
    let contactInfo = {
      fullName: fullNameInput.value.trim(),
      phoneNumber: phoneNumberInput.value.trim(),
      typeOfGroup: groupSelect.value.trim(),
    };
    updateGroupsInLS(contactInfo, groupValue);
    closeSideBar(contactSidebar);
  } else {
    alert("Введите, пожалуйста, корректные данные!");
  }
});
