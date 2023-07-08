     // Pobieranie elementów
    var modal = document.getElementById("myModal");
    var openBtns = document.getElementsByClassName("openModal");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Funkcja otwierająca modal
    function openModal() {
      modal.classList.remove("is-hidden");
    }

    // Funkcja zamykająca modal
    function closeModal() {
      modal.classList.add("is-hidden");
    }

    // Dodanie nasłuchiwaczy dla otwierania modala dla każdego przycisku
    for (var i = 0; i < openBtns.length; i++) {
      openBtns[i].addEventListener("click", openModal);
    }

    // Dodanie nasłuchiwacza dla zamykania modala
    closeBtn.addEventListener("click", closeModal); 
    
    // Pobierz elementy formularza
  const form = document.getElementById('myForm');
  const nameInput = document.getElementById('nameInput');
  const phoneInput = document.getElementById('phoneInput');
  const submitButton = document.getElementById('submitButton');

  // Utwórz funkcję sprawdzającą, czy pola są wypełnione
  function checkFields() {
    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    // Sprawdź, czy pola name i phone mają odpowiednie wartości
    if (nameValue !== '' && phoneValue !== '') {
      submitButton.disabled = false; // Odblokuj przycisk
    } else {
      submitButton.disabled = true; // Zablokuj przycisk
    }
  }

  // Nasłuchuj zmian w polach tekstowych
  nameInput.addEventListener('input', checkFields);
  phoneInput.addEventListener('input', checkFields);

  // Zablokuj przycisk na początku
  checkFields();