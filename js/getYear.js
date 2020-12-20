let this_year = new Date().getUTCFullYear();
console.log(this_year);

function get_this_year() {
    document.getElementsByClassName('h1_year')[0].innerHTML = `${this_year}`;
    document.getElementsByClassName('this_year')[0].innerHTML = `${this_year}`;
}

get_this_year();