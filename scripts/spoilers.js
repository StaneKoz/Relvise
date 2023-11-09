
let linksBlock = document.querySelector('.footer__links');

function clickHandler(ev) {
  target = ev.target;
  if (!target.classList.contains('column-footer__spoiler-button')) {
    return;
  }
  target.classList.toggle('column-footer__spoiler-button_active');
  let linksList = target.parentElement.querySelector('.column-footer__list');
  console.log(linksList);
  console.log(linksList.style.display);
  linksList.classList.toggle('column-footer__list_hidden');
}

linksBlock.addEventListener('click', clickHandler);