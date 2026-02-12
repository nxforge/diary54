async function HiderElements() {
    const h1 = document.getElementsByTagName("h1");
    const h2 = document.getElementsByTagName("h2");

    for (let i = 0; i < h1.length; i++) {
        if (h1.item(i).innerHTML === "") {
            h1.item(i).style = "display: none;";
        } else {
            h1.item(i).style = "display: inline;";
        }
    }

    for (let i = 0; i < h2.length; i++) {
        if (h2.item(i).innerHTML === "") {
            h2.item(i).style = "display: none;";
        } else {
            h2.item(i).style = "display: inline;";
        }
    }
}

HiderElements();

setInterval(() => {HiderElements();}, 1000)