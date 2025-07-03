//toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            //active navbar links
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    });
   //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("There was a problem submitting the form.");
      }
    });
  });