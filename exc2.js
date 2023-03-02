let TboxName = document.getElementById('txtboxName');
let TboxSurname = document.getElementById('txtboxSurname');
let dob = document.getElementById('dob');
let language = document.getElementById('language');

function Focus(elem) {
    elem.style.backgroundColor = "yellow";
}

function Blur(elem) {
    elem.style.backgroundColor = "white";
}

function Submit() {
    if (TboxName.value == "") {
        document.getElementById('body').innerHTML += '<h1 style="color:red;">Insert Name</h1>';
    }

    if (TboxSurname.value == "") {
        document.getElementById('body').innerHTML += '<h1 style="color:red;">Insert Surname</h1>';
    }

    if (dob.value == "") {
        document.getElementById('body').innerHTML += '<h1 style="color:red;">Insert Birth date</h1>';
    }

    if (language.value == "") {
        document.getElementById('body').innerHTML += '<h1 style="color:red;">Select Language</h1>';
    }
}
