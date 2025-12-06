// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Language Toggle (Placeholder)
function toggleLanguage() {
    alert('سيتم إضافة النسخة الإنجليزية قريباً');
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// Scroll Animation
// const observerOptions = {
//     threshold
// }


//by khalid 
let name=document.querySelector(".name-input");
// let email=document.querySelector(".email-input")
let message=document.querySelector(".message-input");
let subject=document.querySelector(".sub-input");


let email_btn=document.querySelector("#email-btn")

let user={
    name:"",
    // email:"",
    message:"",
    subject:""
}

name.addEventListener("input",(e)=>{
    console.log(e.target.value)
    user.name=e.target.value
    
})

// email.addEventListener("input",(e)=>{
//     console.log(e.target.value)
//     user.email=e.target.value
// })

message.addEventListener("input",(e)=>{
    console.log(e.target.value)
    user.message=e.target.value
})

subject.addEventListener("input",(e)=>{
    user.subject=e.target.value;
}

)


email_btn.addEventListener("click",()=>{
    console.log("is click")
    email_btn.href=`mailto:helalmeftah6468@gmail.com?subject=${user.subject}&body=     ${user.message}`;
})


