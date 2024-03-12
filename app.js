const qrtext=document.getElementById(`qr-text`);
const sizes=document.getElementById(`size`);
const generatebtn=document.getElementById(`generate`);
const downloadbtn=document.getElementById(`download`);
const qrcontain=document.querySelector(`.qr-body`);

let size=sizes.value;

generatebtn.addEventListener('click',(e)=>{
    isempty();
    e.preventDefault();
});

sizes.addEventListener('change',(e)=>{
      size=e.target.value;
      isempty();
})

function isempty()
{
    // if(qrtext.value.length>0)
    // {
    //     generateQRcode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR-Code");
    // }
     qrtext.value.length>0?generateQRcode(): alert("Enter the text or URL to generate your QR-Code");
}

function generateQRcode()
{
    qrcontain.innerHTML="";
    new QRCode(qrcontain,{
        text: qrtext.value,
        width: size,
        height: size,
        colorDark : "#000",
        colorLight : "#fff",
    })
}

downloadbtn.addEventListener('click',()=>{

    let img=document.querySelector(`.qr-body img`);
    if(img!==null)
    {
        let imgatrr=img.getAttribute('src');
        downloadbtn.setAttribute("href",imgatrr);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});