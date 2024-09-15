import { getDataFromLocalStorage, setDataInLocalStorage } from "./localStorage";
import { renderFirstOption, renderGroupItem, renderOption } from "./render";

const groupSelect = document.getElementById("groups");

export function deleteGroup(groupList) {
  const deleteIconsArray = groupList.querySelectorAll(".contact-delete");
  deleteIconsArray.forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
      const itemIndex = Number(
        e.target.closest(".group-list__item").dataset.groupid,
      );
      if (itemIndex === index) {
        const groups = getDataFromLocalStorage("groups");
        const nameOfGroup = groups[itemIndex];
        groups.splice(itemIndex, 1);
        setDataInLocalStorage("groups", groups);
        localStorage.removeItem(`${nameOfGroup}`);
        e.target.closest(".group-list__item").remove();
        document
          .querySelector(`.contact-group[data-grouptype=\"${nameOfGroup}\"]`)
          .remove();
      }
    });
  });
}
export function createGroupList(groups) {
  const groupList = document.querySelector(".group-list");
  groupList.innerHTML = "";
  groups.forEach((group, index) => {
    groupList.innerHTML += renderGroupItem(group, index);
  });
  deleteGroup(groupList);
}

export function createGroupSelect(groups) {
  groupSelect.innerHTML = renderFirstOption();
  groups.forEach((group) => {
    groupSelect.innerHTML += renderOption(group);
  });
}
