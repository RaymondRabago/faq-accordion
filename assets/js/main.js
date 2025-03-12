// function that will return if the value is not null or undefined
const isNotNullOrUndefined = (value) => {
    return value !== null && value !== undefined && value !== 'undefined';
}


const Main = {
    accordionClick: () => {
        const accordions = document.querySelectorAll('.js-accordion');

        if(isNotNullOrUndefined(accordions)) {
            accordions.forEach((accordion) => {
                const accordionBtn = accordion.querySelector('.title');
    
                if(isNotNullOrUndefined(accordionBtn)) {
                    accordionBtn.addEventListener('click', function() {
                        const isActive = accordion.classList.contains('active');

                        accordions.forEach((accordion) => {
                            accordion.classList.remove('active');
                            accordion.querySelector('.title').setAttribute('aria-expanded', 'false');
                        });

                        if (!isActive) {
                            accordion.classList.add('active');
                            accordionBtn.setAttribute('aria-expanded', 'true');
                        }
    
                    });
                } 
            });
        }

    },

    init: () => {
        Main.accordionClick();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    Main.init();
})