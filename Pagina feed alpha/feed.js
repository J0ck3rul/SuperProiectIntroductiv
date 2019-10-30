let addButton = document.getElementsByClassName("add-button")[0];

addButton.addEventListener("click", () => {

    let template = document.getElementsByClassName("bod")[0].cloneNode(true);

    // grab information from form
    let formName = document.getElementById("name-input").value,
        formDep = document.getElementById("dep-select").value,
        formImgContainer = document.getElementById("form-images"),
        formOpinion = document.getElementById("opinion-textarea").value;


    // grab images url
    let imgSrc = [];

    Array.from(formImgContainer.children).forEach((item) => {
        imgSrc.push(item.getAttribute("src"));
    });
        

    // grab template elements
    let avatar = template.querySelector(".avatar"),
        name = template.querySelector(".name"),
        dep = template.querySelector(".departament"),
        opinion = template.querySelector(".opinion"),
        imgCont = template.querySelector(".image-container");

    imgCont.innerHTML = ""; // empty images container to fill with new images

    // fill new post template with content
    avatar.setAttribute("src", imgSrc[0]);
    name.innerText = formName;
    dep.innerText = formDep;
    opinion.innerText = formOpinion;

    imgSrc.forEach((item) => {
        
        let newImg = document.createElement("img");
        newImg.setAttribute("src", item);
        
        imgCont.appendChild(newImg);

    });

    // append new post to feed

    document.getElementById("feed-section").appendChild(template);

});

// (((upload))) images

let imgInput = document.getElementById("img-input"),
    imgCont = document.getElementById("form-images");

imgInput.onchange = () => {

    Array.from(imgInput.files).forEach((item) => {

        let img = document.createElement("img");
        img.setAttribute("src", URL.createObjectURL(item));

        imgCont.appendChild(img);

    });

}