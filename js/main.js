let btn = document.getElementById("themeBtn");

btn.onclick = function(){
    document.body.classList.toggle('darkTheme')

    // if (document.body.classList.toggle('darkTheme')) {
    //     document.querySelector('#btnText').innerHTML = 'Light'
    // } else {
    //     document.querySelector('#btnText').innerHTML = 'Dark'
    // }
}

