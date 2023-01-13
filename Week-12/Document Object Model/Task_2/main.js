
// Output
/* <div>
    <img decoding="async" src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png" alt="Elzero Logo">
</div> */


for (let i = 0; i < document.images.length; i++) {
    document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    document.images[i].alt = "Elzero Logo";
}