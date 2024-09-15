const contactGroups = document.querySelectorAll(".contact-group");
contactGroups.forEach((group)=>{
    const titleOfTheGroup = group.querySelector(".contact-group__title");
    titleOfTheGroup.addEventListener("click", ()=>{
        titleOfTheGroup.classList.toggle("contact-group__title_active");
        const listOfContacts = group.querySelector(".contact-group__list");
        if (titleOfTheGroup.classList.contains("contact-group__title_active")) listOfContacts.innerHTML;
        else listOfContacts.innerHTML = "";
    });
}); /* При нажатии на тайтл для раскрытия в ul рендерятся списки, если для закрытия, то ul очищаем*/ 

//# sourceMappingURL=index.09c24910.js.map
