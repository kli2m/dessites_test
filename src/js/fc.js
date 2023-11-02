const closeFeedBack = () => {
    const feedback = document.querySelector('.feedback');
    const closeBtn = document.querySelector('.feedback__close');
    closeBtn.addEventListener('click', () => {
        feedback.classList.add('closed');
    })
}

export default closeFeedBack;