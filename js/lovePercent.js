







function makeBinary(e) {
    e.preventDefault();
    var input = document.querySelector("input").value;
    var getResult = document.getElementById("convert");
    var output = document.getElementById("output");
    var result = Number(input);

    if (result < 0) {
        alert("You should enter a positive number");
    };
   result =result.toString(2);
    output.innerText = result;
};


convert.addEventListener("click", makeBinary);

var reload = document.getElementById("reload");
reload.addEventListener("click", function () {
    window.location.reload();
});