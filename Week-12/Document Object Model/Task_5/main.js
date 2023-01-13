// Output
/* <img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Elzero New" /> */

for (let i = 0; i < document.images.length; i++) {
    if (document.images[i].hasAttribute("alt")) {
        document.images[i].alt = "Old";
    } else {
        document.images[i].setAttribute("alt","Elzero New");
    }
}