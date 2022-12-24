const pounds = document.querySelector(".pounds-1");
const kilograms = document.querySelector(".kilograms-1");
const grams = document.querySelector(".grams-1");
const ounces = document.querySelector(".ounces-1");
const container = document.querySelector(".container2");

container.addEventListener("input", weightConverter);

function weightConverter (e) {
    if(e.target.classList.contains("pounds-1")){
        let v = e.target.value;
        kilograms.value = (v / 2.2046).toFixed(2);
        grams.value = (v / 0.0022046).toFixed(2);
        ounces.value = (v * 16).toFixed(2);
    }
    if(e.target.classList.contains("kilograms-1")){
        let v = e.target.value;
        pounds.value = (v * 2.2046).toFixed(2);
        grams.value = (v * 1000).toFixed(2);
        ounces.value = (v * 35.274).toFixed(2);
    }
    if(e.target.classList.contains("grams-1")){
        let v = e.target.value;
        pounds.value = (v * 0.0022046).toFixed(2);
        kilograms.value = (v / 1000).toFixed(2);
        ounces.value = (v * 0.035274).toFixed(2);
    }
    if(e.target.classList.contains("ounces-1")){
        let v = e.target.value;
        grams.value =  (v / 0.035274).toFixed(2);
        kilograms.value = (v / 35.274).toFixed(2);
        pounds.value = (v * 0.0625).toFixed(2);
    }
}