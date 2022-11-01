"use strict";
const searchButton = document.getElementsByClassName("search-btn");
const searchField = document.getElementById("search-field");
searchButton[0].addEventListener("click", getResults);
var default_li = document.getElementById("default-item");
var ul = document.getElementById("ul");

// execute function getResults if button is clicked
function getResults(ev) {
    ev.preventDefault();
    // here your code
    let searchText = searchField.value;
    console.log(searchText);
    let result = undefined;

    if (searchText === "*" || searchText === "") {
        result = people.peopleList;
    } else {
        result = people.peopleList.find(
            (person) =>
                person.name.toLowerCase() === searchText.toLowerCase() ||
                person.surname.toLowerCase() === searchText.toLowerCase()
        );
    }

    console.log(result);
    ul.innerHTML = "";
    createRecords(result);
}

function createRecords(items) {
    if (Array.isArray(items)) {
        items.forEach((element) => {
            appendElement(element);
        });
    } else {
        appendElement(items);
    }
}

function appendElement(element) {
    var new_li = document.createElement("li");
    new_li.innerHTML = default_li.innerHTML;
    new_li.classList = default_li.classList;

    var first_item = new_li.getElementsByClassName("item-first");
    var second_item = new_li.getElementsByClassName("item-second");
    var third_item = new_li.getElementsByClassName("item-third");

    var name = first_item[0].getElementsByClassName("name");
    var phone = first_item[0].getElementsByClassName("phone");
    var country = first_item[0].getElementsByClassName("country");
    var surname = second_item[0].getElementsByClassName("surname");
    var email = second_item[0].getElementsByClassName("email");
    var description = third_item[0].getElementsByClassName("description");

    name[0].innerText = element.name;
    phone[0].innerText = element.phone;
    country[0].innerText = element.country;
    surname[0].innerText = element.surname;
    email[0].innerText = element.email;
    description[0].innerText = element.description;

    ul.append(new_li);
}

const people = {
    peopleList: [
        {
            name: "Jolie",
            surname: "Foreman",
            phone: "03 47 38 94 63",
            email: "elit.curabitur.sed@protonmail.net",
            country: "Italy",
            description:
                "pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod",
        },
        {
            name: "Alan",
            surname: "Reeves",
            phone: "04 22 33 39 77",
            email: "eget.metus.eu@google.net",
            country: "Costa Rica",
            description:
                "ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem",
        },
        {
            name: "Oleg",
            surname: "Livingston",
            phone: "04 86 21 65 67",
            email: "nunc@protonmail.net",
            country: "Indonesia",
            description:
                "metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget",
        },
        {
            name: "Amos",
            surname: "Merritt",
            phone: "06 26 10 62 68",
            email: "vel@aol.ca",
            country: "New Zealand",
            description:
                "erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit",
        },
        {
            name: "Laurel",
            surname: "Christian",
            phone: "09 51 69 87 14",
            email: "luctus@outlook.net",
            country: "Vietnam",
            description:
                "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed",
        },
        {
            name: "Kiona",
            surname: "Michael",
            phone: "05 62 05 61 84",
            email: "cras.dictum@outlook.org",
            country: "Costa Rica",
            description:
                "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis",
        },
        {
            name: "Carter",
            surname: "Morris",
            phone: "08 27 15 17 16",
            email: "libero.proin.sed@yahoo.couk",
            country: "United States",
            description:
                "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum",
        },
        {
            name: "Christine",
            surname: "Sargent",
            phone: "01 67 57 59 53",
            email: "et@icloud.net",
            country: "Pakistan",
            description:
                "erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit",
        },
        {
            name: "Cameron",
            surname: "Boyle",
            phone: "07 93 10 25 24",
            email: "nullam.scelerisque.neque@hotmail.org",
            country: "New Zealand",
            description:
                "malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper",
        },
        {
            name: "Guy",
            surname: "Vinson",
            phone: "02 55 39 46 59",
            email: "hendrerit@protonmail.couk",
            country: "Vietnam",
            description:
                "eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis",
        },

        {
            name: "Talon",
            surname: "Best",
            phone: "06 22 44 67 61",
            email: "massa.vestibulum.accumsan@outlook.net",
            country: "Costa Rica",
            description:
                "nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin",
        },
        {
            name: "September",
            surname: "Hewitt",
            phone: "08 72 18 61 65",
            email: "diam.lorem@hotmail.edu",
            country: "Austria",
            description:
                "vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est",
        },
        {
            name: "Ryder",
            surname: "Stanley",
            phone: "06 27 78 37 12",
            email: "in@icloud.org",
            country: "Sweden",
            description:
                "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna",
        },
        {
            name: "Hakeem",
            surname: "Turner",
            phone: "03 53 72 15 41",
            email: "penatibus@hotmail.com",
            country: "Ireland",
            description:
                "vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem.",
        },
        {
            name: "Len",
            surname: "Kramer",
            phone: "06 47 58 03 12",
            email: "velit.in@outlook.couk",
            country: "Indonesia",
            description:
                "augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi",
        },
        {
            name: "Almir",
            surname: "Ajradini",
            phone: "01 23 45 67 89",
            email: "almir.ajradini@bbbaden.ch",
            country: "Switzerland",
            description: "Teacher at BBBaden...",
        },
    ],
};

// show every person
people.peopleList.forEach((element) => {
    appendElement(element);
});

default_li.style.display = "none";
