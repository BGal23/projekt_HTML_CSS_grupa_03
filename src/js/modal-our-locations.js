// (() => {
//   const RefsContact = {
//     openModalBtns: document.querySelectorAll('[location-open]'),
//     closeModalBtn: document.querySelectorAll('[location-close]'),
//     modal: document.querySelector('[location-modal]'),
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
    modal: document.getElementById('location-modal'),
    openModalBtn: document.getElementById('location-open'),
    closeModalBtn: document.getElementById('location-close'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();