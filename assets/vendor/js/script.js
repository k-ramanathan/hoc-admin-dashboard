let btn = document.querySelector('.card-text-header button')
btn.addEventListener('click',() => {
    let clickBtn = document.querySelector('.card-text-header button i') 
      clickBtn.classList.remove('bx-plus')
      clickBtn.classList.add('bx-check')
})