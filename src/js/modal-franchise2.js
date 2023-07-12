// (() => {
//   const RefsContact = {
//     openModalBtns: document.querySelectorAll('[franchise-open]'),
//     closeModalBtn: document.querySelectorAll('[franchise-close]'),
//     modal: document.querySelector('[franchise-modal]'),
//   };
//   for (let i = 0; i < RefsContact.openModalBtns.length; i++) {
//     RefsContact.openModalBtns[i].addEventListener('click', toggleModal);
//   }
//   for (let i = 0; i < RefsContact.closeModalBtn.length; i++) {
//     RefsContact.closeModalBtn[i].addEventListener('click', toggleModal);
//   }
//   function toggleModal() {
//     RefsContact.modal.classList.toggle('is-hidden');
//   }
// })();

(() => {
  const refs = {
    modal: document.getElementById('franchise-modal'),
    openModalBtn: document.getElementById('franchise-open'),
    closeModalBtn: document.getElementById('franchise-close'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
