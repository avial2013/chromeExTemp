function OpenGmail(){
    window.open("https://mail.google.com/mail");
}
function OpenUni(){
    window.open("https://meyda.ariel.ac.il/michlol3/StudentPortalWap/Pt_login.aspx");
}

function OpenWhatsapp(){
    window.open("https://web.whatsapp.com/");
}

function OpenModule(){
    window.open("https://moodlearn.ariel.ac.il/auth/multioauth/login.php?userType=student");
}

function OpenAll(){
    window.open("https://mail.google.com/mail");
    window.open("https://meyda.ariel.ac.il/michlol3/StudentPortalWap/Pt_login.aspx");
    window.open("https://web.whatsapp.com/");
    window.open("https://moodlearn.ariel.ac.il/auth/multioauth/login.php?userType=student");
}


const opG = document.getElementById("OpenGmail");
opG.addEventListener("click", OpenGmail);

const opU = document.getElementById("OpenUni");
opU.addEventListener("click",OpenUni);

const opW = document.getElementById("OpenWhatsapp");
opW.addEventListener('click',OpenWhatsapp);

const opM = document.getElementById("OpenModule");
opM.addEventListener("click", OpenModule);

const opA = document.getElementById("OpeAll");
opA.addEventListener("click", OpenAll);

