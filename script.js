const wrapper=document.querySelector('.wrapper'),
qrInput=wrapper.querySelector(".form input"),
generateBtn=wrapper.querySelector('.form button');
qrImg=wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click",()=>{
    let qrvalue=qrInput.value;
    if(!qrvalue) return;
    generateBtn.innerText="Generating QR code...";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generate QR code";

    });
    
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");

    }
})