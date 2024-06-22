
export default function setupNavbar(){
    const navMobileMenu = document.querySelector("#navMobileMenu");
    const navMobileMenuContainer = document.querySelector(
        "#navMobileMenu .absolute",
    );
    
    const toggler = document.querySelector(".navbar-toggler");
    
    toggler?.addEventListener("click", openMenu);
    navMobileMenu?.addEventListener("click", closeMenu);
    
    function openMenu() {
        navMobileMenu?.classList.remove("pointer-events-none");
    
        setTimeout(() => {
            navMobileMenu?.classList.remove("bg-black/0");
            navMobileMenu?.classList.add("bg-black/30");
    
            navMobileMenuContainer?.classList.remove("left-[-16rem]");
            navMobileMenuContainer?.classList.add("left-0");
        }, 50);
    }
    
    function closeMenu() {
        navMobileMenu?.classList.remove("bg-black/30");
        navMobileMenu?.classList.add("bg-black/0");
    
        navMobileMenuContainer?.classList.remove("left-0");
        navMobileMenuContainer?.classList.add("left-[-16rem]");
    
        setTimeout(() => {
            navMobileMenu?.classList.add("pointer-events-none");
        }, 110);
    }

    window.addEventListener("resize", (e) => {
        if (document.body.clientWidth > 751) {
            closeMenu();
        }
    });
}



