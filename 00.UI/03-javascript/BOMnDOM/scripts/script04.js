
const computeEMI = event => {

    let laTB = document.querySelector("#la");
    let roiTB = document.querySelector("#roi");
    let termTB = document.querySelector("#term");

    let loanAmount = Number(laTB.value);
    let roi = Number(roiTB.value);
    let term = Number(termTB.value);

    //EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)

    let emi = (loanAmount * roi * Math.pow(1+roi,term)) / (Math.pow(1+roi,term)-1);

    let emiSpan = document.querySelector("#emi");
    emiSpan.innerText = emi;
   
}
