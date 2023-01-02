const names = [];
const saveButton = document.getElementById('saveButton');
const inputSave = document.getElementById('inputSave');
const inputSearch = document.getElementById('inputSearch');
const namesUL = document.querySelector('.name-list');
const showAllCities = document.getElementById('showAllCities');
const citiesList = document.getElementById('citiesList');
const items = { ...localStorage };
// items.sort();
for (let key in items) {
    names.push(key);
}
names.sort()

let areCitiesShown = false;
showAllCities.addEventListener('click', () => {
    if (areCitiesShown === false) {
        names.forEach(function (name) {
            const newCity = document.createElement("div");
            newCity.addEventListener('click', () => {
                newCity.style.color = "#00FF00";
            });
            newCity.addEventListener('dblclick', () => {
                newCity.style.color = "#FF0000";
            });
            newCity.addEventListener('contextmenu', () => {
                newCity.style.color = "#000000";
            });
            newCity.setAttribute("id", name);
            newCity.innerHTML = "<h4>" + name + "</h4>";
            citiesList.appendChild(newCity);
        });
        areCitiesShown = true;
        showAllCities.innerText = "Hide all cities";
    }
    else {
        names.forEach(function (name) {
            const newCity = document.getElementById(name);
            newCity.remove();
        });
        areCitiesShown = false;
        showAllCities.innerText = "Show all cities";


    }
});



saveButton.addEventListener('click', () => {
    const itemToSave = inputSave.value;
    if (itemToSave) {
        // names.push(itemToSave);
        localStorage.setItem(itemToSave, JSON.stringify(itemToSave));

    }
});


    const clearTheList = () => {
        document.querySelectorAll('.name-list-item').forEach((e) => e.remove());
    };


inputSearch.addEventListener('keyup', (e) => {
    clearTheList();


    const searchValue = inputSearch.value;
    if (searchValue.length === 0) {
        return
    }
    const filteredNames = names.filter(word => word.startsWith(searchValue));

    filteredNames
        .map((n) => {
            const li = document.createElement('li');
            li.classList.add('name-list-item');
            li.setAttribute('data-name', n);
            // li.addEventListener('click', n);
            const l = searchValue.length;
            const firstPart = `<b style='color:orange;'>${n.slice(0, l)}</b>`;
            const secondPart = n.slice(l);
            const word = firstPart + secondPart;
            li.innerHTML = word;
            return li;
        }) //show the list items in the ul
        .forEach((e) => namesUL.appendChild(e));

});

