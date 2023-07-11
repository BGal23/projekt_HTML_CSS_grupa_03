(() => {
  const refs = {
    modal: document.getElementById('read-more-modal'),
    openModalBtn: document.getElementById('read-more-modal-open'),
    closeModalBtn: document.getElementById('read-more-modal-close'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('read-more-modal--hidden');
  }
})();
