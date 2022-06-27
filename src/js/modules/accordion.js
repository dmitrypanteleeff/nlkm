
export function accordionFunc() {

    let registerAccBtnArr = document.querySelectorAll('.register__acc-btn');
    let servicesBtnArr = document.querySelectorAll('.services__btn')

    const handleDesciption = (event) => {
        let accBtn = event.target.closest('.register__acc-btn');
        let accordion = event.target.closest('.accordion');
        let registerDescription = accordion.querySelector('.register__description');
        if (accBtn.classList.contains('open')) {
            accBtn.classList.remove('open');
            registerDescription.classList.add('hide');
        }
        else {
            accBtn.classList.add('open');
            registerDescription.classList.remove('hide');
        }
    }

    const handleService = (event) => {
        console.log()

        let servicesBtn = event.target.closest('.services__btn');
        let services = event.target.closest('.services');
        let servicesListAdditional = services.querySelector('.services__list-additional');

        if (servicesBtn.classList.contains('services__btn-open')) {
            servicesListAdditional.classList.remove('hide');
        }
        else if (servicesBtn.classList.contains('services__btn-close')) {
            servicesListAdditional.classList.add('hide');
        }
    }

    registerAccBtnArr.forEach(registerAccBtn => registerAccBtn.addEventListener('click', handleDesciption));
    servicesBtnArr.forEach(servicesBtn => servicesBtn.addEventListener('click', handleService));


}



