window.addEventListener('DOMContentLoaded', event => {
    emailjs.init("FImC_ahkCuwvWI7cY"); 


    // Função para reduzir o navbar
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Aplica ao carregar
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Scrollspy do Bootstrap
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse da navbar
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Envia o formulário
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm('service_a4klsjb', 'template_xsvlb7v', this)
            .then(() => {
                document.getElementById("submitSuccessMessage").classList.remove("d-none");
                document.getElementById("submitErrorMessage").classList.add("d-none");
                this.reset();
            }, (error) => {
                console.error("Erro ao enviar:", error);
                document.getElementById("submitSuccessMessage").classList.add("d-none");
                document.getElementById("submitErrorMessage").classList.remove("d-none");
            });
    });
});
