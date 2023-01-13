/*
body style => margin: 0; background-color: rgb(236,236,236); font-family: "Tahoma", Ariel;
header => class="website-head" => style => display: flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between;
                                        align-items: center;
        => div => class="logo" title="Website Logo" => style => font-weight: bold; color: rgb(35,169,110); font-size: 26px; => "Elzero"
        => ul => class="menu" => style => padding: 0; margin: 0; display: flex; list-style: none;
div => class="content" => style => display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px);
                                        box-sizing: border-box;
        => div => class="product" => style => padding: 20px; background-color: rgb(255,255,255); border: 1px solid rgb(221,221,221);
                                    width: calc((100% - 40px)/3); box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;
                => span (1)=> style => font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px;
                => "Product"
footer => class="footer" => style => background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255); => "Copyright 2023"
*/

// Start Body Style
document.body.style.cssText = "margin: 0; background-color: rgb(236,236,236); font-family: Tahoma, Ariel;";

// Start Header 
let header = document.createElement("header");
header.classList.add("website-head");
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items: center;";
let div = document.createElement("div");
div.classList.add("logo");
div.setAttribute("title", "Website Logo");
div.style.cssText = "font-weight: bold; color: rgb(35,169,110); font-size: 26px;";
let divText = document.createTextNode("Elzero");
div.appendChild(divText);
header.appendChild(div);
let ul = document.createElement("ul");
ul.classList.add("menu");
ul.style.cssText = "padding: 0; margin: 0; display: flex; list-style: none;";
let ls = ["Home", "About", "Services", "Contact"];
ls.forEach((val) => {
    let li = document.createElement("li");
    li.style.cssText = "margin-right: 16px;";
    let a = document.createElement("a");
    let text = document.createTextNode(val);
    a.setAttribute("href", "#");
    a.style.cssText = "padding: 10px; text-decoration: none; color: #777;";
    a.appendChild(text);
    li.append(a);
    ul.appendChild(li);
});
header.appendChild(ul);
document.body.appendChild(header);


// Start Content 
let divContent = document.createElement("div");
divContent.classList.add("content");
divContent.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";
for (let i = 0; i < 15; i++) {
    let divProduct = document.createElement("div");
    divProduct.classList.add("product");
    divProduct.style.cssText = "padding: 20px; background-color: rgb(255,255,255); border: 1px solid rgb(221,221,221); width: calc((100% - 40px)/3); box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;";
    let span = document.createElement("span");
    span.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px;";
    let spanText = document.createTextNode(`${i + 1}`);
    span.appendChild(spanText)
    divProduct.appendChild(span);
    divProduct.append("Product");
    divContent.appendChild(divProduct);
}
document.body.appendChild(divContent);

// Start Footer 
let footer = document.createElement("footer");
footer.classList.add("footer");
footer.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
let footerText = document.createTextNode("Copyright 2023");
footer.appendChild(footerText);
document.body.appendChild(footer);