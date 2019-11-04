let addButton = document.getElementsByClassName("add-button")[0];

addButton.addEventListener("click", () => {

    let template = document.getElementsByClassName("body-text")[0].cloneNode(true);

    // grab form elements (we're going to need them later)
    let formNameEl = document.getElementById("name-input"),
        formDepEl = document.getElementById("dep-select"),
        formImgContainer = document.getElementById("form-images"),
        formOpinionEl = document.getElementById("opinion-textarea"),
        imgInput = document.getElementById("img-input");

    // form validation
    let errs = [];
    
    if (formNameEl.value === "") errs.push("Name");
    if (formOpinionEl.value === "") errs.push("Opinion");
    if (imgInput.value === "") errs.push("Images");

    if (errs.length) {

        let msg = "Following inputs cannot be empty: ";

        for (let i = 0; i < errs.length; i++) {
            msg += errs[i];
            if (i < errs.length - 1) msg += ", ";
        }

        alert(msg);

        return 0;

    }

    // grab information from form
    let formName = formNameEl.value,
        formDep = formDepEl.value,
        formOpinion = formOpinionEl.value;


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

    template.scrollIntoView({behavior:"smooth"});

    // Empty form

    formNameEl.value = "";
    formImgContainer.innerHTML = "";
    formOpinionEl.value = "";
    imgInput.value = "";

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