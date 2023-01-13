
let amount = document.querySelector("input");

amount.oninput = function (e) {
    let us = amount.value;
    if(us < 0){
        document.getElementsByClassName("result")[0].innerHTML = `<div>Should Be Positive Value</div>`;
    }else{
        let eg = (us * 15.6).toFixed(2);
        document.getElementsByClassName("result")[0].innerHTML = `<div>${us || 0} USD Dollar = ${eg || 0} Egyptian Pound</div>`;
    }
};