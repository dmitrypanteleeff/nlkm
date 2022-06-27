export function preventDefaultContactBox() {


    const prevDefaultContactBox = (event) => {
        event.preventDefault();
    }

    let contactBoxBtnArr = document.querySelectorAll('.contact-box__btn');

    contactBoxBtnArr.forEach(contactBoxBtn =>  contactBoxBtn.addEventListener('click',prevDefaultContactBox));
}