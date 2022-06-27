export function handleMobileMenu() {
    let headerMobBtn = document.querySelector('.header__mob-btn');
    let headerMobMenu = document.querySelector('.header__mob-menu');

    const handleMobMenu = (event) => {
        
        let btn = event.target.closest('.header__mob-btn');

        if (!btn.classList.contains('active')) {
            btn.classList.add('active');
            headerMobMenu.classList.add('active');
        }

        else {
            btn.classList.remove('active');
            headerMobMenu.classList.remove('active');
        }
        
    }

    headerMobBtn.addEventListener('click', handleMobMenu );
}