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