const generate_btn = document.querySelector("#generate");
const download_btn = document.querySelector("#download_btn");
const resultat_ele = document.querySelector("#resultat");

let global_qr = "";

async function generate_qr() {
    const text = document.querySelector("#text").value.trim() || "http://www.example.com";
    
    const response = await fetch(`/program?text=${encodeURIComponent(text)}`)

    const data = await response.json();

    resultat_ele.innerHTML = `<img src="${data}" alt="" />`;
}

generate_btn.onclick = function () {
    generate_qr();
}
