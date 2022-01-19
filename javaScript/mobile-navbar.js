function discord(){
  alert("Meu id do discord é: Reifhel#4457, sinta-se livre para me mandar mensagens por lá");
}

const primaryNav = document.querySelector('.primary-navigation');
const navToggle  = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {

  const visibility = primaryNav.getAttribute("data-visible");

  if(visibility === "false"){
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  }
  else if(visibility === "true"){
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }

})